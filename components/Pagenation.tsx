import Link from 'next/link'
import React from 'react'
import styles from '@/styles/Pagenation.module.css'

type OwnProps = {
  totalCount: number
}

export const Pagination: React.FC<OwnProps> = ({ totalCount }) => {
  const PER_PAGE = 9

  const range = (start: number, end: number) => [...Array(end - start + 1)].map((_, i) => start + i)

  return (
    <ul className={styles.pagenation}>
      {range(1, Math.ceil(totalCount / PER_PAGE)).map((number, index) => (
        <li key={index}>
          <Link href={`/blog/page/${number}`} className={styles.btn}>
            {number}
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default Pagination
