// import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';

// create a component
class Add extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <Button
          icon="add-a-photo"
          mode="contained"
          onPress={() => navigation.navigate('Seleccion')}
        >
          Seleccionar foto de galeria
        </Button>
        <Text>Add</Text>
        <Button
          icon="add-a-photo"
          mode="contained"
          onPress={() => navigation.navigate('Seleccion')}
        >
          Tomar foto
        </Button>
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
});

// make this component available to the app
export default Add;
