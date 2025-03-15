import Navbar from "@/components/Navbar"
import styles from "@/app/servicesoffered/crop-exchanges/cropexchanges.module.css"

export default function CropExchanges() {
  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <h1 className=" text-4xl text-red-400 m-10">
          Hi, This Page will appear as crop exchange practictioner.
        </h1>
      </div>
    </>
  )
}
