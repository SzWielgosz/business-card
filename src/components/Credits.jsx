import { Element } from "react-scroll";
import ScaleComponent from "./ScaleComponent";
import Section from "./Section";

export default function Credits() {
  return (
    <Element name="credits">
      <Section>
        <ScaleComponent className="tile">
          <h2>Credits</h2>
          <p>
            Background and icon designed by{" "}
            <a href="https://freepik.com/">Freepik</a>
          </p>
        </ScaleComponent>
      </Section>
    </Element>
  );
}
