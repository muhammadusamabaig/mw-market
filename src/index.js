import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import ProductProvider from './Contaxt'
import 'bootstrap/dist/css/bootstrap.min.css';


import {
  BrowserRouter as Router,
  
} from "react-router-dom";
ReactDOM.render(
  
  <ProductProvider>
  <Router>
  <App />
  </Router>
  </ProductProvider>
  ,
  document.getElementById('root')
);
