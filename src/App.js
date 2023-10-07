import React, { useState, useEffect } from 'react';
import MobileView from './components/Mobile/MobileView';
import Canvas from './components/Canvas/Canvas';

const App = () => {
    const [mobile, setMobile] = useState(false);
    const [innerWidth, setInnerWidth] = useState(window.innerWidth);

    
    return (
        <div id="App">
           <Canvas/>
        </div>
    );
};

export default App;
