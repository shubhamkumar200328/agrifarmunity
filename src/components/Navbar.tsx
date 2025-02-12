"use client"

import React, { useState } from "react"
import Link from "next/link"
import styles from "@/components/Navbar.module.css"

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div className="navDiv">
      <nav className={styles.navbar}>
        {/* Logo */}
        <div className={styles.logo}>
          <Link href="/">AgriFarmUnity</Link>
        </div>

        {/* Hamburger Menu Icon (Mobile) */}
        <div className={styles.menuIcon} onClick={toggleMenu}>
          <div className={styles.bar}></div>
          <div className={styles.bar}></div>
          <div className={styles.bar}></div>
        </div>

        {/* Nav Links */}
        <ul className={`${styles.navLinks} ${isMenuOpen ? styles.active : ""}`}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/servicesoffered">Services</Link>
          </li>
          <li>
            <Link href="/community">Community</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
          <li>
            <Link href="/login">login</Link>
          </li>
        </ul>
      </nav>
      <hr className="h-1 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500" />
    </div>
  )
}

export default Navbar
