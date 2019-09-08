import React from 'react';

import { createStore, applyMiddleware } from "redux";
import rootReducer from "./src/reducers";

import { Provider } from "react-redux";

import App from "./src/containers/App";

import thunk from "redux-thunk";

const middleWares = [thunk];

const store = createStore(rootReducer, applyMiddleware(...middleWares));

export default class Home extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}




console.ignoredYellowBox = [
  'Remote debugger is in a background tab which may cause apps to perform slowly. Fix this by foregrounding the tab (or opening it in a separate window).',
];

