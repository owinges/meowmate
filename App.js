import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Icon size={30} name='ios-trash' color='red' />
        <Text>TEST!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
