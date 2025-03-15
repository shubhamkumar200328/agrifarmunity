import styles from "@/app/loginsection/loginsection.module.css"
import Navbar from "@/components/Navbar"
import Link from "next/link"

export default function Login() {
  return (
    <>
      <Navbar />
      <h2 className=" text-3xl text-center mt-7 text-green-600">Login As-</h2>
      <div className={styles.container}>
        <div className={styles.child1}>
          <Link href="/loginsection/login">User/Community</Link>
        </div>
        <div className={styles.child2}>
          <Link href="/loginsection/login-as-admin">Admin</Link>
        </div>
      </div>
    </>
  )
}
