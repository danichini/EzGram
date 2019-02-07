import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      nombre: 'instagramClone',
    };
  }

  render() {
    const { nombre } = this.state;
    return (
      <View style={styles.container}>
        <Text>{nombre}</Text>
      </View>
    );
  }
}
