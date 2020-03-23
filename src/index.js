import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import Productcard from './Productcard'
import ProductProvider from './Contaxt'
import 'bootstrap/dist/css/bootstrap.min.css';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
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
