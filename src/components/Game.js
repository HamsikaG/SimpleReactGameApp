import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PropTypes from "prop-types";


export class Game extends React.Component{
  static propTypes = {
    randomNumberCount: PropTypes.string.isRequired
  };


  target = (10 + 40 * Math.random()).toFixed(0);
    render () {
        return (
            <View style={styles.container}>
                <Text style={styles.target}>{this.target}</Text> 
                <Text >{this.props.randomNumberCount}</Text>              
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
    marginHorizontal: 50,
    textAlign: 'center'
  }
});

