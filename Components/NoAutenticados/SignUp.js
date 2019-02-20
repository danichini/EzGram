// import liraries
import React, { Component } from 'react';
import {
  View, Text, StyleSheet, Button,
} from 'react-native';
import { connect } from 'react-redux';
import SignUpForm from './Formas/SignUpForm';
import SeleccionarImagen from '../SeleccionarImagen';
import CONSTANTES from '../../Store/CONSTANTES';
import {
  actionRegistro,
  actionCargarImagenSignUp,
  actionLimpiarImagenSignUp,
} from '../../Store/ACCIONES';

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#2c3e50',
    paddingHorizontal: 15,
  },
});

// create a component
class SignUp extends Component {
  componentWillUnmount() {
    const { limpiarImagen } = this.props;
    limpiarImagen();
  }

  registroDeUsuario = (values) => {
    const { registro } = this.props;
    console.log(values);
    registro(values);
  }

  render() {
    const { navigation, imagen, cargarImagen } = this.props;
    return (
      <View style={styles.container}>
        <Text>SignUp</Text>
        <SeleccionarImagen
          imagen={imagen.imagen}
          cargar={cargarImagen}
        />
        <SignUpForm registro={this.registroDeUsuario} />
        <Button
          title="SignIn"
          onPress={() => { navigation.goBack(); }}
        />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  imagen: state.reducerImagenSignUp,
});

const mapDispatchToProps = dispatch => ({

  registro: (datos) => {
    dispatch(actionRegistro(datos));
  },
  // al seleccionar la imagen se envia por medio de un dispatch al store
  cargarImagen: (imagen) => {
    dispatch(actionCargarImagenSignUp(imagen));
  },
  // al momento en el que el componente se este desmontando
  // imagen = null gracias al dispatch
  limpiarImagen: () => {
    dispatch(actionLimpiarImagenSignUp());
  },
});

// make this component available to the app
export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
