import styles from "./BodyUser.module.css";

function BodyUsers() {
  return (
    <>
      <div className={styles.UsersContainer}>
        <img
          src="/src/assets/bg-quotes.png"
          alt=""
          className={styles.userTopLogo}
        />
        <section className={styles.userTarget}>
          <p className={styles.userText}>
            Fylo has improved our team productivity by an order of magnitude.
            Since making the swich our team has become a well-oiled
            collaboration machine.
          </p>
          <section className={styles.userTarget2}>
            <img
              src="/src/assets/profile-1.jpg"
              alt=""
              className={styles.userImg}
            />
            <section className={styles.userInfo}>
              <h4>Satish Patel</h4>
              <p>Founder & CEO, Hunddle</p>
            </section>
          </section>
        </section>

        <section className={styles.userTarget}>
          <p className={styles.userText}>
            Fylo has improved our team productivity by an order of magnitude.
            Since making the swich our team has become a well-oiled
            collaboration machine.
          </p>
          <section className={styles.userTarget2}>
            <img
              src="/src/assets/profile-2.jpg"
              alt=""
              className={styles.userImg}
            />
            <section className={styles.userInfo}>
              <h4>Satish Patel</h4>
              <p>Founder & CEO, Hunddle</p>
            </section>
          </section>
        </section>

        <section className={styles.userTarget}>
          <p className={styles.userText}>
            Fylo has improved our team productivity by an order of magnitude.
            Since making the swich our team has become a well-oiled
            collaboration machine.
          </p>
          <section className={styles.userTarget2}>
            <img
              src="/src/assets/profile-3.jpg"
              alt=""
              className={styles.userImg}
            />
            <section className={styles.userInfo}>
              <h4>Satish Patel</h4>
              <p>Founder & CEO, Hunddle</p>
            </section>
          </section>
        </section>
      </div>
    </>
  );
}

export default BodyUsers;
