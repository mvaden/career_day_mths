import React from 'react';
import styles from '../styles/Home.module.css';

const Education = () => {
   return (
      <div>
         <h2 className={styles.h2}>Education and Training</h2>
         <p>There are several paths that you can go down in order to obtain the necessary education and training to become a great software engineer. The first and most popular is to obtain a degree in computer science or information technology from an accredited university at a minimum level of an Associates or Bachelors Degree. Depending on your learning style, these can be completed either in a classroom setting or (increasingly) online. A degree in computer science can provide opportunities to many different careers in technology, many of which don't always involve software engineering.</p>
         <p>A second career pathway to consider is in the United State{" "} 
            <a href="https://www.goarmy.com/careers-and-jobs/career-match/signal-intelligence/languages-code.html"></a>{" "}
         military. Our armed forces offer training for jobs that focus on areas such as intelligence gathering, cyber security, maintaining exisiting, cryptographic analysis, and autonomous combat. Many of these skills can be transferred into the private sector later in your career. And perhaps the best part is that all of this training and expereince is tuition-free.
         </p>
         <p>A third and final option is to self-study - create your own curriculum to learn from. Depending on what you want to do and learn, there a multitude of online resoruces that you can take advantage of to being learning the essential hard and soft skills for this field. Google and YouTube are a couple of examples that can do this for free. Paid platforms like Coursara, Udemy, or Bootcamps like General Assembly and Flatiron School are also great.</p>
      </div>
   )
}

export default Education;