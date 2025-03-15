import React from "react"
import Link from "next/link"
import styles from "@/app/loginsection/login/auth.module.css"

const LoginAsAdmin: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.authBox}>
        <h1 className={styles.title}>Admin-login</h1>
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
          Don&apos;t have an account?{" "}
          <Link
            href="/loginsection/register-as-admin"
            className={styles.switchLink}
          >
            Register here
          </Link>
        </p>
      </div>
    </div>
  )
}

export default LoginAsAdmin
