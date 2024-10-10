import {useState} from 'react';
import styles from './Navbar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'; 
<script src="https://kit.fontawesome.com/a811008b6c.js" crossOrigin="anonymous"></script>


export const Navbar = () => {
 
    const [menuOpen, setmenuOpen] = useState(false);

    const toggleMenu = () => {
       setmenuOpen(!menuOpen);
    }

  return (
    
        <nav className={styles.navbar}>
            <a href="/" className={styles.title}>Portfolio</a>
            <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} style={{color: "#ffffff",}}  onClick={toggleMenu} />
            <div className={styles.menu}>
             
                <ul className={`${styles.menuItems}  ${menuOpen && styles.menuOpen}`}
                    onClick={()=> {setmenuOpen(false)}
                }>
                    <li>
                        <a href="/">About</a>
                    </li>   
                    <li>
                        <a href="/">Skills</a>
                    </li>  
                    <li>
                        <a href="/">Projects</a>
                    </li>   
                    <li> 
                        <a href="/">Contact</a>
                    </li> 
                </ul>
            </div>
        </nav>
    
  )
}
