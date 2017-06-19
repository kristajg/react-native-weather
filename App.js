import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Emoji from 'react-native-emoji';

import Snow from './components/Snow';
import Rain from './components/Rain';

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Weather Demo',
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.buttonWrapper}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.props.navigation.navigate('Snow')}>
            <Text style={styles.buttonText}>
              <Emoji name='snowflake' /> Let it Snow
            </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.props.navigation.navigate('Rain')}>
          <Text style={styles.buttonText}>
            <Emoji name='rain_cloud' /> Make it Rain
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const WeatherApp = StackNavigator({
  Home: { screen: HomeScreen },
  Snow: { screen: Snow },
  Rain: { screen: Rain },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'skyblue',
  },
  button: {
    backgroundColor: 'purple',
    height: 45,
    width: 285,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
  },
  buttonWrapper: {
    paddingBottom: 10,
  },
});

export default WeatherApp;
