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
    this.toggleReadMore = this.toggleReadMore.bind(this);

    this.state = {
      readMore: "collapsed"
    }
  }
  componentWillMount(){
    this.fetchProfileData();
    this.fetchSliderData();
    this.fetchGridData();
  }
  toggleReadMore(){
    let {readMore} = this.state;
    console.log("readMore",readMore)
    if(readMore == "collapsed"){
      this.setState({
        readMore: "expanded"
      })
    }else{
      this.setState({
        readMore: "collapsed"
      })
    }
  }
  render() {
    const styles = StyleSheet.create({
      profile: {
        marginTop: 10
      },
      name: {
        flex: 1,
        alignItems: "flex-start",
        marginTop: 20,
        fontWeight: 'bold',
        padding: 0
      },
      slider:{
        width: "95%",
        height: 600,
        backgroundColor: "white",
        marginLeft: "2.5%",
      },
      gridImages: {
        flex:1,
        alignItems:'center',
        borderWidth: 0.5,
        borderColor: '#d6d7da',
      },
      gridRow:{
        height: 200
      },
      bio:{
        margin: 0,
        padding: 0
      },
      readMore: {
        margin: 0,
        padding: 0
      }
    });

    let {
      gridImages,
      sliderImages,
      profile
    } = store.getState().profile;

    let bioSmall = ""
    if(profile.bio){
      bioSmall = profile.bio.substring(0,10)
    }
    let slider = (<Text>Loading</Text>)
    if(sliderImages.length > 0){
      let images = []
      for(var i in sliderImages){
        images.push(sliderImages[i].thumbnail)
      }
      slider = (<ImageSlider style={styles.slider} images={images}/>)
    }

    // grid of images
    let gridElem = (<Text>Loading</Text>)
    let maxCol = 3;

    if(gridImages.length > 0){
      let grid = []
      let eachRow = []
      for(var i in gridImages){
        let col = (
          <Col style={styles.gridImages} key={"col_"+i} size={1}>
            <Thumbnail square large source={{uri: gridImages[i].thumbnail}} />
          </Col>
        )
        eachRow.push(col)

        if(( i > 0 && ((i + 1) % maxCol == 0)) || (i + 1) == gridImages.length) {
          grid.push(
            <Row key={"row_"+i} size={1} style={styles.gridRow}>
              { eachRow }
            </Row>
          )
          eachRow = []
        }
      }
      gridElem = grid
    }

    // grid of images
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
                  <Text style={styles.bio} onPress={this.toggleReadMore}>
                    {(this.state.readMore == "collapsed" ? bioSmall + "... Read More" : profile.bio)}
                  </Text>
                </Row>
              </Col>
            </Row>
            <Row size={40}>
              <Col size={1}>
                {slider}
              </Col>
            </Row>
            <Row size={40}>
              <Col>
                {gridElem}
              </Col>
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