import React, { Component } from "react";
import { StyleSheet, View, Animated, Dimensions } from "react-native";

export default class Snowflake extends Component {
  constructor(){
    super();

    this.xPosition = Math.floor((Math.random() * Dimensions.get('window').width) + 0);
    this.yPosition = new Animated.Value(0);
  }

  componentDidMount() {
    this.startSnow();
  }

  startSnow = () => {
    this.yPosition.setValue(0);

    Animated.timing(
      this.yPosition,
      {
        toValue: Dimensions.get('window').height,
        delay: (Math.random() * 6000 + 0),
        duration: 4000,
      }
    ).start(() => this.startSnow());

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
