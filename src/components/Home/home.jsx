import { Element } from 'react-scroll'
import styles from './home.module.css'
import ScaleComponent from '../ScaleComponent'

export default function Home(){
    return(
        <Element name="home">
            <section className={styles.home}>
                <ScaleComponent className="tile">
                    <h2>Home</h2>
                    <p>Hello! Welcome to My Page! <br /> Feel free to check all the informations included here!</p>
                </ScaleComponent>
            </section>
        </Element>
    )
}
