import styles from "./FirstInfo.module.css";

function FirstInfo() {
  return (
    <>
      <div className={styles.firstInfoContainer}>
        <h1 className={styles.firstInfoTitle}>
          All your files in one secure location, accessible anywhere.
        </h1>

        <section className={styles.firstInfoSection}>
          <p className={styles.firstInfoP}>
            Fylo stores all your most important files in one secure location.
            Acces them wherever you need, shaare and collaborate with friends
            family, and co-workers.
          </p>

          <button className={styles.firstInfoButton}>Get Started</button>
        </section>
      </div>
    </>
  );
}

export default FirstInfo;
