import React from "react"
import styles from "@/components/Home.module.css" // CSS module for styling
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

const HomePage: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className={styles.container}>
        {/* Hero Section */}
        <header className={styles.hero}>
          <h1 className={styles.heroTitle}>Welcome to AgriFarmUnity</h1>
          <p className={styles.heroSubtitle}>
            Uniting Farmers, Growing Communities
          </p>
          <div className={styles.heroButtons}>
            <button className={styles.primaryButton}>Join as a Farmer</button>
            <button className={styles.secondaryButton}>
              Explore the Community
            </button>
          </div>
        </header>

        {/* Features Section */}
        <section className={styles.features}>
          <h2 className={styles.sectionTitle}>What We Offer</h2>
          <div className={styles.featureGrid}>
            <div className={styles.featureCard}>
              <h3>Direct Crop Sales</h3>
              <p>Sell your produce directly to your local community.</p>
            </div>
            <div className={styles.featureCard}>
              <h3>Crop Exchanges</h3>
              <p>Trade crops or resources with other farmers.</p>
            </div>
            <div className={styles.featureCard}>
              <h3>Community Support</h3>
              <p>Connect with NGOs and get the support you need.</p>
            </div>
          </div>
        </section>

        {/* Call-to-Action Section */}
        <section className={styles.cta}>
          <h2 className={styles.sectionTitle}>Join the Movement</h2>
          <p className={styles.ctaText}>
            Be part of a growing community that empowers farmers and strengthens
            agriculture.
          </p>
          <button className={styles.primaryButton}>Get Started</button>
        </section>
      </div>
      <Footer />
    </>
  )
}

export default HomePage
