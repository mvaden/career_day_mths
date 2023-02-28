import React from 'react';
import styles from '../styles/Home.module.css';

const apps = [
   "Video Games",
   "Electric Cars",
   "Desktop/mobile apps like Microsoft Word, Spotify or Tiktok",
   "Fraudulent detection systems inside of large financial instituations and hospitals",
   "Search Engines",
   "Drones",
   "Traffic signals",
   "Home Appliances",
   "Aircraft Carriers and Submarines",
   "Commercial or Industrial Aircraft",
   `Anything that operates on a semi - conductor or "chip" will serve to operate software applications`
];

const TypeApps = () => {
   return (
      <div>
         <h2 className={styles.h2}>What Are Applications</h2>
         <p>
            An application, or app, refers to a computer program designed to carry out a specific task or set of tasks that have little or nothing to do with the operation of the computer itself. In essence, the role of an application is to perform one or more services for us. Those services could range from using a{" "}
            <a href='https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API'>
               websocket 
            </a>{" "}
               to handle two-way interactive communication (audio, video, or textual data) during a live Zoom conference call on your mobile phone to regulating the schedule of automatically turning lights on and off in a building to conserve power. Applications can be small and large in size - they can contain as many as a hundred lines of code, or trillions.
         </p>
         <p>
            Below is a list of where applications can be found:
         </p>
         <ul>
            {
               apps.map(app => 
                  <li>
                     {app}
                  </li>
               )
            }
         </ul>
      </div>
   )
}

export default TypeApps;