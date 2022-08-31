import { Events } from "../../interface/event"
import EventItem from "./event-item"
import styles from './event-list.module.css'

const EventList = ({items}: {items:Events[]}) => {
    console.log(items)
  return (
    <ul className={styles.list}>
        {items.map(event => <EventItem key={event.id} item={event}/>)}
    </ul>
  )
}

export default EventList