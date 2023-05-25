import React from 'react'
import styles from '@/styles/Footer.module.css'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Link href="/" className={styles.title}>
        <h1>Blog Example</h1>
      </Link>
      <p>使用技術</p>
      <ul className={styles.tec}>
        <li>・React</li>
        <li>・Next.js</li>
        <li>・TypeScript</li>
        <li>・microCMS</li>
        <li>・Firebase</li>
        <li>・cssはCSS Modulesを使用</li>
      </ul>
    </footer>
  )
}

export default Footer
