import React from "react"
import Link from "next/link"
import styles from "@/app/login/auth.module.css"

const LoginPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.authBox}>
        <h1 className={styles.title}>Login</h1>
        <form className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" required />
          </div>
          <button type="submit" className={styles.submitButton}>
            Login
          </button>
        </form>
        <p className={styles.switchText}>
          Don't have an account?{" "}
          <Link href="/register" className={styles.switchLink}>
            Register here
          </Link>
        </p>
      </div>
    </div>
  )
}

export default LoginPage
