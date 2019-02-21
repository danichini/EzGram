// import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { Button } from 'react-native-paper';
import SeleccionarImagen from '../SeleccionarImagen';
import { actionCargarPublicacion } from '../../Store/ACCIONES';

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#2c3e50',
  },
  imagen: {
    flex: 2,
  },
  texto: {
    flex: 2,
  },
  boton: {
    flex: 1,
  },
});

// create a component
class SeleccionarGaleria extends Component {
  render() {
    const { cargarImagen, imagen } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.imagen}>
          <SeleccionarImagen
            imagen={imagen.imagen}
            cargar={cargarImagen}
            radius
          />
        </View>
        <View style={styles.boton}>
          <Button
            icon="add-a-photo"
            mode="contained"
            onPress={() => {
              console.log('Publicado');
            }}
          >
            Publicar
          </Button>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  imagen: state.reducerImagenPublicacion,
});

const mapDispatchToProps = dispatch => ({
  cargarImagen: (imagen) => {
    dispatch(actionCargarPublicacion(imagen));
  },
});


export default connect(mapStateToProps, mapDispatchToProps)(SeleccionarGaleria);
