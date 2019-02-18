import React from 'react';
import {
  StyleSheet, Text, View, YellowBox,
} from 'react-native';
import { Provider } from 'react-redux';
import RutasNoAutenticadas from './Components/NoAutenticados/RutasNoAutenticadas';
// import RutasAutenticadas from './Components/Autenticadas/RutasAutenticadas';
import Store from './Store/Store';
import Seleccion from './Seleccion';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

YellowBox.ignoreWarnings([
  'Deprecation warning: moment construction falls back to js Date. This is discouraged and will be removed in upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.',
  'Setting a timer for a long period of time, i.e. multiple minutes, is a performance and correctness issue on Android as it keeps the timer module awake, and timers can only be called when the app is in the foreground. See https://github.com/facebook/react-native/issues/12981 for more info.',
  'Remote debugger is in a background tab which may cause apps to perform slowly',
]);

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      nombre: 'instagramClone',
    };
  }

  render() {
    return (
      <View style={styles.container}>
        {/* <RutasNoAutenticadas /> */}
        <Provider store={Store}>
          <Seleccion />
        </Provider>
      </View>
    );
  }
}
