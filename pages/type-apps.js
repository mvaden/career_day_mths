import React from 'react';
import styles from '../styles/SubTopic.module.css';

const TypeApps = () => {
   return (
      <div>
         <h2 className={styles.h2}>What Are Applications?</h2>
         <p>
            An application, or app, in the world technology, is another broad terms that refers to a computer program designed to carry out a sepcific task or set of tasks that have little or nothing to do with the operation of the computer itself. In essence, these are programs that we create for the purpose of performing one or more services for us. Those services could range from using a 
            <a href='https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API'>
               websocket 
            </a>
               to handle two-way interactive communication (audio, video, or textual data) during a live Zoom conference call on your moble phone to regulating the schedule of automatically turning lights on and off in a building to conserve power. Applications can be small and large in size - they can contain as many as a hundred lines of code, or trillions.
         </p>
         <p>
            Below are a list of where applications can be found:
         </p>
         <ul>
            <li>Video Games</li>
            <li>Electric Cars</li>
            <li>Desktop/mobile apps like Microsoft Word, Spotify or Tiktok</li>
            <li>Fraudulent detection systems inside of large financial instituations and hospitals</li>
            <li>Search Engines</li>
            <li>Drones</li>
            <li>Traffic signals</li>
            <li>Home Appliances</li>
            <li>Aircraft Carriers and Submarines</li>
            <li>Commercial or Industrial Aircraft</li>
            <li>Anything that operates on a{" "}
               <a href="https://electronics.howstuffworks.com/diode.htm">
                  semi-conductor 
               </a>
            or "chip" will serve to operate software applications</li>
         </ul>
      </div>
   )
}

export default TypeApps;