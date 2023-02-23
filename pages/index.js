import Head from 'next/head';

import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      {/* <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head> */}
      <div>
        <h1 className="h1">Information for Aspiring Technology Professionals</h1>
        <p>If you are reading this as a student in high school or college and are curious about having a career in technology as an engineer or a similar occupation, than you have come to the right place! Feel free to use the navigation bar (to the left) to read though the various topics with information that you will hopefully find helpful in your learning journey. Be advised that this information is updated regularly (check back often).</p>
        <p>Happy Learning!</p>
      </div>

      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
