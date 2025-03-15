"use client"
import React from "react"
import { useRouter } from "next/navigation"
import dynamic from "next/dynamic"
import styles from "@/app/servicesoffered/servicesoffered.module.css"
import Navbar from "@/components/Navbar"
import Image from "next/image"
import ml1 from "@/assets/serviceOfferedImages/directcropssale.jpg"
import ml2 from "@/assets/serviceOfferedImages/cropexchange.jpg"
import ml3 from "@/assets/serviceOfferedImages/communitysupport.jpg"
import ml4 from "@/assets/serviceOfferedImages/markettrend.jpg"
import ml5 from "@/assets/serviceOfferedImages/farmingtoolsandresources.jpg"
import ml6 from "@/assets/serviceOfferedImages/sustainablepractices.jpg"

const Footer = dynamic(() => import("@/components/Footer"), { ssr: false })

const ServicesPage: React.FC = () => {
  const router = useRouter()

  // Array of images
  const images = [ml1, ml2, ml3, ml4, ml5, ml6]

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
            {[
              {
                title: "Direct Crop Sales",
                description:
                  "Connect directly with your local community to sell your produce without intermediaries.",
                btntitle: "Start Selling",
              },
              {
                title: "Crop Exchanges",
                description:
                  "Trade crops or resources with other farmers to diversify your harvest.",
                btntitle: "Start Exchanging",
              },
              {
                title: "Community Support",
                description:
                  "Access resources, training, and support from NGOs and the AgriFarmUnity community.",
                btntitle: "Ask for help",
              },
              {
                title: "Market Insights",
                description:
                  "Get real-time market data and trends to make informed decisions about your crops.",
                btntitle: "Get Aware",
              },
              {
                title: "Farming Tools & Resources",
                description:
                  "Access a library of tools, guides, and resources to improve your farming practices.",
                btntitle: "Access Tools",
              },
              {
                title: "Sustainable Practices",
                description:
                  "Learn and implement eco-friendly farming techniques to protect the environment.",
                btntitle: "Start Learning",
              },
            ].map((service, index) => {
              // Convert title to URL-friendly format
              const route = `/servicesoffered/${service.title
                .toLowerCase()
                .replace(/ /g, "-")}`

              return (
                <article key={index} className={styles.serviceCard}>
                  <Image
                    src={images[index % images.length]} // Dynamically select image
                    alt={service.title}
                    width={300}
                    height={300}
                    priority
                    className={styles.imgSafety}
                  />
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <button
                    className={styles.serviceButton}
                    onClick={() => router.push(route)} // Dynamic navigation
                  >
                    {service.btntitle}
                  </button>
                </article>
              )
            })}
          </div>
        </section>

        {/* Call-to-Action Section */}
        <section className={styles.cta}>
          <h2 className={styles.ctaTitle}>Ready to Get Started?</h2>
          <p className={styles.ctaText}>
            Join AgriFarmUnity today and take your farming to the next level.
          </p>
          <button
            className={styles.ctaButton}
            onClick={() => router.push("/loginsection")}
          >
            Join Now
          </button>
        </section>
      </div>
      <Footer />
    </>
  )
}

export default ServicesPage
