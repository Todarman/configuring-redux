import React,{Component} from 'react';
import ReactDOM,{render} from 'react-dom';
import { Provider }from 'react-redux'; 
import configureStore from '../redux/store/configure-store'; 
import { BrowserRouter, Route } from 'react-router-dom'
import App from './containers/app';
import './bootstrap.scss'

const store = configureStore(); 

render(<Provider store={store}> 
    <BrowserRouter>
          <Route path="/" component={App}/>
     </BrowserRouter>
  </Provider>, 
    document.getElementById('app') 
);