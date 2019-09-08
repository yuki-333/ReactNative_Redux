import React from 'react';

import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers";

import { Provider } from "react-redux";

import HomeScreen from "./containers/App";

import thunk from "redux-thunk";

const middleWares = [thunk];

const store = createStore(rootReducer, applyMiddleware(...middleWares));

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <HomeScreen />
      </Provider>
    );
  }
}




console.ignoredYellowBox = [
  'Remote debugger is in a background tab which may cause apps to perform slowly. Fix this by foregrounding the tab (or opening it in a separate window).',
];

