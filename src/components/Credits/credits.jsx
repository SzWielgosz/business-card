import { Element } from 'react-scroll'
import styles from './credits.module.css'
import ScaleComponent from '../ScaleComponent'

export default function Credits(){
    return(
        <Element name="credits">
            <section className={styles.contact}>
                <ScaleComponent className={styles.tile}>
                    <h2>Credits</h2>
                    <p>Background and icon designed by <a style={{color: 'white'}} href="https://freepik.com/">Freepik</a></p>
                </ScaleComponent>
            </section>
        </Element>
    )
}