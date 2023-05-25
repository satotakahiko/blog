import React from 'react'
import Link from 'next/link'
import type { Contents } from '@/pages'
import styles from '@/styles/Cards.module.css'

const Cards = ({ blogs }: { blogs: Contents }) => {
  return (
    <ul className={styles.cards}>
      {blogs ? (
        blogs.map((blog) => {
          const { url } = blog.eyecatch
          return (
            <li key={blog.id} className={styles.wrapCard}>
              <Link href={`/blog/${blog.id}`} className={styles.card}>
                <figure className={styles.imgBlock}>
                  <img src={url} alt="" />
                </figure>
                <div className={styles.cardBody}>
                  <h2 className={styles.blogTitle}>{blog.title}</h2>
                  <div>
                    <p data-category-id={blog.category.id} className={styles.category}>
                      {blog.category.name}
                    </p>
                  </div>
                </div>
              </Link>
            </li>
          )
        })
      ) : (
        <></>
      )}
    </ul>
  )
}

export default Cards
