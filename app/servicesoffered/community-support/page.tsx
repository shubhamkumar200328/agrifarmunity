"use client"

import React from "react"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import DiscussionForum from "./components/DiscussionForum"
import ResourceLibrary from "./components/ResourceLibrary"
import SupportForm from "./components/SupportForm"
import Events from "./components/Events"
import Testimonials from "./components/Testimonials"
import styles from "./communitysupport.module.css"

export default function CommunitySupportPage() {
  return (
    <>
      <Navbar />
      <main className={styles.container}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <h1 className={styles.heroTitle}>Community Support</h1>
          <p className={styles.heroText}>
            Empowering farmers with knowledge, collaboration, and assistance.
          </p>
        </section>

        {/* Sections */}
        <DiscussionForum />
        <ResourceLibrary />
        <SupportForm />
        <Testimonials />
        <Events />
      </main>

      <Footer />
    </>
  )
}
