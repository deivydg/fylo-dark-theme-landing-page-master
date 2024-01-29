import styles from "./FooterTarget.module.css"

function FooterTarget (){
    return(
        <>
        <div className={styles.footerContainer}>
        <img src="/src/assets/logo.svg" alt="" className={styles.footerLogo}/>
        <section className={styles.footerSection1}>
            <img src="/src/assets/icon-location.svg" alt="" className={styles.footerLocationImg} />
            <p className={styles.footerText1}>
                Lorem ipsum dolor sit amet,
                consectetur adipiscing elit, sed do 
                eiusmod tempor incididunt ut labore
                et dolore magna aliqua
            </p>
        </section>
        <section className={styles.footerSection1}>
            <img src="/src/assets/icon-phone.svg" alt="" className={styles.footerLocationImg}/>
            <p className={styles.footerText}>+1-543-123-4567</p>
        </section>
        <section className={styles.footerSection1}>
            <img src="/src/assets/icon-email.svg" alt="" className={styles.footerLocationImg}/>
            <p className={styles.footerText}>example@fylo.com</p>
        </section>
        <section className={styles.footerSection1}>
            <ul className={styles.footerList}>
                <li>About us</li>
                <li>Jobs</li>
                <li>Press</li>
                <li>Blog</li>
            </ul>
        </section>
        <section className={styles.footerSection1}>
            <ul className={styles.footerList}>
                <li>Contact Us</li>
                <li>Terms</li>
                <li>Privacy</li>
            </ul>
        </section>
        <section className={styles.footerImg}>
            <img src="/src/assets/facebook.png" alt="" />
            <img src="/src/assets/gorjeo.png" alt="" />
            <img src="/src/assets/instagram.png" alt="" />
        </section>
        </div>
        </>
    )
}

export default FooterTarget