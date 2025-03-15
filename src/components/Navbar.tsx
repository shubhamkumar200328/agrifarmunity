"use client"
import React, { useState } from "react"
import Link from "next/link"
import styles from "@/components/Navbar.module.css"
import logoImage from "@/assets/logo.png"
import Image from "next/image"

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div className="navDiv">
      <nav className={styles.navbar}>
        {/* Logo */}
        <div className="logo space-x-6 flex flex-row items-center">
          <Image src={logoImage.src} alt="logo" width={54} height={54} />
          <Link href="/" className=" text-3xl text-slate-900">
            AgriFarm<label className="text-3xl text-green-500">Unity</label>
          </Link>
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
            <Link href="/servicesoffered">Services</Link>
          </li>
          <li>
            <Link href="/community">Community</Link>
          </li>
          <li>
            <Link href="/admin">Admin</Link>
          </li>
          <li>
            <Link href="/user/profile">Profile</Link>
          </li>
        </ul>
      </nav>
      {/* <hr className=" h-0.5 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500" /> */}
      <hr className=" h-0.5 bg-gradient-to-r from-green-400  to-black" />
    </div>
  )
}

export default Navbar
