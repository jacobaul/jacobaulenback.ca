import Head from 'next/head'
import Link from 'next/link'

import Layout from '../components/Page'

export default function Home() {
  return (
	  
  <Layout>
    <div className="container">
      <Head>
        <title>Projects</title>
      </Head>

      <div className="pageMain">
        <h1 className="title">
          Projects
        </h1>

        <p className="description">
          More will appear here soon.
        </p>

      </div>

        </div>
  
  </Layout> 
  )
}
