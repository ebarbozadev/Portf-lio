import './index.css';

import React from 'react';
import ReactDOM from 'react-dom/client';

import Header from '../src/layoult/Header'
import Apresentacao from './layoult/Apresentacao';
import Sobre from './layoult/Sobre'
import Projetos from './layoult/Projetos';
import Tecnologias from './layoult/Tecnologias';
import Carreira from './layoult/Carreira';
import Certificados from './layoult/Certificados';
import Rodape from './layoult/Rodape';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <main>
      <Apresentacao />
      <Sobre />
      <Projetos />
      <Tecnologias />
      <Carreira />
      <Certificados />
    </main>
    <Rodape />
  </React.StrictMode>
);