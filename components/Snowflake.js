import React, { Component } from "react";
import { StyleSheet, View, Animated, Dimensions } from "react-native";

export default class Snowflake extends Component {
  state = {
    xPosition: new Animated.Value(
      Math.floor((Math.random() * Dimensions.get('window').width) + 0)
    ),
    yPosition: new Animated.Value(0),
  }

  componentDidMount() {
    // TODO: randomize a starting time
    Animated.timing(
      this.state.yPosition,
      {
        toValue: Dimensions.get('window').height,
        delay: (Math.random() * 3000 + 0),
        duration: 4000,
      }
    ).start();
  }

  render() {
    return (
      <Animated.View
        style={[
          {
            position: 'absolute',
            top: this.state.yPosition,
            left: this.state.xPosition
          }
        ]}>
        <View style={styles.snowflake} />
      </Animated.View>
    );
  }
}

const styles = StyleSheet.create({
  snowflake: {
    width: 10,
    height: 10,
    backgroundColor: '#fff',
    // borderWidth: 1,
    borderColor: 'steelblue',
    borderRadius: 50,
  }
});
