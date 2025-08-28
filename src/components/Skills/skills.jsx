import { Element } from 'react-scroll'
import { SiHtml5, SiCss3, SiJavascript, SiPython, SiDjango, SiPhp, SiSymfony, SiPostgresql, SiDocker } from 'react-icons/si';
import { GrGraphQl, GrMysql } from "react-icons/gr";
import { FaServer } from "react-icons/fa";
import styles from './skills.module.css'
import ScaleComponent from '../ScaleComponent';

export default function Home(){
    return(
        <Element name="skills">
            <section className={styles.skills}>
                <ScaleComponent className="tile">
                    <h2>Skills</h2>
                    <p>
                        Technologies I have experience with:
                    </p>
                    <div className={styles.skillsList}>
                        <ul>
                            <li><SiHtml5 /> HTML</li>
                            <li><SiCss3 /> CSS</li>
                            <li><SiJavascript /> JavaScript</li>
                            <li><SiPython /> Python</li>
                            <li><SiDjango /> Django</li>
                            <li><SiPhp /> PHP</li>
                            <li><SiSymfony /> Symfony</li>
                            <li><SiPostgresql /> PostgreSQL</li>
                            <li><GrMysql /> MySQL</li>
                            <li><GrGraphQl /> GraphQL</li>
                            <li><FaServer />REST</li>
                            <li><SiDocker /> Docker</li>
                        </ul>
                    </div>
                    <p>
                        <a href='https://github.com/SzWielgosz'>My Github Profile</a>
                    </p>
                </ScaleComponent>
            </section>
        </Element>
    )
}
