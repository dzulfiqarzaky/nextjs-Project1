import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import EventList from '../../../components/events/event-list'
import { getFilteredEvents } from '../../../dummy-data'

const FilteredEventsPage: NextPage = () => {
  const router = useRouter()
  const filteredEvents = router.query.filteredEvents
  if(!filteredEvents) return <div className='center'>loading...</div>

  const filteredYear = Number(filteredEvents[0])
  const filteredMonth = Number(filteredEvents[1])
  const filteredEventsData = getFilteredEvents({year: filteredYear, month: filteredMonth})

  console.log(filteredEventsData)
  if(filteredEventsData.length === 0) return <div className="center">No Event Found</div>
  return (
    <>
     <EventList items={filteredEventsData} />
    </>
  )
}

export default FilteredEventsPage
