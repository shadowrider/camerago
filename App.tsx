/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * 
 * Generated with the TypeScript template
 * https://github.com/emin93/react-native-template-typescript
 * 
 * @format
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableHighlight} from 'react-native';



export interface Props {
  setNumer?:(str: string) => void
}

interface State {
  phoneNumber: string
}
export default class App extends Component<Props, State> {
  constructor(props: Props){
    super(props)
     this.state = {
        phoneNumber: ''
     }
  }

  setNumber =(str: string)=>this.setState({phoneNumber: this.state.phoneNumber + str});


  render() {
    return (
      <View style={styles.parentContainer}>
      <Text style={{fontSize:24, marginBottom:4}}>{this.state.phoneNumber}</Text>
      <Text style={{fontSize:16, color:'#3094ff', marginBottom:4}}>+ Add to Contacts</Text>
        <View style={styles.container}>
          <TouchableHighlight  style={styles.buttonRound} onPress={this.setNumber('1')} underlayColor='white'>
            <View>
              <Text style={styles.buttonText}>1</Text>
            </View>
        </TouchableHighlight>
        <TouchableHighlight  style={styles.buttonRound} onPress={this.setNumber('2')} underlayColor='white'>
          <View>
            <Text style={styles.buttonText}>2</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight  style={styles.buttonRound} onPress={this.setNumber('3')} underlayColor='white'>
          <View>
            <Text style={styles.buttonText}>3</Text>
          </View>
        </TouchableHighlight>
        </View>
        <View style={styles.container}>
          <TouchableHighlight  style={styles.buttonRound} onPress={this.setNumber('4')} underlayColor='white'>
            <View>
              <Text style={styles.buttonText}>4</Text>
            </View>
        </TouchableHighlight>
        <TouchableHighlight  style={styles.buttonRound} onPress={this.setNumber('5')} underlayColor='white'>
          <View>
            <Text style={styles.buttonText}>5</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight style={styles.buttonRound} onPress={this.setNumber('6')} underlayColor='white'>
          <View>
            <Text style={styles.buttonText}>6</Text>
          </View>
        </TouchableHighlight>
        </View>
        <View style={styles.container}>
          <TouchableHighlight style={styles.buttonRound} onPress={this.setNumber('7')} underlayColor='white'>
            <View>
              <Text style={styles.buttonText}>7</Text>
            </View>
        </TouchableHighlight>
        <TouchableHighlight style={styles.buttonRound} onPress={this.setNumber('8')} underlayColor='white'>
          <View>
            <Text style={styles.buttonText}>8</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight  style={styles.buttonRound} onPress={this.setNumber('9')} underlayColor='white'>
          <View>
            <Text style={styles.buttonText}>9</Text>
          </View>
        </TouchableHighlight>
        </View>
        <View style={styles.container}>
          <TouchableHighlight  style={styles.buttonRound} onPress={this.setNumber('*')} underlayColor='white'>
            <View>
              <Text style={styles.buttonText}>*</Text>
            </View>
        </TouchableHighlight>
        <TouchableHighlight style={styles.buttonRound} onPress={this.setNumber('0')} underlayColor='white'>
          <View>
            <Text style={styles.buttonText}>0</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight  style={styles.buttonRound} onPress={this.setNumber('#')} underlayColor='white'>
          <View>
            <Text style={styles.buttonText}>#</Text>
          </View>
        </TouchableHighlight>
        </View>
        <TouchableHighlight style={styles.buttonCall} underlayColor="#27c62f">
          <View>
            <Text style={styles.buttonTextCall}>Call</Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  parentContainer:{
    justifyContent:'flex-end',
    alignItems:'center',
    flex:1,
    flexDirection:'column',
    marginBottom:14
  },  
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent:'center'
  },
  buttonRound: {
    width:80,
    height:80,
    alignItems: 'center',
    borderRadius: 100,
    borderColor: '#4298f4',
    borderWidth:1,
    justifyContent:'center',
    margin:8
  },
  buttonText: {
    padding: 20,
    color: 'black',
    fontSize:20
  },
  buttonCall:{
    height:68,
    width:300,
    alignItems: 'center',
    justifyContent:'center',
    backgroundColor:'#2bdb4f',
    borderRadius:4,
    marginTop:4,
  },
  buttonTextCall: {
    padding: 20,
    color: 'white',
    fontSize:24
  }
});
