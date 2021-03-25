// import Head from 'next/head'
// import Link from 'next/link'

// import Layout from '../components/Page'

// export default function Home() {
//   return (
	  
//   <Layout>
//     <div className="container">
//       <Head>
//         <title>Projects</title>
//       </Head>

//       <div className="pageMain">
//         <h1 className="title">
//           Projects
//         </h1>

//         <p className="description">
//           More will appear here soon.
//         </p>

//       </div>

//         </div>
  
//   </Layout> 
//   )
// }
const select = function(post){
  console.log(post)
  if(post.module.meta.category == "projects"){
  return <Post key={post.link} post={post} />
  }
}

import { Post } from "../components/Post";
import { posts } from "../getAllPosts";

export default function IndexPage() {
  return (
    <>
    <h1 className="pageTitle">
          Projects
        </h1>
        <div class='postList'>
      {posts.map(select)}
      </div>
    </>
  );
}