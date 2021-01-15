import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';



export class RandomNumber extends React.Component{
    render () {
        return (
            <Text style={styles.number} key={this.props.key}>{this.props.number}</Text> 
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