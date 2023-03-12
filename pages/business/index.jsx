import React from 'react';

import { useIsMobile } from '../../hooks/useIsMobile';

import brettLogo from '../../assets/BrettLogos.svg';
import brett1 from '../../assets/portfolio/BrettTruck1.jpg';
import brett2 from '../../assets/portfolio/BrettTruck2.jpg';
import stag from '../../assets/portfolio/JagStagDigital.png';
import colter from '../../assets/portfolio/Colter.svg';
import colter1 from '../../assets/portfolio/ColterLg.svg';
import colter2 from '../../assets/portfolio/ColterSm.svg';
import kraft from '../../assets/portfolio/Kraft.svg';
import bonj from '../../assets/portfolio/Bonj.svg';
import divider from '../../assets/divider.svg';

import styles from './business.module.css';

export default function Business() {
  const isMobile = useIsMobile(420);

  return (
    <section>
      <div className={styles.imageContainerB}>
        <div className={styles.imageTextWrapper}></div>
      </div>
      <h2 className={styles.pageTitle}>Business Designs</h2>
      {isMobile ? (
        <div className={styles.dividerWrapper}>
          <img src={divider.src} className={styles.divider} alt="divider" />
        </div>
      ) : null}
      <div className={styles.businessContent}>
        <div className={styles.cardColumn}>
          <h3 className={styles.pageSubTitle}>ABI Logo & Designs</h3>
          <img
            src={brettLogo.src}
            alt="Argyle Card"
            className={styles.businessImageCard}
          />
          <img
            src={brett1.src}
            alt="Argyle Truck Logo"
            className={styles.businessImage}
          />
          <img
            src={brett2.src}
            alt="Argyle Truck Logo"
            className={styles.businessImage}
          />
        </div>
        {isMobile ? (
          <div className={styles.dividerWrapper}>
            <img src={divider.src} className={styles.divider} alt="divider" />
          </div>
        ) : null}
        <div className={styles.cardColumn}>
          <h3 className={styles.pageSubTitle}>Logos</h3>
          <img src={stag.src} alt="Jag Stag Digital" className={styles.businessImageMd} />
          <img src={bonj.src} alt="Bonj" className={styles.businessImageMd} />
          <img
            src={kraft.src}
            alt="Informed Kraftsman"
            className={styles.businessImageMd}
          />
        </div>
        {isMobile ? (
          <div className={styles.dividerWrapper}>
            <img src={divider.src} className={styles.divider} alt="divider" />
          </div>
        ) : null}
        <div className={styles.cardColumn}>
          <h3 className={styles.pageSubTitle}>Colter's Lodge</h3>
          <img
            src={colter2.src}
            alt="Colter Lodge Logo"
            className={styles.businessImageSm}
          />
          <img src={colter1.src} alt="Colter Lodge" className={styles.businessImage} />
          <img
            src={colter.src}
            alt="Colter Lodge Card"
            className={styles.businessImageCard}
          />
        </div>
      </div>
    </section>
  );
}
