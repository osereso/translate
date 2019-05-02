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

  selectLanguage(lang){
    this.setState({language:lang}, () => {
      console.log('Language Switched: '+lang);
    });
  }

  translateText(text){
    fetch('http://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20190429T100623Z.cf4152c447328148.fef41308c9779a877fc2accc38aba3a74bd127c4&lang='+this.state.language+'&text='+text)
      .then((response) => {
        let res = JSON.parse(response._bodyText);
        this.setState({translateText: res.text[0]});
      });
  }

  render() {
    return (
      <View style={styles.container}>
        <LanguageSelect language={this.state.language} onSelect={this.selectLanguage.bind(this)} />
        <TranslateInput onSubmit={this.translateText.bind(this)} />
        <TranslateOutput translation={this.state.translatedText} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  
});
