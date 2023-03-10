import React, {useState} from 'react';
import { useRouter } from 'next/router';

import { useIsMobile } from '../hooks/useIsMobile';
import logo from '../assets/logo.png';
import menuIcon from '../assets/menuIcon.svg';
import styles from './nav.module.css';

import MobileMenu from './MobileMenu';

export default function NavBar() {
  const router = useRouter();
  const isMobile = useIsMobile();
  const [showMenu, setShowMenu] = useState(false);
  const [pathname] = useState(router.pathname)
  return (
    <div className={styles.navBar}>
      <div className={styles.navLogoWrapper}>
       <a href='/'> <img src={logo.src} alt='brand logo' className={styles.navLogo} /></a>
      </div>
      <div className={styles.brandContainer}>
        <h2 className={styles.brandName}>Rindee Jacquart</h2>
        <p className={styles.brandText}>Digital Jaguar</p>
        <p className={styles.brandText}>Media</p>
      </div>

      <div className={styles.navLinks}>
        {!isMobile ? (
          <ul className={styles.navLinksWrapper}>
            <li>
              <a href='/Websites' className={pathname === '/Websites' ? styles.linkTextActive : styles.linkText}>Websites</a>
            </li>
            <li>
              <a href='/business' className={pathname === '/business' ? styles.linkTextActive : styles.linkText}>Business</a>
            </li>
            <li>
              <a 
             href='/other-designs' className={pathname === '/other-designs' ? styles.linkTextActive : styles.linkText}>Other Designs</a>
            </li>
          </ul>
        ) : (
          <div className='menuWrapper'>
          <div className='menuIcon'>
            <img src={menuIcon.src} alt='nav menu' className='icon' onClick={() => setShowMenu(!showMenu)}/>
            {showMenu ? <MobileMenu pathname={pathname} /> : null}
          </div>
          </div>
        )}
      </div>
    </div>
  );
}
