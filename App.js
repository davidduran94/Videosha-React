/**
 * Sample React Native App
 * 
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image} from 'react-native';

import Home from './src/screens/containers/home';
import HeaderX from './src/sections/components/header';
import SuggestionList from './src/videos/container/suggestion-list';
import API from './utils/api';


type Props = {};
export default class App extends Component<Props> {

  state ={
    suggestionList:[]
  }

  async componentDidMount(){
    const movies = await API.getSuggestion(10);
    this.setState({
      suggestionList: movies
    })
  }

  render() {
    return (
      <Home>
        <HeaderX>
          <Text>.</Text>
        </HeaderX>
        <SuggestionList list={this.state.suggestionList} ></SuggestionList>
      </Home>
    );
  }
}
