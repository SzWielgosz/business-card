import { useForm, ValidationError } from "@formspree/react";
import styles from "./ContactForm.module.css"


export default function ContactForm() {
const [state, handleSubmit] = useForm("mjkenrjj");
  if (state.succeeded) {
      return <p>Email sent!</p>;
  }
  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        id="email"
        type="email" 
        name="email"
        placeholder="Your email"
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <textarea
        id="message"
        name="message"
        placeholder="Your message"
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <button type="submit" disabled={state.submitting}>
        Submit
      </button>
    </form>
  );
}