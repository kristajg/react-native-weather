import React from 'react';
import { StyleSheet, Text, Animated, View, Easing } from 'react-native';
import Raindrop from './Raindrop';

export default class Rain extends React.Component {
  static navigationOptions = {
    title: 'Rain Drop (Drop Top)',
  };

  state = {
    numRaindrops: 50, // TODO: accept numRaindrops or rainIntensity as props when its a full library
    // lightningEffectsOn: true, // TODO: accept lightningEffectsOn as a boolean prop
    lightningValue: new Animated.Value(1),
  };

  componentDidMount() {
    // if(this.state.lightningEffectsOn) this.startLightning();
    this.startLightning();
  }

  startLightning = () => {
    Animated.sequence([
      Animated.timing(
        this.state.lightningValue,
        {
          toValue: 0.2,
          delay: Math.floor(Math.random() * 5000) + 2000,
          duration: 300,
          easing: Easing.easeOutElastic,
        }
      ),
      Animated.timing(
        this.state.lightningValue,
        {
          toValue: 1,
          duration: 150,
        }
      ),
      Animated.timing(
        this.state.lightningValue,
        {
          toValue: 0.2,
          duration: 150,
          easing: Easing.easeOutElastic,
        }
      ),
      Animated.timing(
        this.state.lightningValue,
        {
          toValue: 1,
          duration: 150,
        }
      ),
    ]).start(() => this.startLightning());
  }

  render() {
    const { numRaindrops, lightningValue } = this.state;
    const drops = [];

    for(let i=0; i<numRaindrops; i++) {
      drops.push(
        <Raindrop key={i} />
      );
    }

    return (
      <Animated.View style={[
        styles.container,
        {
          opacity: lightningValue,
        }
      ]}>
        {drops}
      </Animated.View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#434343',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
  }
});
