import Navbar from "@/components/Navbar"
import styles from "@/app/servicesoffered/community-support/communitysupport.module.css"

export default function Communitysupport() {
  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <h1 className=" text-4xl text-red-400 m-10">
          Hi, This Page will appear as Community Support practictioner.
        </h1>
      </div>
    </>
  )
}
