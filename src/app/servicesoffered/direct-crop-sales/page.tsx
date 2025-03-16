import Navbar from "@/components/Navbar"
import styles from "@/app/servicesoffered/direct-crop-sales/cropsell.module.css"

export default function Cropssell() {
  return (
    <>
      <Navbar />
      <div className={styles.container}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <h1 className={styles.heroTitle}>Sell Your Crops</h1>
          <p className={styles.heroSubtitle}>
            Sell your crops directly to consumers and businesses without
            intermediaries. Join AgriFarmUnity to earn more from your harvest
            and support your local community.
          </p>
          <button className={styles.serviceButton}>Start Selling Now</button>
        </section>

        {/* Guide Section */}
        <section className={styles.cropCollection}>
          <h1 className={styles.heroTitle}>Step-By-Step Guide</h1>
          <p className={styles.heroSubtitle}>Icons will appear here.</p>
        </section>

        {/* Selling crops collection Section */}
        <section className={styles.cropCollection}>
          <h1 className={styles.heroTitle}>Cards inside the grid.</h1>
          <p className={styles.heroSubtitle}>
            Cards which showing the crops collection details which are on sell,
            will appear here.
          </p>

          {/* apply map on these following cards just below */}
          <div className={styles.parentCropCollection}>
            <div className={styles.childCropCollection}>
              <h3>Grains</h3>
              <ul>
                <li>live on sell: 100 crops</li>
                <li>sold out: 1500 crops</li>
                <li>upcoming : 300 crops</li>
                <li>nearest update in: 10 days</li>
              </ul>
            </div>
            <div className={styles.childCropCollection}>
              <h3>Fruits</h3>
              <ul>
                <li>live on sell: 100 crops</li>
                <li>sold out: 1500 crops</li>
                <li>upcoming : 300 crops</li>
                <li>nearest update in: 10 days</li>
              </ul>
            </div>
            <div className={styles.childCropCollection}>
              <h3>Vegetables</h3>
              <ul>
                <li>live on sell: 100 crops</li>
                <li>sold out: 1500 crops</li>
                <li>upcoming : 300 crops</li>
                <li>nearest update in: 10 days</li>
              </ul>
            </div>
            <div className={styles.childCropCollection}>
              <h3>Oilseeds</h3>
              <ul>
                <li>live on sell: 100 crops</li>
                <li>sold out: 1500 crops</li>
                <li>upcoming : 300 crops</li>
                <li>nearest update in: 10 days</li>
              </ul>
            </div>
            <div className={styles.childCropCollection}>
              <h3>Herbs & Spices</h3>
              <ul>
                <li>live on sell: 100 crops</li>
                <li>sold out: 1500 crops</li>
                <li>upcoming : 300 crops</li>
                <li>nearest update in: 10 days</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Each Crop Selling Details Section */}
        <section className={styles.cropCollection}>
          <h1 className={styles.heroTitle}>Each Crop Selling Details</h1>
          <div className={styles.cropContainer}>
            <div className={styles.cropCard}>
              <h2 className=" text-3xl text-rose-400">1. Grains:________</h2>
              <p className="text-xl">
                Cards with image and crop price, deadline, etc.. details will
                appear here.
              </p>
            </div>
            <div className={styles.cropCard}>
              <h2 className=" text-3xl text-rose-400">2. Fruits:________</h2>
              <p className="text-xl">
                Cards with image and crop price, deadline, etc.. details will
                appear here.
              </p>
            </div>
            <div className={styles.cropCard}>
              <h2 className=" text-3xl text-rose-400">
                3. Vegetables:________
              </h2>
              <p className="text-xl">
                Cards with image and crop price, deadline, etc.. details will
                appear here.
              </p>
            </div>
            <div className={styles.cropCard}>
              <h2 className=" text-3xl text-rose-400">4. Oilseeds:________</h2>
              <p className="text-xl">
                Cards with image and crop price, deadline, etc.. details will
                appear here.
              </p>
            </div>
            <div className={styles.cropCard}>
              <h2 className=" text-2xl text-rose-400">
                5. Herbs & Spices:_____
              </h2>
              <p className="text-xl">
                Cards with image and crop price, deadline, etc.. details will
                appear here.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
