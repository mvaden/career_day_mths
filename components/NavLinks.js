import Link from 'next/link';
import About from '../pages/about';
import Compensation from '../pages/compensation';
import Education from '../pages/education';
import HardSkills from '../pages/hard-skills';
import Jobs from '../pages/jobs';
import Languages from '../pages/languages';
import Purpose from '../pages/purpose';
import SoftSkills from '../pages/soft-skills';
import TypeApps from '../pages/type-apps';

import styles from '../styles/Home.module.css';

function NavLinks() {
   return (
      <nav className={styles.topics}>
         <ul>
            <li className={styles.li}>
               <Link href="/">
                  Home
               </Link>
            </li>
            <li className={styles.li}>
               <Link href="/about">
                  About Engineering
               </Link>
            </li>
            <li className={styles.li}>
               <Link href="/type-apps">
                  Types Of Applications
               </Link>
            </li>
            {/* <li className={styles.li}>
               <Link href="/purpose">
                  Importance of Software
               </Link>
            </li> */}
            <li className={styles.li}>
               <Link href="/hard-skills">
                  Hard Skills
               </Link>
            </li>
            <li className={styles.li}>
               <Link href="/soft-skills">
                  Soft Skills
               </Link>
            </li>
            <li className={styles.li}>
               <Link href="/languages">
                  Popular Coding Languages
               </Link>
            </li>
            <li className={styles.li}>
               <Link href="/jobs">
                  Job Titles
               </Link>
            </li>
            <li className={styles.li}>
               <Link href="/education">
                  Education And Training
               </Link>
            </li>
            <li className={styles.li}>
               <Link href="/compensation">
                  Compensation
               </Link>
            </li>
         </ul>
      </nav>
   )
}

export default NavLinks;