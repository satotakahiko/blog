import Head from 'next/head'
import type { GetStaticPropsContext } from 'next'
import { Noto_Sans_JP } from 'next/font/google'
import { client } from '@/lib/client'
import type { Response, Blog } from '@/pages'
import HomeStyles from '@/styles/Home.module.css'
import styles from '@/styles/Blog/Blog.module.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const notojp = Noto_Sans_JP({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
})

const BlogDetail = ({ blog }: { blog: Blog }) => {
  const { url } = blog.eyecatch
  return (
    <>
      <Head>
        <title>{blog.title}</title>
        <meta name="description" content="Blog Example Detail" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={`${HomeStyles.main} ${notojp.className}`}>
        <p data-category-id={blog.category.id} className={styles.category}>
          {blog.category.name}
        </p>
        <h2 className={styles.title}>{blog.title}</h2>
        <img src={url} alt="" />
        <div className="default-style" dangerouslySetInnerHTML={{ __html: blog.content }}></div>
      </main>
      <Footer />
    </>
  )
}

export default BlogDetail

export const getStaticPaths = async () => {
  const data: Response = await client.get({
    endpoint: 'blogs',
    queries: {
      limit: 50,
    },
  })

  const paths = data.contents.map((content) => `/blog/${content.id}`)
  return { paths, fallback: false }
}

export const getStaticProps = async ({ params }: GetStaticPropsContext<{ id: string }>) => {
  const id = params?.id
  const data: Response = await client.get({
    endpoint: 'blogs',
    contentId: id,
  })

  return {
    props: {
      blog: data,
    },
  }
}
