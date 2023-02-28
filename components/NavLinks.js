import Link from 'next/link';
import About from '../pages/about';
import Education from '../pages/education';
import HardSkills from '../pages/hard-skills';
import Jobs from '../pages/jobs';
import Languages from '../pages/languages';
import SoftSkills from '../pages/soft-skills';
import TypeApps from '../pages/type-apps';

import styles from '../styles/Home.module.css';

const links = [
   {
      href: "/",
      content: "Information for Aspiring Technology Professionals"
   },
   {
      href: "/about",
      content: "What is Software Engineering?"
   },
   {
      href: "/type-apps",
      content: "What are Applications?"
   },
   {
      href: "/hard-skills",
      content: "Hard Skills"
   },
   {
      href: "/soft-skills",
      content: "Soft Skills"
   },
   {
      href: "/languages",
      content: "Programming Languages"
   },
   {
      href: "/jobs",
      content: "Jobs and Compensation"
   },
   {
      href: "/education",
      content: "Education And Training"
   },
];

function NavLinks() {
   return (
      <nav className={styles.topics}>
         <ul className={styles.ul}>
            {
               links.map((link, index) =>
                  <li className={styles.li}>
                     <Link href={link.href}>
                     {link.content}
                     </Link>
                  </li>
               )
            }
         </ul>
      </nav>
   )
}

export default NavLinks;