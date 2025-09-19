import { Element } from "react-scroll";
import ScaleComponent from "./ScaleComponent";
import Section from "./Section";
import ContactForm from "./ContactForm/ContactForm";

export default function Contact() {
  return (
    <Element name="contact">
      <Section>
        <ScaleComponent className="tile">
          <h2>Contact</h2>
          <p>
            Let’s connect! I’m always open to new opportunities, collaborations.
            Feel free to fill out this form and send me a message!
          </p>
          <div className="formContainer" style={{ display: "flex", justifyContent: "center" }}>
            <ContactForm />
          </div>
        </ScaleComponent>
      </Section>
    </Element>
  );
}
