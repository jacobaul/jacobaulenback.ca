import Head from 'next/head'
import Link from 'next/link'


export default ({children}) => (
  <div>
	<Head>
        <title>Jacob Aulenback</title>
        <link rel="icon" href="/favicon.ico" />
   </Head>
  <div className='outerContainer'>
	{children}
    <footer>
        <a
          href="http://www.gnuterrypratchett.com/genclacks.php"
          target="_blank"
          rel="noopener noreferrer"
        >
        <img src="/clacks.gif" alt="Clacks" height="25"></img>
        </a>
      </footer>
</div>
  </div>
)
