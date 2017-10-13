/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';

import {connect} from "react-redux";

// Import Store
import {store} from "./store";

// import constants
import { reducerConstants , sagaConstants } from './modules/profile/constants/index';

//import profile page
import ProfilePage from './modules/profile/index'

import { StyleProvider } from 'native-base';
//import theme
import getTheme from '../native-base-theme/components';

export class ProfileApp extends Component<{}> {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <StyleProvider style={getTheme()}>
        <ProfilePage />
      </StyleProvider>
    );
  }
}

function mapStateToProps(state) {
  return {
    profile: state.profile
  };
}

export default connect(mapStateToProps)(ProfileApp)