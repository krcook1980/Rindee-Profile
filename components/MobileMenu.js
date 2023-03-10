import React from 'react';
import styles from './nav.module.css'

export default function MobileMenu({pathname}) {

  return (
    <div className='navMenuContainer'>
      <ul className='navLinksMobile'>
      <li>
              <a href='/Websites' className={pathname === '/Websites' ? 'linkTextActive' : 'linkText'}>Websites</a>
            </li>
            <li>
              <a href='/business' className={pathname === '/business' ? 'linkTextActive' : 'linkText'}>Business</a>
            </li>
            <li>
              <a 
             href='/other-designs' className={pathname === '/other-designs' ? 'linkTextActive' : 'linkText'}>Other Designs</a>
            </li>
        </ul>
    </div>
  )
}
