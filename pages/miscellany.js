// import Head from 'next/head'
// import Link from 'next/link'

// import Layout from '../components/Page'

// export default function Home() {
//   return (

//   <Layout>
//     <div className="container">
//       <Head>
//         <title>Miscellany</title>
//       </Head>

//       <div className="pageMain">
//         <h1 className="title">
//           Miscellany
//         </h1>

//         <p className="description">
//           More will appear here soon.
//         </p>

//       </div>

//         </div>

//   </Layout>
//   )
// }
//
import Head from "next/head";
const select = function (post) {
  console.log(post);
  if (post.module.meta.category == "misc") {
    return <Post key={post.link} post={post} />;
  }
};

import { Post } from "../components/Post";
import { posts } from "../getAllPosts";

export default function IndexPage() {
  return (
    <>
      <Head>
        <title>Miscellany</title>
      </Head>
      <h1 className="pageTitle">Miscellany</h1>
      <div className="postList">{posts.map(select)}</div>
    </>
  );
}
