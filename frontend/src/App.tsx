import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import Header from './components/Header';
import Routes from './routes';
import store from './store';

import './styles/global.scss'

function App() {
  return (
    <Provider store={store}>
      <Header />
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </Provider>
    
  );
}

export default App;
