import React from 'react';

import useClickOutside from '../hooks/useClickOutside';

import closeIcon from '../assets/closeIcon.svg';
import styles from './nav.module.css';

export default function MobileMenu({ pathname, setShowMenu }) {
  const { ref } = useClickOutside({ handleClick: () => (setShowMenu(false))});

  return (
    <div className={styles.navMenuContainer} ref={ref}>
      <div className={styles.mobileNavHeader}>
      <a href="/" className={styles.mobileTitle}>
        <p>Digital Jaguar Media</p>
        </a>
        <div onClick={() => setShowMenu(false)} className={styles.menuIcon}>
          <img src={closeIcon.src} className={styles.icon} alt="close button" />
        </div>
      </div>
      <ul className={styles.navLinksMobile}>
        <li className={styles.linkText}>
          <a
            href="/websites"
            className={pathname === '/websites' ? styles.linkTextActive : styles.linkText}
          >
            Websites
          </a>
        </li>
        <ul>
          <li className={styles.linkText}>
            <a
              href="/websites/#atmosfire"
              className={
                pathname === '/websites#atmosfire'
                  ? styles.linkTextActive
                  : styles.linkText
              }
            >
              The Atmosfire
            </a>
          </li>
          <li className={styles.linkText}>
            <a
              href="/websites/#innovative"
              className={
                pathname === '/websites#innovative'
                  ? styles.linkTextActive
                  : styles.linkText
              }
            >
              Innovative Construction
            </a>
          </li>
          <li className={styles.linkText}>
            <a
              href="/websites/#peak"
              className={
                pathname === '/websites#peak' ? styles.linkTextActive : styles.linkText
              }
            >
              Peak Fitness Star Valley
            </a>
          </li>
        </ul>

        <li className={styles.linkText}>
          <a
            href="/business"
            className={pathname === '/business' ? styles.linkTextActive : styles.linkText}
          >
            Business Designs
          </a>
        </li>
        <li className={styles.linkText}>
          <a
            href="/other-designs"
            className={
              pathname === '/other-designs' ? styles.linkTextActive : styles.linkText
            }
          >
            Other Designs
          </a>
        </li>
        <li className={styles.linkText}>
          <a
            href="mailto:jaguar42222@gmail.com"
            className={styles.linkText}
          >
            Contact Me
          </a>
        </li>
      </ul>
    </div>
  );
}
