"use client"

import { useState } from "react"
import styles from "@/app/servicesoffered/community-support/communitysupport.module.css"

export default function DiscussionForum() {
  const [questions, setQuestions] = useState([
    { id: 1, title: "Best crops for summer?", replies: 5 },
    { id: 2, title: "How to prevent pest attacks?", replies: 3 },
  ])

  return (
    <section className={styles.forum}>
      <h2>Discussion Forum</h2>
      <ul>
        {questions.map((q) => (
          <li key={q.id}>
            <a
              href={`/servicesoffered/communitysupport/forum/${q.id}`}
              className={styles.link}
            >
              {q.title} ({q.replies} replies)
            </a>
          </li>
        ))}
      </ul>
      <button className={styles.button}>Ask a Question</button>
    </section>
  )
}
