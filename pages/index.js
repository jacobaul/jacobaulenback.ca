import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/Home'

export default function Home() {
  return (

<Layout>
    <div className="container">
           <main>
        <h1 className="title">
          Hello
        </h1>

        <p className="description">
          I'm Jacob Aulenback.
        </p>


        <div className="grid">
          <a href="https://github.com/jacobaul" className="card">
            <h3>GitHub &rarr;</h3>
	    <img src="/github-mark.png" alt="Github Mark" height="75"></img>
          </a>

          <Link href="/projects">
	    <a className="card"> 
	      <h3>Projects &rarr;</h3>
              <p>A few little hobby projects I've been working on.</p>
	    </a>
	  </Link>
                     
	<Link href="/about">
	  <a className="card">
            <h3>About Me &rarr;</h3>
            <p>Contact email found here.</p>
          </a>
	</Link>

	<Link href="/miscellany">
          <a className="card" >
            <h3>Miscellany &rarr;</h3>
            <p>Other things I've done</p>
          </a>
	</Link>
       </div>
      </main>

        </div>
</Layout>

  )
}
