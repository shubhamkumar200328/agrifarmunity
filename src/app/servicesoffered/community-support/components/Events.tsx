"use client"

import styles from "@/app/servicesoffered/community-support/communitysupport.module.css"

export default function Events() {
  const events = [
    { title: "Organic Farming Workshop", date: "March 25, 2025" },
    { title: "Market Trends Webinar", date: "April 10, 2025" },
  ]

  return (
    <section className={styles.events}>
      <h2>Upcoming Events</h2>
      <ul>
        {events.map((event, index) => (
          <li key={index}>
            <strong>{event.title}</strong> - {event.date}
          </li>
        ))}
      </ul>
    </section>
  )
}
