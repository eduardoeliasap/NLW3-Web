import React from 'react';
import { FiArrowRight } from 'react-icons/fi';

import './styles/global.css';
import './styles/pages/landing.css'

import logoImg from './images/logo.svg'

function App() {
  return (
    <div id="page-landing" className="App">
      <div className="content-wrapper">
        <img src={logoImg} alt="" />

        <main>
          <h1>Leve felicidade</h1>
          <p>Visite orfanatos</p>
        </main>

        <div className="location">
          <strong>Maringá</strong>
          <span>Parana</span>
        </div>

        <a href="" className="enter-app">
          <FiArrowRight size={26} color="rgba(0, 0, 0, 0.6)" />
        </a>
      </div>
    </div>
  );
}

export default App;
