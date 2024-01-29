import styles from "./BodyMidTarget.module.css";

function BodyMidTarget() {
  return (
    <>
      <div className={styles.bodyMidContainer} >
        <section className={styles.bodyMidSection}>
          <img src="/src/assets/icon-access-anywhere.svg" alt="" />
          <h3 className={styles.midTitle1}>Access your files, anywhere</h3>
          <p>
            The ability to use a smartphone,tablet, or computer to access your
            account means your files follow you everywhere.
          </p>
        </section>
        <section className={styles.bodyMidSection}>
          <img src="/src/assets/icon-security.svg" alt="" className={styles.midImg1}/>
          <h3 className={styles.midTitle2}>Security you cant trust</h3>
          <p className={styles.midText2}>
            2-factor authentication and user-controlled encryption are just a
            couple of the security features we allow to help secure you files.
          </p>
        </section>
        <br />
        <section className={styles.bodyMidSection}>
          <img src="/src/assets/icon-collaboration.svg" alt="" className={styles.midImg2}/>
          <h3 className={styles.midTitle3}>Real-time collaboration</h3>
          <p className={styles.midText3}>
            Securely share files and folders with friends, family and colleagues
            for live collaboration. No email attachments required.
          </p>
        </section>
        <section className={styles.bodyMidSection}>
          <img src="/src/assets/icon-any-file.svg" alt="" className={styles.midImg3}/>
          <h3 className={styles.midTitle4}>Store any type of file</h3>
          <p className={styles.midText4}>
            Whether you´re sharing holidays photos or work documents,fylo has
            you covered allowing for allo file types to be securely stored and
            shared.
          </p>
        </section>
      </div>
    </>
  );
}

export default BodyMidTarget;
