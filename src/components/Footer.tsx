import React from "react"
import Link from "next/link"
import styles from "@/components/Footer.module.css"

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        {/* Quick Links Section */}
        <div className={styles.footerSection}>
          <h3 className={styles.footerTitle}>Quick Links</h3>
          <ul className={styles.footerLinks}>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/services">Services</Link>
            </li>
            <li>
              <Link href="/community">Community</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
            <li>
              <Link href="/loginsection">Login</Link>
            </li>
          </ul>
        </div>

        {/* Social Media Section */}
        <div className={styles.footerSection}>
          <h3 className={styles.footerTitle}>Follow Us</h3>
          <ul className={styles.socialLinks}>
            <li>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info Section */}
        <div className={styles.footerSection}>
          <h3 className={styles.footerTitle}>Contact Us</h3>
          <p>Email: support@agrifarmunity.com</p>
          <p>Phone: +1 234 567 890</p>
          <p>Address: 123 Farm Lane, AgriCity</p>
        </div>
      </div>

      {/* Copyright Section */}
      <div className={styles.copyright}>
        <p>
          &copy; {new Date().getFullYear()} AgriFarmUnity. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
