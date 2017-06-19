import React, { Component } from "react";
import { StyleSheet, View, Animated, Dimensions } from "react-native";

export default class Raindrop extends Component {
  constructor(){
    super();

    this.xPosition = new Animated.Value(Math.floor((Math.random() * Dimensions.get('window').width) + 0));
    this.yPosition = new Animated.Value(-8);
  }

  componentDidMount() {
    this.startRain();
  }

  startRain = () => {
    this.yPosition.setValue(-8);
    Animated.timing(
      this.yPosition,
      {
        toValue: Dimensions.get('window').height,
        delay: (Math.random() * 3000 + 0),
        duration: 3000,
      }
    ).start(() => this.startRain());
  }

  render() {
    return (
      <Animated.View
        style={[
          {
            position: 'absolute',
            top: this.yPosition,
            left: this.xPosition
          }
        ]}>
        <View style={styles.raindrop} />
      </Animated.View>
    );
  }
}

const styles = StyleSheet.create({
  raindrop: {
    width: 2,
    height: 8,
    backgroundColor: '#fff',
    borderColor: 'steelblue',
  }
});
