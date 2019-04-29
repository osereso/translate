import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

export default class TranslateInput extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={}>TranslateInput</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  
});

AppRegistry.registerComponent('TranslateInput', ()=> TranslateInput)