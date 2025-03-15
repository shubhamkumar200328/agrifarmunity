import Navbar from "@/components/Navbar"
import styles from "@/app/servicesoffered/farming-tools-&-resources/farmingtools&resources.module.css"

export default function Farmingtoolsandresources() {
  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <h1 className=" text-4xl text-red-400 m-10">
          Hi, This Page will appear as Farming Tools and Resources
          practictioner.
        </h1>
      </div>
    </>
  )
}
