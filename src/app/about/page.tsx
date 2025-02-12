import React from "react"
import styles from "@/app/about/about.module.css"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

const AboutPage: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className={styles.container}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <h1 className={styles.heroTitle}>About AgriFarmUnity</h1>
          <p className={styles.heroSubtitle}>
            Empowering Farmers, Building Communities
          </p>
        </section>

        {/* Mission Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Our Mission</h2>
          <p className={styles.sectionText}>
            At AgriFarmUnity, our mission is to create a platform that connects
            farmers directly with their communities, enabling them to sell their
            produce, exchange resources, and access the support they need. We
            aim to empower farmers and strengthen agricultural ecosystems
            worldwide.
          </p>
        </section>

        {/* Vision Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Our Vision</h2>
          <p className={styles.sectionText}>
            We envision a world where farmers are self-reliant, communities are
            interconnected, and agriculture thrives sustainably. Through
            AgriFarmUnity, we strive to bridge the gap between farmers and their
            communities, fostering unity and growth.
          </p>
        </section>

        {/* Team Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Our Team</h2>
          <div className={styles.teamGrid}>
            <div className={styles.teamMember}>
              <h3>John Doe</h3>
              <p>Co-Founder & CEO</p>
            </div>
            <div className={styles.teamMember}>
              <h3>Jane Smith</h3>
              <p>Co-Founder & CTO</p>
            </div>
            <div className={styles.teamMember}>
              <h3>Alice Johnson</h3>
              <p>Head of Community</p>
            </div>
          </div>
        </section>

        {/* Call-to-Action Section */}
        <section className={styles.cta}>
          <h2 className={styles.ctaTitle}>Join Us Today</h2>
          <p className={styles.ctaText}>
            Be part of a growing community that empowers farmers and strengthens
            agriculture.
          </p>
          <button className={styles.ctaButton}>Get Started</button>
        </section>
      </div>
      <Footer />
    </>
  )
}

export default AboutPage
