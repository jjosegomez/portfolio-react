import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // Import your root component

const root = document.getElementById('root');

const reactRoot = ReactDOM.createRoot(root);
reactRoot.render(<App />);
