import styles from "./NavegationMobile.module.css";

function NavegationMobile() {
  return (
    <>
      <div className={styles.navContainer}>
        <img src="/src/assets/logo.svg" alt="" className={styles.logo} />
        <ul className={styles.links}>
          <li className={styles.link}>Features</li>
          <li className={styles.link}>Team</li>
          <li className={styles.link}>Sign in</li>
        </ul>
      </div>
    </>
  );
}

export default NavegationMobile;
