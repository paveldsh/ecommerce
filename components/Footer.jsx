import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <div className="footer-container">
      <p className='blue'>Контакты</p>
      <div className='contact-details-container'>
        <Link href="https://vk.com/ikrasamaratlt">
          <a className='my-link'>vk</a>
        </Link>
        <Link href="https://invite.viber.com/?g2=AQB10hNhiBtXEVArsiy9flFRZi7muGNnxV7WCGU94vGlAo4MwwK%2FKY5CeEhgdnfX&lang=en">
          <a className='my-link'>Viber</a>
        </Link>
      </div>
      +7 (927) 216-12-81
    </div>
  )
}

export default Footer;