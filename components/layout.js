import React, { Fragment } from 'react'
import Head from "next/head";
import NavLinks from './NavLinks'
import styles from '../styles/Home.module.css';

const Layout = ({ children }) => {
   return (
      <div>
         <Head>
            <title>Create Next App</title>
            <link rel="icon" href="/favicon.ico" />
         </Head>
         <div>{ children }</div>

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
            `}
         </style>

         <style jsx>{`
            main {
               padding: 5rem 0;
               flex: 1;
               display: flex;
               flex-direction: column;
               justify-content: center;
               align-items: center;
            }
            `}
         </style>
      </div>
   )
}

export default Layout