import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';

import Snowflake from './Snowflake';


export default class App extends React.Component {
  static navigationOptions = {
    title: 'Snow',
  };

  state = {
    numSnowflakes: 35, // TODO: accept numSnowflakes or snowIntensity as props when its a full library
  };

  render() {
    const { numSnowflakes } = this.state;
    const flakes = [];

    for(let i=0; i<numSnowflakes; i++) {
      flakes.push(
        <Snowflake key={i} />
      );
    }

    return (
      <View style={styles.container}>
        <Text style={styles.title}>Let it Snow ;)</Text>
        {flakes}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'skyblue',
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
  }
});
