import { Element } from "react-scroll";
import ScaleComponent from "./ScaleComponent";
import Section from "./Section";

export default function Home() {
  return (
    <Element name="home">
      <Section>
        <ScaleComponent className="tile">
          <h2>Home</h2>
          <p>
            Hello! Welcome to My Page! <br /> Feel free to check all the
            informations included here!
          </p>
        </ScaleComponent>
      </Section>
    </Element>
  );
}
