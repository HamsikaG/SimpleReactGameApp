import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import PropTypes from "prop-types";


export class RandomNumber extends React.Component {
  static propTypes = {
    number: PropTypes.number.isRequired
  };
  handlePress = () => {
    console.log(this.props.number);
  }

  render() {
    return (
      <TouchableOpacity onPress={this.handlePress}>
        <Text style={styles.number} key={this.props.keyVal}>{this.props.number}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  number: {
    fontSize: 35,
    width: 100,
    marginHorizontal: 15,
    marginVertical: 25,
    textAlign: 'center',
    backgroundColor: '#aaa',

  }
});