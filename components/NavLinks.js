import Link from 'next/link';
import About from '../pages/about';
import Compensation from '../pages/compensation';
import Education from '../pages/education';
import HardSkills from '../pages/hard-skills';
import Jobs from '../pages/jobs';
import Languages from '../pages/languages';
import SoftSkills from '../pages/soft-skills';
import TypeApps from '../pages/type-apps';

import styles from '../styles/Home.module.css';

function NavLinks() {
   return (
      <nav className={styles.topics}>
         <ul className={styles.ul}>
            <li className={styles.li}>
               <Link href="/">
                  Information for Aspiring Technology Professionals
               </Link>
            </li>
            <li className={styles.li}>
               <Link href="/about">
                  What is Software Engineering?
               </Link>
            </li>
            <li className={styles.li}>
               <Link href="/type-apps">
                  What are Applications?
               </Link>
            </li>
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
                  Programming Languages
               </Link>
            </li>
            <li className={styles.li}>
               <Link href="/jobs">
                  Jobs and Compensation
               </Link>
            </li>
            <li className={styles.li}>
               <Link href="/education">
                  Education And Training
               </Link>
            </li>
         </ul>
      </nav>
   )
}

export default NavLinks;