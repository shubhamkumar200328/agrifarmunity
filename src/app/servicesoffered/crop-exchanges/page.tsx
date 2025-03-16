"use client"

import React, { useState } from "react"
import { useRouter } from "next/navigation"
import styles from "@/app/servicesoffered/crop-exchanges/cropexchanges.module.css"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

interface ExchangeRequest {
  id: number
  name: string
  contact: string
  cropOffered: string
  quantity: string
  exchangeFor: string
  location: string
  notes?: string
}

const CropExchangePage: React.FC = () => {
  const router = useRouter()
  const [requests, setRequests] = useState<ExchangeRequest[]>([])
  const [form, setForm] = useState<ExchangeRequest>({
    id: Date.now(),
    name: "",
    contact: "",
    cropOffered: "",
    quantity: "",
    exchangeFor: "",
    location: "",
    notes: "",
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setRequests([...requests, { ...form, id: Date.now() }])
    setForm({
      id: Date.now(),
      name: "",
      contact: "",
      cropOffered: "",
      quantity: "",
      exchangeFor: "",
      location: "",
      notes: "",
    })
  }

  return (
    <>
      <Navbar />
      <div className={styles.container}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <h1>Crop Exchange</h1>
          <p>
            Trade crops and resources with fellow farmers to diversify your
            harvest.
          </p>
        </section>

        {/* Crop Exchange Form */}
        <section className={styles.formSection}>
          <h2 className=" text-gray-600 text-2xl mb-4 text-center">
            Post an Exchange Request
          </h2>
          <form onSubmit={handleSubmit} className={styles.form}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="contact"
              placeholder="Contact Info"
              value={form.contact}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="cropOffered"
              placeholder="Crop Offered"
              value={form.cropOffered}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="quantity"
              placeholder="Quantity (e.g. 50kg)"
              value={form.quantity}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="exchangeFor"
              placeholder="Looking to Exchange For"
              value={form.exchangeFor}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="location"
              placeholder="Location"
              value={form.location}
              onChange={handleChange}
              required
            />
            <textarea
              name="notes"
              placeholder="Additional Notes (optional)"
              value={form.notes}
              onChange={handleChange}
            />
            <button type="submit" className={styles.submitButton}>
              Submit Request
            </button>
          </form>
        </section>

        {/* Exchange Listings */}
        <section className={styles.listings}>
          <h2 className=" text-red-400">Available Exchange Requests</h2>
          <div className={styles.grid}>
            {requests.length > 0 ? (
              requests.map((request) => (
                <div key={request.id} className={styles.card}>
                  <h3>
                    {request.cropOffered} - {request.quantity}
                  </h3>
                  <p>
                    <strong>Exchange For:</strong> {request.exchangeFor}
                  </p>
                  <p>
                    <strong>Location:</strong> {request.location}
                  </p>
                  <p>
                    <strong>Contact:</strong> {request.contact}
                  </p>
                  {request.notes && (
                    <p>
                      <strong>Notes:</strong> {request.notes}
                    </p>
                  )}
                </div>
              ))
            ) : (
              <p className=" text-red-400">
                No exchange requests available. Be the first to post!
              </p>
            )}
          </div>
        </section>

        {/* Call to Action */}
        <section className={styles.cta}>
          <h2>Join the Crop Exchange Community</h2>
          <p>Start trading your crops today and connect with other farmers.</p>
          <button
            className={styles.ctaButton}
            onClick={() => router.push("/loginsection")}
          >
            Get Started
          </button>
        </section>
      </div>
      <Footer />
    </>
  )
}

export default CropExchangePage
