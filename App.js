/**
 * Sample React Native App
 * 
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image} from 'react-native';

import Home from './src/screens/containers/home'



type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <Home>
        <Text>Aqui va el header</Text>
        <Text>Aqui va el bisca</Text>
        <Text>Aqui va el categgoris</Text>
        <Text>Aqui va el sugerencias</Text>
      </Home>
    );
  }
}
