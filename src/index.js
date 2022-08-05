import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./sass/main.css";
import 'animate.css';
import 'loaders.css/src/animations/pacman.scss'


//Mostrar la App en el DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);