import { Element } from 'react-scroll'
import styles from './contact.module.css'
import ScaleComponent from '../ScaleComponent'

export default function Contact(){
    return(
        <Element name="contact">
            <section className={styles.contact}>
                <ScaleComponent className="tile">
                    <h2>Contact</h2>
                    <p>Let’s connect! I’m always open to new opportunities, collaborations. <br /> Feel free to reach out via email at <b>szwielgosz.contact@gmail.com</b> <br />I’d love to hear from you!</p>
                </ScaleComponent>
            </section>
        </Element>
    )
}