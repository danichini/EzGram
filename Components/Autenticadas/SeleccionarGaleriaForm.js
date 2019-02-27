import React from 'react';
import {
  View, Text, TextInput, StyleSheet,
} from 'react-native';
import { Field, reduxForm } from 'redux-form';
import { Button } from 'react-native-paper';

const styles = StyleSheet.create({
  textInput: {
    marginHorizontal: 16,
  },
  errors: {
    color: 'crimson',
  },
  container: {
    flex: 2,
  },
  boton: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 36,
  },
});

const fieldNombre = (props) => {
  const { input, ph, meta } = props;
  return (
    <View style={styles.textInput}>
      <TextInput
        placeholder={ph}
        onChangeText={input.onChange}
        value={input.value}
        keyboardType="default"
        autoCapitalize="none"
        secureTextEntry={!!(input.name === 'password' || input.name === 'confirmacion')}
        onBlur={input.onBlur}
        multiline
      />
      <View>
        { meta.touched
          && meta.error
          && <Text style={styles.errors}>{meta.error}</Text> }
      </View>
    </View>
  );
};

const fieldImagen = (props) => {
  const { meta } = props;
  return (
    <View>
      <View style={styles.textInput}>
        { meta.touched
          && meta.error
          && <Text style={styles.errors}>{meta.error}</Text> }
      </View>
    </View>
  );
};

const validate = (values, props) => {
  console.log('validaciones');

  const { imagen } = props;
  const errors = {};

  if (!imagen) {
    errors.imagen = 'imagen requerida';
  }

  if (values.texto && values.texto.length > 140) {
    errors.texto = 'debe ser menor a 140 caracteres';
  }

  return errors;
};

const SeleccionarGaleriaForm = ({ handleSubmit, registro }) => (
  <View style={styles.container}>
    <Field name="imagen" component={fieldImagen} />
    <Field name="texto" component={fieldNombre} ph="texto de la imagen" />
    <View style={styles.boton}>

      <Button
        icon="add-a-photo"
        mode="contained"
        onPress={handleSubmit(registro)}

      >
      Publicar
      </Button>
    </View>
  </View>
);

export default reduxForm({
  form: 'SeleccionarGaleriaForm',
  validate,
})(SeleccionarGaleriaForm);
