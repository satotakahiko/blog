import React from 'react'
import styles from '@/styles/Header.module.css'
import Link from 'next/link'

const Header = () => {
  return (
    <header className={styles.header}>
      <Link href="/" className={styles.title}>
        <h1>Blog Example</h1>
      </Link>
    </header>
  )
}

export default Header
