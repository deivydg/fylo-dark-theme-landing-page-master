import styles from "./BodyProductive.module.css";

function BodyProductive() {
  return (
    <>
      <div className={styles.bodyProductiveContainer}>
        <img
          src="/src/assets/illustration-stay-productive.png"
          alt=""
          className={styles.productiveImg}
        />
        <section className={styles.productiveSection}>
          <h3>Stay productive, wherever you are</h3>
          <p>
            Never let location be an issue when accessing you files. Fylo has
            you covered for all of your file storage needs.
          </p>
          <p>
            Securely share files and folders with friends, family and colleagues
            for live collaboration.No email attachments requiered.
          </p>
          <button>
            See how Fylo works{" "}
            <img
              src="/src/assets/icon-arrow.svg"
              alt=""
              className={styles.productiveArrow}
            />
          </button>
        </section>
      </div>
    </>
  );
}

export default BodyProductive;
