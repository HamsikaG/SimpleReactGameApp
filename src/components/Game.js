import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import PropTypes from "prop-types";
import { RandomNumber } from './RandomNumber';

export class Game extends React.Component {
  static propTypes = {
    randomNumberCount: PropTypes.number.isRequired
  };

  randomNumbers = Array.from({ length: this.props.randomNumberCount }).map(() => 1 + Math.floor(10 * Math.random()));
  target = this.randomNumbers.slice(0, this.props.randomNumberCount - 2).reduce((a, b) => a + b, 0);

  render() {
    return (
      <View style={styles.container} >
        <Text style={styles.target}>{this.target}</Text>
        <View style={styles.randomContainer}>
          {this.randomNumbers.map((randomNumber, index) =>
            <RandomNumber keyVal={index} number={randomNumber} />
          )}
        </View>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    paddingTop: 30
  },
  target: {
    fontSize: 40,
    backgroundColor: '#aaa',
    margin: 50,
    textAlign: 'center'
  },
  number: {
    fontSize: 35,
    width: 100,
    marginHorizontal: 15,
    marginVertical: 25,
    textAlign: 'center',
    backgroundColor: '#aaa',

  },
  randomContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
  }
});

