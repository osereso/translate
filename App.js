import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import TranslateInput from './src/components/TranslateInput/TranslateInput';
import TranslateOutput from './src/components/TranslateOutput/TranslateOutput';
import LanguageSelect from './src/components/LanguageSelect/LanguageSelect';
import { Hub } from '@babel/traverse';


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component {
  constructor(){
    super();
    this.state = {
      translatedText: '',
      language: 'hu',


    }
  }

  selectLanguage(lang) {
    this.setState({language: lang}, () => {
      console.log('Language switched: ' + lang);
    })
  }


  render() {
    return (
      <View style={styles.container}>
        <LanguageSelect language={this.state.language} onSelect={this.selectLanguage.bind(this)}/>
        <TranslateInput />
        <TranslateOutput />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  
});
