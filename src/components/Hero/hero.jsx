
import { getImageUrl } from '../../utils';
import styles from '../../components/Hero/hero.module.css';

export const Hero = () => {
  return (
    <section className={styles.container}>
     <div className={styles.content}>
        <h1 className={styles.title}>Hi, I am Somya Negi</h1>
        <p className={styles.description}>I am a dedicated  BSc Computer Science (Hons) student at CVS, DU, currently in my second year. With a solid foundation in HTML, CSS, and growing expertise in JavaScript and React, I focus on front-end web development. I take pride in delivering high-quality, detail-oriented work and always ensure my projects meet the desired standards. I am eager to continue learning and am actively seeking internship opportunities to further enhance my skills and contribute to impactful web development projects.</p>
        <a href="mailto:myemail@gmail.com" className={styles.contactBtn}>Contact Me</a>
     </div>
     <img src={getImageUrl("hero/heroImage.png")} className={styles.heroImg} />
     <div className={styles.topBlur} />
     <div className={styles.bottomBlur} />
     
    </section>
  )
}
