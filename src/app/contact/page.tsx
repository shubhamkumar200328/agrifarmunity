import React from "react"
import styles from "@/app/contact/contact.module.css"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

const ContactPage: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className={styles.container}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <h1 className={styles.heroTitle}>Contact Us</h1>
          <p className={styles.heroSubtitle}>
            We&apos;d love to hear from you! Reach out for any inquiries or
            support.
          </p>
        </section>

        {/* Contact Form Section */}
        <section className={styles.contactForm}>
          <h2 className={styles.sectionTitle}>Send Us a Message</h2>
          <form className={styles.form}>
            <div className={styles.formGroup}>
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
              ></textarea>
            </div>
            <button type="submit" className={styles.submitButton}>
              Send Message
            </button>
          </form>
        </section>

        {/* Contact Info Section */}
        <section className={styles.contactInfo}>
          <h2 className={styles.sectionTitle}>Our Contact Information</h2>
          <div className={styles.infoGrid}>
            <div className={styles.infoItem}>
              <h3>Email</h3>
              <p>support@agrifarmunity.com</p>
            </div>
            <div className={styles.infoItem}>
              <h3>Phone</h3>
              <p>+1 234 567 890</p>
            </div>
            <div className={styles.infoItem}>
              <h3>Address</h3>
              <p>123 Farm Lane, AgriCity</p>
            </div>
          </div>
        </section>

        {/* Map Section (Optional) */}
        <section className={styles.mapSection}>
          <h2 className={styles.sectionTitle}>Find Us on the Map</h2>
          <div className={styles.map}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.8354345093747!2d144.95373531531615!3d-37.816279742021665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577d6a32f4f1c8e!2sFederation%20Square!5e0!3m2!1sen!2sus!4v1625072000000!5m2!1sen!2sus"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}

export default ContactPage
