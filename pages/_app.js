// import '../styles/global.css'

// export default function App({ Component, pageProps }) {
//   return <Component {...pageProps} />
// }
import '../styles/global.css'
import Layout from "../components/Layout";

export default function App({ Component, pageProps }) {
  return (
    <Layout pageTitle="Blog" description="My Personal Blog">
      <Component {...pageProps} />
    </Layout>
  );
}