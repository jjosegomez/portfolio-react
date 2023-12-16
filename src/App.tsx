import React, { useEffect, useState, useContext } from 'react';
import './App.css';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import { PortfolioContext, PortfolioContextProps, PortfolioProvider } from './components/PortfolioContext';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Timeline from './components/Timeline/Timeline';

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
  }, [currentState]);

  return (
    <PortfolioProvider>
      <div className='App'>
        <Navbar />
        {currentContent}
      </div>
    </PortfolioProvider>
  );
}

export default App;
