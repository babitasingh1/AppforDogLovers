import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App';
// eslint-disable-next-line no-unused-vars
import Appstyle from './styles/App.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import { BrowserRouter } from 'react-router-dom';

const store = createStore(rootReducer);

//store.subscribe(() => console.log('store', store.getState()));

ReactDOM.render(
  <Provider store={store}>
    {' '}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,

  document.getElementById('root')
);
