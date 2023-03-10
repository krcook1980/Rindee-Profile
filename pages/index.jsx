import React from 'react';

import atHome from '../assets/portfolio/atmosfireHome.png';
import styles from './home.module.css';
import BrettLogo from '../assets/portfolio/BrettLogo.png';
import Birds from '../assets/portfolio/birds.png';

export default function Home() {
  return (
    <section className={styles.page}>
      <div className={styles.imageContainer}>
        <div className={styles.imageTextWrapper}>
          <h2 className={styles.titleText}>Digital Jaguar Media</h2>
          <p className={styles.subtext}>
            Digital Jaguar Media is committed to delivering attractive, highly
            functional designs based on UI/UX principles.
          </p>
        </div>
      </div>
      <div className={styles.contentWrapper}>
        <article>
          <h3 className={styles.titleText}>About Digital Jaguar Media</h3>
          <p className={styles.contentText}>
            If you are looking for a new look or just want something that stands
            out or is more user friendly, we can help!
          </p>
          <p className={styles.contentText}>
            Digital Jaguar Media can create user friendly designs for your
            website, social media accounts, business branding or marketing/media
            projects.{' '}
          </p>
          <p className={styles.contentText}>
            Digital Jaguar Media believes in honesty, accountability and hard
            work! We also value clear and concise communication and strive for
            excellence in all we do!
          </p>
          <p className={styles.contentText}>
            Digital Jaguar Media takes pride in obtaining and maintaining
            excellent customer satisfaction and retention.
          </p>
        </article>
        <div className={styles.linksWrapper}>
          <div>
            <div className={styles.linksImages}>
              <img
                src={atHome.src}
                alt='Atmosfire Home Page'
                className={styles.linksWebImage}
              />
            </div>
            <p className={styles.links}>Websites</p>{' '}
          </div>
          <div>
            <div className={styles.logoLinksImage}>
              <img
                src={BrettLogo.src}
                alt='Business Card '
                className={styles.linksWebImage}
              />
            </div>
            <p className={styles.links}>Business</p>
          </div>
          <div>
            <div className={styles.otherLinksImage}>
              <img
                src={Birds.src}
                alt='Birds in Wreath'
                className={styles.linksWebImage}
              />
            </div>
            <p className={styles.links}>Other Designs</p>
          </div>
        </div>
      </div>
    </section>
  );
}
