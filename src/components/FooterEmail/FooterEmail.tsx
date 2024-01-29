import React, { useState } from 'react';
import styles from "./FooterEmail.module.css"

function FooterEmail() {
  const [email, setEmail] = useState<string>('');
  const [error, setError] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    setError(null); // Limpiar el error al cambiar el valor del input
  };

  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault(); // Evitar que la página se recargue al hacer clic en el botón

    // Validación simple: Verificar si el correo electrónico tiene un formato válido
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address');
      return;
    }

   
    console.log('Email is valid:', email);
  };

  return (
    <>
      <div className={styles.emailContainer}>
        <h3 className={styles.emailTitle}>Get early access today</h3>
        <p className={styles.emailInfo}>
          It only takes a minute to sign up, and our free starter tier is extremely generous. If
          you have any questions, our support team would be happy to help you.
        </p>
        <form className={styles.emailForm}>
            
          <input
            type="email"
            placeholder="email@example.com"
            value={email}
            onChange={handleInputChange}
            className={styles.emailInput}
          />
          <button onClick={handleButtonClick} className={styles.emailButton}>Get Started For Free</button>
          {error && <p className={styles.emailError}>{error}</p>}
        </form>
      </div>
    </>
  );
}

export default FooterEmail;

