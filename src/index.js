import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Articulo from './Articulo'
import ArticuloJSX from './Articulo';
import ArticuloF from './ArticuloF';
import ArticuloFJSX from './ArticuloF';
import ArticuloTest from './ArticuloTest';
import ChuckNorrisJoke from './ApiChuck';
import Counter from './Counter';
import reportWebVitals from './reportWebVitals';
import CoinFlip from './Flip';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Articulo />
    <ArticuloJSX />
    <ArticuloF />
    <ArticuloFJSX />
    <ArticuloTest />
    <ArticuloTest />
    <ArticuloTest />
    <ChuckNorrisJoke />
    <Counter></Counter>
    <CoinFlip></CoinFlip>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
