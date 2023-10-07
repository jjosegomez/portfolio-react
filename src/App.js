import React, { useState, useEffect } from 'react';
import MobileView from './components/Mobile/MobileView';
import Canvas from './components/Canvas/Canvas';

const App = () => {
    const [mobile, setMobile] = useState(false);
    const [innerWidth, setInnerWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setInnerWidth(window.innerWidth);
            if (innerWidth < 850) {
                setMobile(true);
            } else {
                setMobile(false);
            }
        };

        // Add event listener for window resize
        window.addEventListener('resize', handleResize);

        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [innerWidth]); // Empty dependency array ensures the effect runs once after the initial render

    return (
        <div className="App">
            { !mobile ? <MobileView/>: <Canvas/>}
        </div>
    );
};

export default App;
