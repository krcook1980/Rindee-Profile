import React from 'react';

import fire from '../../assets/portfolio/atmosfireHome.png';
import fire1 from '../../assets/portfolio/atmosfireAbout.png';
import inn from '../../assets/portfolio/innMain.svg';
import inn1 from '../../assets/portfolio/inn1.svg';
import peak from '../../assets/portfolio/finalPeakHome.png';
import peak1 from '../../assets/portfolio/peakContact.png';
import divider from '../../assets/divider.svg';
import hero from '../../assets/portfolio/jagWeb2.jpg'

import { useIsMobile } from '../../hooks/useIsMobile';

import styles from './websites.module.css';

export default function Websites() {
  const isMobile = useIsMobile();

  return (
    <section className={styles.page}>
      <div className={styles.imageContainer}>
        <img src={hero.src} className={styles.hero} />
      </div>
      <h2 className={styles.pageTitle}>Website Designs</h2>
      {!isMobile ? (
        <p className={styles.subtext}>Here Are A Few Of The Websites I Have Created.</p>
      ) : null}
      {isMobile ? (
        <div className={styles.content}>
          <div className={styles.projectLabel}>
            <h3 className={styles.subtext}>Atmosfire</h3>
            <div className={styles.contentText}>
              <a href="www.theatmosfire.com" className={styles.contentText}>
                www.theatmosfire.com
                <p>Will soon be live!</p>
              </a>
            </div>
          </div>
          <div className={styles.projectContainer}>
            <img src={fire.src} alt="Atmosfire Main Page" className={styles.projectTop} />
            <img
              src={fire1.src}
              alt="Atmosfire About Page"
              className={styles.projectBottom}
            />
          </div>
          <div className={styles.dividerWrapper}>
            <img src={divider.src} className={styles.divider} alt="divider" />
          </div>
          <div className={styles.projectLabel}>
            <h3 className={styles.subtext}>Innovative Construction</h3>
            <div className={styles.contentText}>
              <a href="www.innovativeconst.net" className={styles.contentText}>
                www.innovativeconst.net
              </a>
            </div>
          </div>
          <div className={styles.projectContainer}>
            <img
              src={inn.src}
              alt="Innovative Const Main Page"
              className={styles.projectTop}
            />
            <img
              src={inn1.src}
              alt="Innovative Const Other Page"
              className={styles.projectBottom}
            />
          </div>
          <div className={styles.dividerWrapper}>
            <img src={divider.src} className={styles.divider} alt="divider" />
          </div>
          <div className={styles.projectLabel}>
            <h3 className={styles.subtext}>Peak Fitness Star Valley</h3>
            <div className={styles.contentText}>
              <a href="www.peakfitnessafton.com" className={styles.contentText}>
                www.peakfitnessafton.com
                <p>Will soon be live!</p>
              </a>
            </div>
          </div>
          <div className={styles.projectContainer}>
            <img
              src={peak.src}
              alt="Peak Fitness Main Page"
              className={styles.projectTop}
            />
            <img
              src={peak1.src}
              alt="Atmosfire About Page"
              className={styles.projectBottom}
            />
          </div>
        </div>
      ) : (
        <div className={styles.content}>
          <div className={styles.projectWrapper} id="atmosfire">
            <div className={styles.projectMain}>
              <img
                src={fire.src}
                alt="Atmosfire About Page"
                className={styles.mainImage}
              />
            </div>
            <div className={styles.projectDetails}>
              <h3 className={styles.subtext}>Atmosfire</h3>
              <div className={styles.contentText}>
                <a href="www.theatmosfire.com" className={styles.contentText}>
                  www.theatmosfire.com
                  <p>Will soon be live!</p>
                </a>
              </div>
            </div>
            <div className={styles.projectChild}>
              <img
                src={fire1.src}
                alt="Atmosfire About Page"
                className={styles.childImage}
              />
            </div>
          </div>
          <div className={styles.projectWrapper} id="innovative">
            <div className={styles.projectMainL}>
              <img
                src={inn.src}
                alt="Innovative Const Main Page"
                className={styles.mainImageL}
              />
            </div>
            <div className={styles.projectDetailsL}>
              <h3 className={styles.subtext}>Innovative Construction</h3>
              <div className={styles.contentText}>
                <a href="www.innovativeconst.net" className={styles.contentText}>
                  www.innovativeconst.net
                </a>
              </div>
            </div>
            <div className={styles.projectChildL}>
              <img
                src={inn1.src}
                alt="Innovative Const Other Page"
                className={styles.childImageL}
              />
            </div>
          </div>
          <div className={styles.projectWrapper} id="peak">
            <div className={styles.projectMain}>
              <img
                src={peak.src}
                alt="Peak Fitness Main Page"
                className={styles.mainImage}
              />
            </div>
            <div className={styles.projectDetails}>
              <h3 className={styles.subtext}>Peak Fitness Star Valley</h3>
              <div className={styles.contentText}>
                <a href="www.peakfitnessafton.com" className={styles.contentText}>
                  www.peakfitnessafton.com
                  <p>Will soon be live!</p>
                </a>
              </div>
            </div>
            <div className={styles.projectChild}>
              <img
                src={peak1.src}
                alt="Atmosfire About Page"
                className={styles.childImage}
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
