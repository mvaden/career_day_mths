import Layout from "../components/layout"
import NavLinks from "../components/NavLinks"
import styles from '../styles/Home.module.css';

export default function MyApp({ Component, pageProps }) {
   return (
      <Layout>
         <NavLinks />
         <main className={styles.subTopics}>
            <Component {...pageProps} />
         </main>
      </Layout>
   )
}