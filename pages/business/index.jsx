import React from 'react';

import brettLogo from '../../assets/BrettLogos.svg';
import brett1 from '../../assets/portfolio/BrettTruck1.jpg';
import brett2 from '../../assets/portfolio/BrettTruck2.jpg';
import stag from '../../assets/portfolio/JagStagDigital.png';
import colter from '../../assets/portfolio/Colter.png'
import colter1 from '../../assets/portfolio/ColterLg.svg'
import colter2 from '../../assets/portfolio/ColterSm.svg'
import kraft from '../../assets/portfolio/Kraft.svg'
import bonj from '../../assets/portfolio/Bonj.svg'

import styles from './business.module.css';

export default function Business() {
  return (
    <section>
      <div className={styles.imageContainerB}>
        <div className={styles.imageTextWrapper}></div>
      </div>
      <h2 className={styles.pageTitle}>Business Designs</h2>
      <div className={styles.businessContent}>
        <div className={styles.cardColumn}>
          <h3 className={styles.pageSubTitle}>ABI Logo & Designs</h3>
          <img src={brettLogo.src} alt='Argyle Card' className={styles.businessImageMd} />
          <img src={brett1.src} alt='Argyle Truck Logo' className={styles.businessImage} />
          <img src={brett2.src} alt='Argyle Truck Logo' className={styles.businessImage} />
        </div>
        <div className={styles.cardColumn}>
          <h3 className={styles.pageSubTitle}>Logos</h3>
          <img src={stag.src} alt='Jag Stag Digital' className={styles.businessImageSm} />
          <img src={kraft.src} alt='Informed Kraftsman' className={styles.businessImageSm} />
          <img src={bonj.src} alt='Bonj' className={styles.businessImageSm} />
         
        
        </div>
        <div className={styles.cardColumn}>
          <h3 className={styles.pageSubTitle}>Colter's Lodge</h3>          
          <img src={colter2.src} alt='Colter Lodge Logo' className={styles.businessImageSm} />
          <img src={colter1.src} alt='Colter Lodge' className={styles.businessImage} />
          <img src={colter.src} alt='Colter Lodge Card' className={styles.businessImageMd} />
        
        </div>
      </div>
    </section>
  );
}
