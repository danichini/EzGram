import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import RutasNoAutenticadas from './Components/NoAutenticados/RutasNoAutenticadas';
// import RutasAutenticadas from './Components/Autenticadas/RutasAutenticadas';
import Store from './Store/Store';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
        {/* <RutasNoAutenticadas /> */}
        <Provider store={Store}>
          <Text>{nombre}</Text>
          <RutasNoAutenticadas />
        </Provider>
      </View>
    );
  }
}
