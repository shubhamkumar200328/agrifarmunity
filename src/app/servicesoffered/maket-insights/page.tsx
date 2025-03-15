import Navbar from "@/components/Navbar"
import styles from "@/app/servicesoffered/maket-insights/maketinsights.module.css"

export default function marketinsights() {
  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <h1 className=" text-4xl text-red-400 m-10">
          Hi, This Page will appear as Market Insights practictioner.
        </h1>
      </div>
    </>
  )
}
