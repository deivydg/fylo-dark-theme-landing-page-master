import styles from "./BodyTop.module.css";

function BodyTop() {
  return (
    <>
      <div className={styles.bodyTopContainer}>
        <img
          src="/src/assets/illustration-intro.png"
          alt=""
          className={styles.intro}
        />
        <img src="/src/assets/bg-curvy-mobile.svg" alt="" className={styles.curvyMobile}/>
        <img src="/src/assets/bg-curvy-desktop.svg" alt="" className={styles.curvyDesktop}/>
      </div>
    </>
  );
}

export default BodyTop;
