import React from 'react';

import { useIsMobile } from '../hooks/useIsMobile';
import atHome from '../assets/portfolio/atmosfireHome.png';
import BrettLogo from '../assets/portfolio/BrettLogo.png';
import Birds from '../assets/portfolio/birds.png';
import divider from '../assets/divider.svg';

import styles from './home.module.css';

export default function Home() {
  const isMobile = useIsMobile(798);
  return (
    <section className={styles.page}>
      <div className={styles.imageContainer}>
        <div className={styles.imageTextWrapper}>
          {!isMobile ? (
            <>
              <h1 className={styles.titleText}>Digital Jaguar Media</h1>
              <p className={styles.subtext}>
                Digital Jaguar Media is committed to delivering attractive, highly
                functional designs based on UI/UX principles.
              </p>
            </>
          ) : null}
        </div>
      </div>
      <div className={styles.contentWrapper}>
        {isMobile ? (
          <>
            <h1 className={styles.titleText}>Digital Jaguar Media</h1>
            <p className={styles.subtext}>
              Digital Jaguar Media is committed to delivering attractive, highly
              functional designs based on UI/UX principles.
            </p>
            <div className={styles.dividerWrapper}>
              <img src={divider.src} className={styles.divider} alt="divider" />
            </div>
          </>
        ) : null}
        <article>
          <h3 className={styles.titleText}>
            {!isMobile ? 'About Digital Jaguar Media' : 'About'}
          </h3>
          <p className={styles.contentText}>
            If you are looking for a new look or just want something that stands out or is
            more user friendly, we can help!
          </p>
          <p className={styles.contentText}>
            Digital Jaguar Media can create user friendly designs for your website, social
            media accounts, business branding or marketing/media projects.{' '}
          </p>
          <p className={styles.contentText}>
            Digital Jaguar Media believes in honesty, accountability and hard work! We
            also value clear and concise communication and strive for excellence in all we
            do!
          </p>
          <p className={styles.contentText}>
            Digital Jaguar Media takes pride in obtaining and maintaining excellent
            customer satisfaction and retention.
          </p>
        </article>
        {!isMobile ? (
          <div className={styles.linksWrapper}>
            <div>
              <div className={styles.linksImages}>
                <img
                  src={atHome.src}
                  alt="Atmosfire Home Page"
                  className={styles.linksWebImage}
                />
              </div>
              <p className={styles.links}><a href="/websites" className={styles.links}>Websites</a></p>{' '}
            </div>
            <div>
              <div className={styles.logoLinksImage}>
                <img
                  src={BrettLogo.src}
                  alt="Business Card "
                  className={styles.linksWebImage}
                />
              </div>
              <p className={styles.links} ><a href="/business" className={styles.links}>Business</a></p>
            </div>
            <div>
              <div className={styles.otherLinksImage}>
                <img
                  src={Birds.src}
                  alt="Birds in Wreath"
                  className={styles.linksWebImage}
                />
              </div>
              <p className={styles.links}><a href='/other-designs' className={styles.links}>Other Designs</a></p>
            </div>
          </div>
        ) : (
          <div className={styles.linksWrapper}>
            <div>
              <p className={styles.links}>Websites</p>{' '}
              <div className={styles.linksImages}>
                <img
                  src={atHome.src}
                  alt="Atmosfire Home Page"
                  className={styles.linksWebImage}
                />
              </div>
            </div>
            <div className={styles.dividerWrapper}>
              <img src={divider.src} className={styles.divider} alt="divider" />
            </div>
            <div>
              <p className={styles.links}>Business</p>
              <div className={styles.logoLinksImage}>
                <img
                  src={BrettLogo.src}
                  alt="Business Card "
                  className={styles.linksWebImage}
                />
              </div>
            </div>
            <div className={styles.dividerWrapper}>
              <img src={divider.src} className={styles.divider} alt="divider" />
            </div>
            <div>
              <p className={styles.links}>Other Designs</p>
              <div className={styles.otherLinksImage}>
                <img
                  src={Birds.src}
                  alt="Birds in Wreath"
                  className={styles.linksWebImage}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
