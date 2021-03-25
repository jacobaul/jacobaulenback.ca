export const HeadPost = ({ meta, isBlogPost }) => (
    <>

      <h1 className={isBlogPost? 'blogPostTitle' : 'entryTitle'} >{meta.title}</h1>
      
      {
          isBlogPost? null: <><div className='entryDetails'> <p>{meta.description}</p><span>{meta.date}</span>
          <span role='img' aria-label='one coffee'>
            ☕ {meta.readTime + ' min read'}
          </span></div></>
      }  
      {
          isBlogPost?  <><div className='details'> <span>{meta.date}</span>
          <span role='img' aria-label='one coffee'>
            ☕ {meta.readTime + ' min read'}
          </span></div></> : null
      }  

      
    </>
  )
  