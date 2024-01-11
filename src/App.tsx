import './App.css';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';
import Projects from './components/Projects/ProjectList';
import Timeline from './components/Timeline/Timeline';
import Footer from './components/Footer/Footer';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Hero />} />
        <Route path='about' element={<About />} />
        <Route path='projects' element={<Projects />} />
        <Route path='timeline' element={<Timeline />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
