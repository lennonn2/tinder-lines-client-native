import React from 'react';
import { WebView, Text, View } from 'react-native';
import { Provider } from 'react-redux';

import styles from './App.style.js';
import Messages from './components/Messages.js';
import configureStore from './configureStore.js';
import Button from './components/Button';
// import Checkboxes from './components/Checkboxes';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: true
    }
    this.getLines = this.getLines.bind(this);
    this.getLines();
  }

  async getLines() {
    const response = await fetch('https://qvqnyun7pl.execute-api.us-east-1.amazonaws.com/prod/lines', {
      headers: {
        categories: ['cheesy', 'funny', 'risky', 'stupid', 'pickup', 'question']
      }
    });
    const data = response.json();
    data.then(lines => {
      const store = configureStore(lines);
      this.setState({
        loading: false,
        store
      });
    });
  }

  // render() {
  //   return (
  //     <WebView
  //       source={{uri: 'http://tinderlines.co'}}
  //     />
  //   ) 
  // }
  render() {
    if (this.state.loading) {
      return (
        <View style={styles.container}>
          <Text>Loading</Text>
        </View>
      );
    } else {
      const { message, categories } = this.state.store;
      return (
        <Provider store={this.state.store}>
          <View style={styles.container}>
            <Messages content={message}></Messages>
            <Button categories={categories}></Button>
          </View>
        </Provider>
      );
    }
  }
}
