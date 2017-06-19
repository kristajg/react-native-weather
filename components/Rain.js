import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Raindrop from './Raindrop';

export default class Rain extends React.Component {
  static navigationOptions = {
    title: 'Rain Drop Drop Top',
  };

  state = {
    numRaindrops: 50, // TODO: accept numRaindrops or rainIntensity as props when its a full library
  };

  render() {
    const { numRaindrops } = this.state;
    const drops = [];

    for(let i=0; i<numRaindrops; i++) {
      drops.push(
        <Raindrop key={i} />
      );
    }

    return (
      <View style={styles.container}>
        <Text style={styles.title}>Make it rain ;)</Text>
        {drops}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
  }
});
