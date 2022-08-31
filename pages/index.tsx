import type { NextPage } from 'next'
import EventList from '../components/events/event-list'
import { getFeaturedEvents } from '../dummy-data'
import { Events } from '../interface/event'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  const featuredEvents: Events[] = getFeaturedEvents()
  return (
    <div className={styles.container}>
     <EventList items={featuredEvents}/>
    </div>
  )
}

export default Home
