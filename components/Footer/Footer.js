import React from 'react';
import { useRouter } from 'next/router';
import styles from './footer.module.css'

export default function Footer() {
  const router = useRouter()
  return (
    <div className={styles.container}>
      <div className={styles.buttonContainer}>
        <p className={styles.text}>Let&apos;s Create Something Amazing Together!</p>
        <button className={styles.button} onClick={() => router.push('mailto:jaguar42222@gmail.com')}>
          Contact
        </button>
      </div>
      <p className={styles.copyWrite}>
      © 2023 Digital Jaguar Media
      </p>
    </div>
  )
}
