import React, { useEffect, useState, useContext } from 'react';
import './App.css';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import { PortfolioContext, PortfolioContextProps } from './components/PortfolioContext';
import About from './components/About/About';
import Projects from './components/Projects/ProjectList';
import Timeline from './components/Timeline/Timeline';
import Footer from './components/Footer/Footer';

function App() {
  const [currentContent, setCurrentContent] = useState<React.ReactElement>(<Hero />);
  const { currentState } = useContext<PortfolioContextProps>(PortfolioContext);

  useEffect(() => {
    switch (currentState) {
      case 0:
        setCurrentContent(<Hero />);
        break;
      case 1:
        setCurrentContent(<About />);
        break;
      case 2:
        setCurrentContent(<Projects />);
        break;
      case 3:
        setCurrentContent(<Timeline />);
        break;
    }
  },[currentState])

  // Scroll to the top of the page when currentContent changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentContent]);

  return (
    <>
      <Navbar />
      <div className='App'>
        {currentContent}
        <Footer/>
      </div>
    </>
  );
}

export default App;
