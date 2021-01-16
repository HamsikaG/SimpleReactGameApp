
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import PropTypes from "prop-types";


export class RandomNumber extends React.Component {
  static propTypes = {
    number: PropTypes.number.isRequired,
    isDisabled: PropTypes.bool.isRequired,
    onPressed: PropTypes.func.isRequired,
  };
  handlePress = () => {
    const { onPressed, id, isDisabled} = this.props;
    if(isDisabled) return;
    console.log(this.props.number);
    onPressed(id);
  }

  render() {
    const {number, isDisabled, id} = this.props;

    return (
      <TouchableOpacity onPress={this.handlePress}>
        <Text style={[styles.number, isDisabled && styles.disabled]} key={id}>{number}</Text>
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
  },
  disabled: {
    opacity: 0.3
  }
});