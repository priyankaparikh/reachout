import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

import App from './components/App';
import reducers from './reducers';

// the store is a huge js object. It is immutable. itcan only be created over
// and over again. This has 3 main properties
const store = createStore(reducers, {}, applyMiddleware(reduxThunk));
// create a store and hook it to the App tag using The Provider
// The Provider is a react component that knows how to read changes from the redux store
// Anytime the redux store has a new state The Provider will inform all the children components
// and update all the components with the new state
ReactDom.render(
  <Provider store={store}><App /></Provider>,
  document.querySelector('#root')
);
