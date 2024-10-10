import styles from './App.module.css';
import {Navbar} from './components/Navbar/Navbar';
import { Hero } from './components/Hero/hero';
import { About } from './components/about/about';
import { Skills } from './components/skills/skills';
import { Projects } from './components/projects/project';
import { Contact } from './components/contacts/contact';

function App() {
  

  return (
    
      <div className={styles.App}>
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
      
   
  )
}

export default App
