import Navbar from "@/components/Navbar"
import styles from "./sustainablepractices.module.css"

export default function Sustainablepractices() {
  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <h1 className=" text-4xl text-red-400 m-10">
          Hi, This Page will appear as Sustainable Practices.
        </h1>
      </div>
    </>
  )
}
