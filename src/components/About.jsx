import { Element } from "react-scroll";
import ScaleComponent from "./ScaleComponent";
import Section from "./Section";

export default function About() {
  return (
    <Element name="about">
      <Section>
        <ScaleComponent className="tile">
          <h2>About Me</h2>
          <p>
            My name is Simon, a passionate learner stepping into the world of
            web development. I believe every challenge is an opportunity to
            grow, and every project is a chance to discover something new. I
            enjoy experimenting and improving my skills. I`m excited to
            contribute, create, and keep learning every step of the way.
          </p>
        </ScaleComponent>
      </Section>
    </Element>
  );
}
