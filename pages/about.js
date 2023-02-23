import React from 'react';
import styles from '../styles/SubTopic.module.css';

const About = () => {
   return (
      <div>
         <h2 className={styles.h2}>What is Software Engineering?</h2>
         <p>Software engineering is the systematic approach to doing software development. Software engineers, sometimes called software developers, create software for computers and applications that run on different kinds of computers.</p>
         <p>The engineering and development of software is critical to modern society as more and more institutions and daily tasks rely on computers. These can range (and also extend beyond) from banking, education, security, military, government, infrastructure, commerce, scientific discovery, transporation, healthcare, recreation, and more.</p>
      </div>
   )
}

export default About;