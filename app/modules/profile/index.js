/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet
} from 'react-native';

import {connect} from "react-redux";

// Import Store
// TODO make store accessible with common import keyword
import {store} from "../../store";

import { Container, Header, Button, Text, Thumbnail } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';

import ImageSlider from 'react-native-image-slider';

// import constants
import { reducerConstants , sagaConstants } from './constants';

export default class ProfilePage extends Component<{}> {
  constructor(props) {
    super(props);
    this.fetchProfileData = this.fetchProfileData.bind(this);
    this.fetchSliderData = this.fetchSliderData.bind(this);
    this.fetchGridData = this.fetchGridData.bind(this);
  }
  componentWillMount(){
    this.fetchProfileData();
    this.fetchSliderData();
    this.fetchGridData();
  }
  render() {
    const styles = StyleSheet.create({
      profile: {
        marginLeft: 50,
        marginTop: 10
      },
      name: {
        marginLeft: 10,
        marginTop: 20
      }
    });

    let {
      gridImages,
      sliderImages,
      profile
    } = store.getState().profile;

    let bioSmall = ""
    if(profile.bio){
      bioSmall = profile.bio.substring(20)
    }
    let slider = (<Text>Loading</Text>)
    if(sliderImages.length > 0){
      slider = (<ImageSlider images={sliderImages}/>)
    }
    return (
        <Container>
          <Grid>
            <Row size={20}>
              <Col size={40}>
                <Thumbnail style={styles.profile} large source={{uri: profile.profileThumbnail}} />
              </Col>
              <Col size={60}>
                <Row>
                  <Text style={styles.name}>
                    {profile.name}
                  </Text>
                </Row>
                <Row>
                  <Text>
                    {bioSmall}...
                  </Text>
                </Row>
              </Col>
            </Row>
            <Row size={40}>
              {slider}
            </Row>
            <Row size={30}>

            </Row>
          </Grid>
        </Container>
    );
    
  }

  
  fetchProfileData(){
    const {dispatch} = store;
    dispatch({
        type: sagaConstants.profile.FETCH
    });
  }
  fetchSliderData(){
    const {dispatch} = store;
    dispatch({
        type: sagaConstants.feedSlider.FETCH
    });
  }
  fetchGridData(){
    const {dispatch} = store;
    dispatch({
        type: sagaConstants.feedGrid.FETCH
    });
  }
}