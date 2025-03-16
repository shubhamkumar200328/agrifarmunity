"use client"

import styles from "@/app/servicesoffered/community-support/communitysupport.module.css"

export default function ResourceLibrary() {
  const resources = [
    { title: "Organic Farming 101", link: "/docs/organic-farming.pdf" },
    { title: "Pest Control Guide", link: "/docs/pest-control.pdf" },
  ]

  return (
    <section className={styles.resources}>
      <h2>Resource Library</h2>
      <ul>
        {resources.map((res, index) => (
          <li key={index}>
            <a href={res.link} target="_blank" rel="noopener noreferrer">
              {res.title}
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}
