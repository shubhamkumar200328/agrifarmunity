"use client"

import { useState } from "react"
import styles from "@/app/servicesoffered/community-support/communitysupport.module.css"

export default function SupportForm() {
  const [formData, setFormData] = useState({ name: "", issue: "", contact: "" })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert("Support request submitted!")
  }

  return (
    <section className={styles.support}>
      <h2>Request Support</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="contact"
          placeholder="Contact Info"
          onChange={handleChange}
          required
        />
        <textarea
          name="issue"
          placeholder="Describe your issue"
          onChange={handleChange}
          required
        />
        <button type="submit">Submit Request</button>
      </form>
    </section>
  )
}
