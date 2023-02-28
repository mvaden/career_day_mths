import React from 'react';
import styles from '../styles/Home.module.css';

const skills = [
   "Communication and collaboration with your other colleagues",
   "Time management skills",
   "Interpersonal communcation and networking skills",
   "Skillful use of social media",
   "Empathy",
   "Excellent written grammar",
   "Critical thinking skills",
   "Being proactive about learning new things",
   "Dressing for success",
   "A general sense of self-awareness"
];

const SoftSkills = () => {
   return (
      <div>
         <h2 className={styles.h2}>
            Soft Skills
         </h2>
         <p>Just like hard skills, soft skills are also crucial to have in order to enjoy success when having a career in technology. You'll of tne find that some of your most senior peers and managers are people who have honed their own set of soft skills over time to where they are masters at communicating, learning new things, and being able to deliver great results. Many will argue that having great soft skills are among the most important to have no matter what career or endavor you are after in life.</p>
         <p>Here is a list of some crucial soft skills to have when working in techology:</p>
         <ul>
            {
               skills.map(skills =>
                  <li>
                     {skills}
                  </li>
               )
            }
         </ul>
      </div>
   )
}

export default SoftSkills;