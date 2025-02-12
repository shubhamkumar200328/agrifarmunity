import React from "react"
import styles from "@/app/servicesoffered/servicesoffered.module.css"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

const ServicesPage: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className={styles.container}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <h1 className={styles.heroTitle}>Our Services</h1>
          <p className={styles.heroSubtitle}>
            Empowering farmers with innovative solutions and support.
          </p>
        </section>

        {/* Services Grid Section */}
        <section className={styles.servicesGrid}>
          <h2 className={styles.sectionTitle}>What We Offer</h2>
          <div className={styles.grid}>
            {/* Direct Crop Sales */}
            <div className={styles.serviceCard}>
              <h3>Direct Crop Sales</h3>
              <p>
                Connect directly with your local community to sell your produce
                without intermediaries.
              </p>
            </div>

            {/* Crop Exchanges */}
            <div className={styles.serviceCard}>
              <h3>Crop Exchanges</h3>
              <p>
                Trade crops or resources with other farmers to diversify your
                harvest.
              </p>
            </div>

            {/* Community Support */}
            <div className={styles.serviceCard}>
              <h3>Community Support</h3>
              <p>
                Access resources, training, and support from NGOs and the
                AgriFarmUnity community.
              </p>
            </div>

            {/* Market Insights */}
            <div className={styles.serviceCard}>
              <h3>Market Insights</h3>
              <p>
                Get real-time market data and trends to make informed decisions
                about your crops.
              </p>
            </div>

            {/* Farming Tools & Resources */}
            <div className={styles.serviceCard}>
              <h3>Farming Tools & Resources</h3>
              <p>
                Access a library of tools, guides, and resources to improve your
                farming practices.
              </p>
            </div>

            {/* Sustainable Practices */}
            <div className={styles.serviceCard}>
              <h3>Sustainable Practices</h3>
              <p>
                Learn and implement eco-friendly farming techniques to protect
                the environment.
              </p>
            </div>
          </div>
        </section>

        {/* Call-to-Action Section */}
        <section className={styles.cta}>
          <h2 className={styles.ctaTitle}>Ready to Get Started?</h2>
          <p className={styles.ctaText}>
            Join AgriFarmUnity today and take your farming to the next level.
          </p>
          <button className={styles.ctaButton}>Join Now</button>
        </section>
      </div>
      <Footer />
    </>
  )
}

export default ServicesPage
