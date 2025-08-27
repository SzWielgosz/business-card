import './App.css';
import Navbar from './components/Navbar/navbar.jsx';
import Home from './components/Home/home.jsx';
import About from './components/About/about.jsx';
import Contact from './components/Contact/contact.jsx';
import Skills from './components/Skills/skills.jsx'
import Footer from './components/Footer/footer.jsx';
import IntroScreen from './components/IntroScreen/IntroScreen.jsx';


function App() {
  return (
    <div className="App">
      <IntroScreen />
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
