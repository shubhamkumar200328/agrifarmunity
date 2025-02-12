import React from "react"
import styles from "@/app/community/community.module.css"
import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"

const CommunityPage: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className={styles.container}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <h1 className={styles.heroTitle}>Our Community</h1>
          <p className={styles.heroSubtitle}>
            Join a thriving network of farmers, supporters, and partners.
          </p>
        </section>

        {/* Testimonials Section */}
        <section className={styles.testimonials}>
          <h2 className={styles.sectionTitle}>What Our Community Says</h2>
          <div className={styles.testimonialGrid}>
            <div className={styles.testimonialCard}>
              <p>
                &quot;AgriFarmUnity has transformed the way I connect with other
                farmers. It&apos;s a game-changer!&quot;
              </p>
              <h3>- John Doe</h3>
            </div>
            <div className={styles.testimonialCard}>
              <p>
                &quot;The platform is easy to use, and the community is
                incredibly supportive.&quot;
              </p>
              <h3>- Jane Smith</h3>
            </div>
            <div className={styles.testimonialCard}>
              <p>
                &quot;I love how AgriFarmUnity brings farmers together. Highly
                recommend it!&quot;
              </p>
              <h3>- Alice Johnson</h3>
            </div>
          </div>
        </section>

        {/* Events Section */}
        <section className={styles.events}>
          <h2 className={styles.sectionTitle}>Upcoming Events</h2>
          <div className={styles.eventGrid}>
            <div className={styles.eventCard}>
              <h3>Farmers&apos; Market Day</h3>
              <p>Date: October 15, 2023</p>
              <p>Location: AgriCity Community Center</p>
            </div>
            <div className={styles.eventCard}>
              <h3>Agricultural Workshop</h3>
              <p>Date: November 5, 2023</p>
              <p>Location: Online</p>
            </div>
            <div className={styles.eventCard}>
              <h3>Harvest Festival</h3>
              <p>Date: December 10, 2023</p>
              <p>Location: Green Valley Farms</p>
            </div>
          </div>
        </section>

        {/* Get Involved Section */}
        <section className={styles.getInvolved}>
          <h2 className={styles.sectionTitle}>Get Involved</h2>
          <p className={styles.sectionText}>
            Join our community and make a difference. Whether you&apos;re a
            farmer, a supporter, or an organization, there&apos;s a place for
            you at AgriFarmUnity.
          </p>
          <button className={styles.ctaButton}>Join Now</button>
        </section>
      </div>
      <Footer />
    </>
  )
}

export default CommunityPage
