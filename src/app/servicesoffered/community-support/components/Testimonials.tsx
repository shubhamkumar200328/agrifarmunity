"use client"

import styles from "@/app/servicesoffered/community-support/communitysupport.module.css"

export default function Testimonials() {
  const testimonials = [
    {
      name: "John Doe",
      message: "This community helped me improve my yield by 30%!",
    },
    {
      name: "Jane Smith",
      message: "Great advice on pest control, my crops are healthier!",
    },
  ]

  return (
    <section className={styles.testimonials}>
      <h2>Success Stories</h2>
      <ul>
        {testimonials.map((t, index) => (
          <li key={index}>
            <blockquote>
              "{t.message}"<footer>- {t.name}</footer>
            </blockquote>
          </li>
        ))}
      </ul>
    </section>
  )
}
