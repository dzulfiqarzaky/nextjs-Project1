import Image from "next/image"
import { Events } from "../../interface/event"
import AddressIcon from "../icons/address-icon"
import ArrowRightIcon from "../icons/arrow-right-icon"
import DateIcon from "../icons/date-icon"
import Button from "../ui/button"
import styles from './event-item.module.css'

const EventItem = ({item}: {item: Events}) => {

    const humanReadableDate = new Date(item?.date).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    })

    const formattedAddress = item?.location?.replace(', ', '\n')
    const exploreLink = `/events/${item?.id}`

    return (
        <li className={styles.item}>
            <Image src={'/' + item.image} alt={item.title} width={250} height={250} />
            <div className={styles.content}>
                <div className={styles.summary}>
                    <h2>{item.title}</h2>
                    <div className={styles.date}>
                        <DateIcon/>
                        <time>{humanReadableDate}</time>
                    </div>
                    <div className={styles.address}>
                        <AddressIcon/>
                        <address>{formattedAddress}</address>
                    </div>
                </div>
                <div className={styles.actions}>
                    <Button href={exploreLink}>
                        <span>
                            Explore Event
                        </span>
                        <span className={styles.icon}>
                            <ArrowRightIcon/>
                        </span>
                    </Button>
                </div>
            </div>
        </li>
    )
}

export default EventItem