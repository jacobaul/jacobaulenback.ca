import { HeadPost } from './HeadPost'
import Head from 'next/head'

export default function BlogPost({ children, meta}) {
  return (
    <>
     <Head>
        <title>{meta.title}</title>
      </Head>
      <HeadPost meta={meta} isBlogPost />
      <article>{children}</article>
    </>
  )
}

