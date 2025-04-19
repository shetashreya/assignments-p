import './App.css'
import Navbar from './components/Navbar'
import Herosection from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Footer from './components/Footer'


function App() {
  return (
    <div>
      <Navbar/>
      <Herosection/>
      <Experience/>
      <Skills/>
      <Projects/>
      <Footer/>
    </div>
  )
}

export default App
