import React from 'react';

import { useIsMobile } from '../../hooks/useIsMobile';

import divider from '../../assets/divider.svg';
import bird from '../../assets/portfolio/bird.png';
import elephant from '../../assets/portfolio/elephant.png';
import hippo from '../../assets/portfolio/hippo.svg';
import lock from '../../assets/portfolio/lock.svg';
import lizard from '../../assets/portfolio/lizard.svg';
import target from '../../assets/portfolio/target.svg';

import styles from './other.module.css';

export default function OtherDesigns() {
  const isMobile = useIsMobile(420);

  return (
    <section>
      <div className={styles.imageContainerB}>
        <div className={styles.imageTextWrapper}></div>
      </div>
      <h2 className={styles.pageTitle}>Other Designs</h2>
      <div className={styles.dividerWrapper}>
        {isMobile ? (
          <img src={divider.src} className={styles.divider} alt="divider" />
        ) : (
          '*All of these books can be found on Amazon*'
        )}
      </div>
      <div className={styles.content}>
        <div className={styles.groupContainer}>
          <h3 className={styles.groupTitle}>Adult Coloring Book</h3>
          <div className={styles.groupImages}>
            <img src={bird.src} alt="bird" className={styles.image} />
            {!isMobile ? (
              <img src={elephant.src} alt="elephant" className={styles.image} />
            ) : null}
          </div>
          <a
            href="https://www.amazon.com/Animals-Mandalas-Coloring-Rindee-Jacquart/dp/B09MYST73V/ref=sr_1_3?crid=2468NV2DC9CLL&keywords=rindee+jacquard&qid=1677993533&sprefix=rindee+jacquart%2Caps%2C173&sr=8-3"
            className={styles.link}
          >
            See it here!
          </a>
        </div>
        {isMobile ? (
          <img src={divider.src} className={styles.divider} alt="divider" />
        ) : null}
        <div className={styles.groupContainer}>
          <h3 className={styles.groupTitle}>Inspirational Coloring Book</h3>
          <div className={styles.groupImages}>
            <img src={target.src} alt="target" className={styles.image} />
            {!isMobile ? (
              <img src={lock.src} alt="lock" className={styles.image} />
            ) : null}
          </div>
          <a
            href="https://www.amazon.com/Inspirational-Coloring-Book-Rindee-Jacquart/dp/B09MYVWM12/ref=sr_1_2?crid=2468NV2DC9CLL&keywords=rindee+jacquard&qid=1677993533&sprefix=rindee+jacquart%2Caps%2C173&sr=8-2"
            className={styles.link}
          >
            See it here!
          </a>
        </div>
        {isMobile ? (
          <img src={divider.src} className={styles.divider} alt="divider" />
        ) : null}
        <div className={styles.groupContainer}>
          <h3 className={styles.groupTitle}>Kids Alphabet Book</h3>
          <div className={styles.groupImages}>
            <img src={hippo.src} alt="hippo" className={styles.image} />
            {!isMobile ? (
              <img src={lizard.src} alt="lizard" className={styles.image} />
            ) : null}
          </div>
          <a
            href="https://www.amazon.com/Amazing-Alphabet-Animals-Alliteration-Adventure/dp/B09Q1VDMML/ref=sr_1_1?crid=2468NV2DC9CLL&keywords=rindee+jacquard&qid=1677993475&sprefix=rindee+jacquart%2Caps%2C173&sr=8-1"
            className={styles.link}
          >
            See it here!
          </a>
        </div>
      </div>
    </section>
  );
}
