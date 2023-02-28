import React from 'react';
import styles from '../styles/Home.module.css';

const skills = [
   "Applying engineering principles",
   "Knowing how to write code with at least one programming language",
   "Think logically",
   "Think rationally",
   "Enjoy analyzing all kinds of problems",
   "Break large problems down to smaller solvable units",
   "Have some understanding of algorithms, data structures, and object-oriented design"
];

const HardSkills = () => {
   return (
      <div>
         <h2 className={styles.h2}>Hard Skills</h2>
         <p>A hard skill is a specific ability, or capability, that you can learn to acquire and demonstrate in a measured way. Possessing hard skills connotes mastery and expertise within the yourself to perform a specific task or series of tasks that are required to complete a job.</p>
         <p>Software Engineers often possess a large number of hard skills which are learned and mastered throughout the entirety of their career - whether in the classroom, on the job, or for fun. Often, you will need to learn many new hard skills over time as the market for software engineering changes. You may be accustomed to writing ordinary JavaScript for smaller or less complex applications, but TypeScript will become necessary to learn once you know that your application will become more complex or need to scale greatly for performance.</p>
         Below is a list of some hard skills that are required to be successful when working as a software engineer:
         <ul>
            {
               skills.map(skill =>
                  <li>{skill}</li>
               )
            }
         </ul>
      </div>
   )
}

export default HardSkills;