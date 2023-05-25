import { Noto_Sans_JP } from 'next/font/google'
import type { GetStaticPropsContext } from 'next'
import { Pagination } from '@/components/Pagenation'
import { client } from '@/lib/client'
import React from 'react'
import type { Props } from '@/pages'
import Head from 'next/head'
import Cards from '@/components/Cards'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import styles from '@/styles/Home.module.css'

const notojp = Noto_Sans_JP({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
})

const PER_PAGE = 9

const BlogPageId: React.FC<Props> = ({ blogs, totalCount }) => {
  return (
    <>
      <Head>
        <title>Blog Example</title>
        <meta name="description" content="Blog Example Home" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={`${styles.main} ${notojp.className}`}>
        <Cards blogs={blogs} />
        <Pagination totalCount={totalCount} />
      </main>
      <Footer />
    </>
  )
}

export default BlogPageId

export const getStaticPaths = async () => {
  const repos = await client.get({ endpoint: 'blogs' })

  const range = (start: number, end: number) => [...Array(end - start + 1)].map((_, i) => start + i)

  const paths = range(1, Math.ceil(repos.totalCount / PER_PAGE)).map((repo) => `/blog/page/${repo}`)

  return { paths, fallback: false }
}

export const getStaticProps = async ({ params }: GetStaticPropsContext<{ id: string }>) => {
  const id = Number(params?.id)

  const data = await client.get({ endpoint: 'blogs', queries: { offset: (id - 1) * 9, limit: 9 } })

  return {
    props: {
      blogs: data.contents,
      totalCount: data.totalCount,
    },
  }
}
