import Header from './Componants/Header'
import './App.css'
import About from './Componants/About'
import Contact from './Componants/Contact'
import Footer from './Componants/Footer'
import Projects from './Componants/Projects'
import Home from './Componants/Home'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <>
      <Header />
      <section id="home">
      <Home/>
      </section>
      <section id="about">
      <About />
      </section>
      <section id="projects">
      <Projects />
      </section>
      <section id="contact">
      <Contact />
      </section>
      <Footer />
    </>
  )
}

export default App
