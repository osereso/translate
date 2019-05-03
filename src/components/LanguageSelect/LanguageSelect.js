import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View, Picker} from 'react-native';

export default class LanguageSelect extends Component {
  render() {
    return (
      <Picker 
        selectedValue={this.props.language}
        onValueChange={(lang) => {this.props.onSelect(lang)}}
        >
        <Picker.Item label="Hungarian" value="hu" />
        <Picker.Item label="Romanian" value="ro" />
        <Picker.Item label="Slovakian" value="sk" />
        <Picker.Item label="German" value="de" />
        <Picker.Item label="English" value="en" />
      </Picker>
    );
  }
}

const styles = StyleSheet.create({
  
});

AppRegistry.registerComponent('LanguageSelect', ()=> LanguageSelect)