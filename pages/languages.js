import React from 'react';
import styles from '../styles/Home.module.css';

const Languages = () => {
   return (
      <div>
         <h2 className={styles.h2}>Programming Languages</h2>
         <p>Although knowing how to write code is not going to be essential for every job in technology, having individuals who possess many of the hard skills of coding (writing, understanding, designing) is a fundamental necessity for any organization or project that relies on having the best products and services available in the open market. Therefore, having a solid understanding of certain programming languages is necessary. What is also great about learning to code is that there are lots of languages to pick from. You can pick your desired language to code in based on what kinds of projects and tools you wish to build or interface with.</p>
         <p>You can think of coding languages as cookware in your kitchen or tools in a toolbox. Some will only be used for certain specific tasks, while others enjoy broader utility and popularity. If you enjoy working with large sets of data for scientific purposes, you might go with Python or R. If you're a web developer or designer, you'll certainly be using JavaScript, CSS (Cascading Stylesheets), HTML (Hypertext Markup Language), and possibly some SQL (Structured Query Language). Want to build a video game for Xbox 360? You'll likely be using C, C++ (C Plus Plus), or C# (C Sharp). Want to build an app for your business that lives in the app store? You've got Swift and Kotlin for that (JavaScript can work here as well). Have no idea where to begin? Java can be a good place to start.</p> 
      </div>
   )
}

export default Languages;