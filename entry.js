import React, { Component } from 'react';
import {Provider} from "react-redux";

import ProfileApp from './app/index'

import {store} from "./app/store";


export default class App extends Component {
    render() {
      return (
        <Provider store={store}>
          <ProfileApp />
        </Provider>
      );
    }
  }
  