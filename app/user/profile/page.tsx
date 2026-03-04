import Navbar from "@/components/Navbar"
import styles from "./profile.module.css"

export default function Profile() {
  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.child1}>
          <h3>User-Profile</h3>
          <p>here will be profile details as user</p>
        </div>
        <hr />
        <div className={styles.child1}>
          <h3>Community-Profile</h3>
          <p>
            here will be profile details as farmer or Vander or StorageOwner or
            any community member.
          </p>
        </div>
      </div>
    </>
  )
}
