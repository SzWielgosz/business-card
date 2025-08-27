import styles from './Navbar.module.css'
import { Link } from 'react-scroll';
import { AiOutlineHome } from 'react-icons/ai';
import { FaUserAlt } from 'react-icons/fa';
import { GiSkills } from 'react-icons/gi';
import { MdOutlineContactMail } from 'react-icons/md';
import { AiOutlineCode } from 'react-icons/ai';

export default function Navbar() {
  return (
    <div className={styles.navbarWrapper}>
      <div className={styles.logo}>
        <AiOutlineCode size={30} /> SzWielgosz
      </div>
      <nav className={styles.navbar}>
        <ul className="navbar-menu">
          <li>
            <Link to="home" smooth={true} duration={500}>
              <AiOutlineHome /> Home
            </Link>
          </li>
          <li>
            <Link to="about" smooth={true} duration={500}>
              <FaUserAlt /> About
            </Link>
          </li>
          <li>
            <Link to="skills" smooth={true} duration={500}>
              <GiSkills /> Skills
            </Link>
          </li>
          <li>
            <Link to="contact" smooth={true} duration={500}>
              <MdOutlineContactMail /> Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
