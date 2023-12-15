import './App.css'
import Hero from './components/Hero/Hero'
import Skills from './components/Skills/Skills'
import Navbar from './components/Navbar/Navbar'


function App() {
  return (
    <div className='App'>
      <Navbar/>
      <Hero />
      <Skills />
    </div>
  )
}

export default App
