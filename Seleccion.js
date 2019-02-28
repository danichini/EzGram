// import liraries
import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { autenticacion } from './Store/Servicios/Firebase';
import RutasNoAutenticadas from './Components/NoAutenticados/RutasNoAutenticadas';
import { actionEstablecerSesion, actionCerrarSesion } from './Store/ACCIONES';
import RutasAutenticadas from './Components/Autenticadas/RutasAutenticadas';

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
// create a component
class Seleccion extends Component {
  componentDidMount() {
    const { autenticacion } = this.props;
    autenticacion();
  }

  render() {
    const { usuario } = this.props;
    return (
      <View style={styles.container}>
        {usuario ? <RutasAutenticadas /> : <RutasNoAutenticadas />}
      </View>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  usuario: state.reducerSesion,
});

const mapDispatchToProps = dispatch => ({
  autenticacion: () => {
    autenticacion.onAuthStateChanged((usuario) => {
      if (usuario) {
        console.log('Usuario logged');
        dispatch(actionEstablecerSesion(usuario));
      } else {
        console.log('no existe sesion');
        dispatch(actionCerrarSesion());
      }
    });
  },
});

// make this component available to the app
export default connect(mapStateToProps, mapDispatchToProps)(Seleccion);
