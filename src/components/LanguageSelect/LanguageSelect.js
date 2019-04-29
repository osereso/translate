import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

export default class LanguageSelect extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={}>LanguageSelect</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  
});

AppRegistry.registerComponent('LanguageSelect', ()=> LanguageSelect)