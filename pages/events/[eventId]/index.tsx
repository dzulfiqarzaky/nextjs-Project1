import type { NextPage } from 'next'
import { NextRouter, useRouter } from 'next/router'
import { Fragment } from 'react'
import EventContent from '../../../components/event-detail/event-content'
import EventLogistics from '../../../components/event-detail/event-logistics'
import EventSummary from '../../../components/event-detail/event-summary'
import { getEventById } from '../../../dummy-data'

const EventsDetails: NextPage = () => {
  const router: NextRouter = useRouter()
  const eventId = router.query?.eventId
  const event = getEventById(eventId as string)
  console.log(event)
  if(!event) return <p>No Event Found!</p>
  return (
    <div>
     <Fragment>
      <EventSummary title={event.title}/>
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
     </Fragment>
    </div>
  )
}

export default EventsDetails
