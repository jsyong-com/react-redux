import React from 'react';
import ReactDOM from 'react-dom';
import Content from './content'

import { Provider } from 'react-redux'
import { createStore } from 'redux'

// import { Provider } from './react-redux'
// import { createStore } from './redux'
import { reducer } from './reducer'



const store = createStore(reducer)
ReactDOM.render(
  <Provider store={store}>
    <Content />
  </Provider>,
  document.getElementById('root')
);

// netstat -ano