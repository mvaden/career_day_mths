import React from 'react';
import styles from '../styles/Home.module.css';

const HardSkills = () => {
   return (
      <div>
         <h2 className={styles.h2}>Hard Skills</h2>
         <p>A hard skill is a specific ability, or capability, that you can learn to acquire and demonstrate in a measured way. Possessing hard skills connotes mastery and an expertise within the yourself to perform a specific task or series of tasks that are required to complete a job.</p>
         <p>Software Engineers often possess a large number of hard skills which are learned and mastered throughout the entirity of their career - whether in the classroom, on the job, or for fun. Often, you will learn many new hard skills in order to capture the demand of the market that you are working in. You may be used to writing ordinary JavaScript for smaller or less complex applications, but TypeScript will often be necessary to know when you know that your application will become more complex or need to scale grately for performance.</p>
         Below are a list of some hard skills that are required to be successful when working as a software engineer:
         <ul>
            <li>Applying engineering principles</li>
            <li>Knowing how to write code with at least one programming language</li>
            <li>Think logically</li>
            <li>Think rationally</li>
            <li>Enjoy analyzing all kinds of problems</li>
            <li>Break large problems down in to smaller solvable units</li>
            <li>Have some understanding of algorithms, data strucures, and object-oriented design</li>
         </ul>
      </div>
   )
}

export default HardSkills;