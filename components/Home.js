import Head from 'next/head'
export default ({children}) => (
  <div>
   <Head>
        <title>Jacob Aulenback</title>
        <link rel="icon" href="/favicon.ico" />
   </Head>
	{children}
  <div class="footer">

        <a
          href="http://www.gnuterrypratchett.com/genclacks.php"
          target="_blank"
          rel="noopener noreferrer"
        >
        <img src="/clacks.gif" alt="Clacks" height="25"></img>
        </a>

      </div>
      
    

  </div>
  
)
