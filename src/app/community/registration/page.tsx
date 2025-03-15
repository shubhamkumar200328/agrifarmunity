import React from "react"
import Link from "next/link"
import styles from "@/app/loginsection/login/auth.module.css"

const RegisterAsAdmin: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.authBox}>
        <h1 className={styles.title}>Register</h1>
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
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" required />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              required
            />
          </div>
          <button type="submit" className={styles.submitButton}>
            Register
          </button>
        </form>
        <p className={styles.switchText}>
          Already have an account?{" "}
          <Link href="/login" className={styles.switchLink}>
            Login here
          </Link>
        </p>
      </div>
    </div>
  )
}

export default RegisterAsAdmin
