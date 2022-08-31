import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { Fragment } from 'react'
import EventList from '../../components/events/event-list'
import EventSearch from '../../components/events/events-search'
import { getAllEvents } from '../../dummy-data'

const Events: NextPage = () => {
    const events = getAllEvents()
    const router = useRouter()
    const onSearch = (year: number, month: number) => {
        const fullPath = `/events/${year}/${month}`
        router.push(fullPath)
    }
  return (
    <Fragment>
        <EventSearch onSearch={onSearch}/>
        <EventList items={events}/>
    </Fragment>
  )
}

export default Events
