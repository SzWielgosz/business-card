import { Element } from 'react-scroll'
import styles from './About.module.css'
import ScaleComponent from '../ScaleComponent'

export default function About() {
  return (
    <Element name="about">
        <section className={styles.about}>
          <ScaleComponent className={styles.tile}>
          <h2>About Me</h2>
            <p>
              My name is Simon, a passionate learner stepping into the world of web development. 
              I believe every challenge is an opportunity to grow, and every project is a chance 
              to discover something new. I enjoy experimenting and improving my skills. I’m excited to contribute, create, and 
              keep learning every step of the way.
            </p>
          </ScaleComponent>
        </section>
      
    </Element>
  )
}
