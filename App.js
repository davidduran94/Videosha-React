/**
 * Sample React Native App
 * 
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image} from 'react-native';
import Video from 'react-native-video';

import Home from './src/screens/containers/home';
import HeaderX from './src/sections/components/header';
import SuggestionList from './src/videos/container/suggestion-list';
import CategoryList from './src/videos/container/category-list';
import API from './utils/api';


type Props = {};
export default class App extends Component<Props> {

  state ={
    suggestionList:[],
    categoryList: []
  }

  async componentDidMount(){
    const movies = await API.getSuggestion(10);
    const categories = await API.getSuggestion(10);
    this.setState({
      suggestionList: movies,
      categoryList: categories,
    })
  }

  render() {
    return (
      <Home>
        <HeaderX>
          <View
            style={{
              flex: 1,
              height: 100,
              display: 'none'
            }}
          >
            <Video
              source={{uri: 'https://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny1_320x180.mp4'}}
              style={{
                position: 'absolute',
                left: 0,
                right: 0,
                bottom: 0,
                top: 0,
              }}
              resizeMode="contain"
            />
          </View>
        </HeaderX>
        <CategoryList list={this.state.categoryList} ></CategoryList>
        <SuggestionList list={this.state.suggestionList} ></SuggestionList>
      </Home>
    );
  }
}
