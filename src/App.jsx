import "./App.css";
import Navbar from "./components/Navbar/navbar.jsx";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Skills from "./components/Skills/skills.jsx";
import Footer from "./components/Footer.jsx";
import IntroScreen from "./components/IntroScreen/IntroScreen.jsx";
import Credits from "./components/Credits.jsx";

function App() {
  return (
    <div className="App">
      <IntroScreen />
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Contact />
      <Credits />
      <Footer />
    </div>
  );
}

export default App;
