import React from 'react';
import styles from '../styles/Home.module.css';

const titles = [
   "Research or Data Scientist",
   "Network Engineer or Architect",
   "Help Desk or Support Specialist",
   "Database Administrators or Architect",
   "Security Engineer",
   "Software Developer or Engineer",
   "Quality Assurance Engineer or Software Tester",
   "Web Developer",
   "User Experience or Interface Designer",
   "Front End Developer or Engineer",
   "Backend Developer or Engineer",
   "Full-Stack Developer or Engineer",
   "Chief Technology Officer (CTO)",
];

const Jobs = () => {
   return (
      <div>
         <h2 className={styles.h2}>Jobs and Compensation</h2>
         <p>One of the more attractive reasons to consider a career in technology is the growing number of employment opportunities will be in the job market for years to come. For jobs involving computer and information technology occupations, the{" "} 
            <a href="https://www.bls.gov/ooh/computer-and-information-technology/home.htm">
               Bureau of Labor Statistics
            </a>{" "}
             (or BLS) projects that the number of these occupations will grow 15%, or by about 682,800 jobs, between 2021 and 2031. This is much faster than the average for all other occupations.</p> 
         <p>Another good reason to consider a career in the technology sector is compensation. As of May 2021, the annual median wage for this work sector was $97,430, which was higher than the median annual wage for all occupations of $45,760.</p>
         <p>Below is a list of some occupations or job titles that make up this career field. Many of these names will be used interchangeably. This list is not exhaustive:</p>
         <ul>
            {
               titles.map(title => 
                  <li>{title}</li>
               )
            }
         </ul>
      </div>
   )
}

export default Jobs;