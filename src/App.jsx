import './App.css';

import Home from './Componants/Home';
import About from './Componants/About';
import Projects from './Componants/Projects';
import Contact from './Componants/Contact';
import Footer from './Componants/Footer';
import { ProgressBar } from './Componants/Effects';

function App() {
  return (
    <>
      <ProgressBar />
      <main>
        <section id="home"><Home /></section>
        <section id="about"><About /></section>
        <section id="projects"><Projects /></section>
        <section id="contact"><Contact /></section>
      </main>
      <Footer />
    </>
  );
}

export default App;
