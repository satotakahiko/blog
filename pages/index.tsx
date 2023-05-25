import Head from 'next/head'
import { Noto_Sans_JP } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import React from 'react'
import { client } from '@/lib/client'
import Cards from '@/components/Cards'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Pagination } from '@/components/Pagenation'

type Category = {
  id: string
  name: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  revisedAt: string
}

type Image = {
  height: number
  width: number
  url: string
}

export type Blog = {
  id: string
  title: string
  content: string
  eyecatch: Image
  category: Category
  createdAt: string
  updatedAt: string
  publishedAt: string
}

export type Contents = Blog[]

export type Response = {
  contents: Contents
  limit: number
  offset: number
  totalCount: number
}

export type Props = {
  blogs: Contents
  totalCount: number
}

const notojp = Noto_Sans_JP({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
})

const Home: React.FC<Props> = ({ blogs, totalCount }) => {
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
export default Home

export const getStaticProps = async () => {
  const data: Response = await client.get({
    endpoint: 'blogs',
    queries: {
      offset: 0,
      limit: 9,
    },
  })

  return {
    props: {
      blogs: data.contents,
      totalCount: data.totalCount,
    },
  }
}
