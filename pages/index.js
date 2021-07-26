import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/Home'

export default function Home() {
  return (

<Layout>
    <div className="container">

        <h1 className="title">
          Hello
        </h1>

        <p className="description">
          I'm Jacob Aulenback.
        </p>


        <div className="grid">
          <a href="https://github.com/jacobaul" className="card">
          <div class="card-content">
            <h3>GitHub &rarr;</h3>
	    <img src="/github-mark.png" alt="Github Mark" height="40px"></img>
      </div>
          </a>

          <Link href="/projects">
	    <a className="card"> 
      <div class="card-content">
	      <h3>Projects &rarr;</h3>
              <p>A few little hobby projects I've been working on.</p>
              </div>
	    </a>
	  </Link>
                     
	<Link href="/about">
	  <a className="card">
    <div class="card-content">
            <h3>About Me &rarr;</h3>
            <p>Contact email found here.</p>
            </div>
          </a>
	</Link>

	<Link href="/miscellany">
          <a className="card" >
          <div class="card-content">
            <h3>Miscellany &rarr;</h3>
            <p>Other things I've done</p>
            </div>
          </a>
	</Link>
       </div>


        </div>
        <div class="clear">
          </div>
</Layout>

  )
}
