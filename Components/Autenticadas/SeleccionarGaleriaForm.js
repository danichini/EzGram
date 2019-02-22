import React from 'react';
import {
  View, Text, TextInput, Button, StyleSheet,
} from 'react-native';
import { Field, reduxForm } from 'redux-form';

const styles = StyleSheet.create({
  textInput: {
    marginBottom: 16,
  },
  linea: {
    backgroundColor: '#ffe',
    height: 2,
  },
  errors: {
    color: 'crimson',
  },
  container: {
    flex: 2,
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
      />
      <View style={styles.linea} />
      { meta.touched
          && meta.error
          && <Text style={styles.errors}>{meta.error}</Text> }
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

  if (values.texto && !values.texto.length > 140) {
    errors.texto = 'debe ser menor a 140 caracteres';
  }

  return errors;
};

const SeleccionarGaleriaForm = ({ handleSubmit, registro }) => (
  <View style={styles.container}>
    <Field name="imagen" component={fieldImagen} />
    <Field name="texto" component={fieldNombre} ph="texto de la imagen" />
    <Button
      title="Registrar"
      onPress={handleSubmit(registro)}
    />
  </View>
);

export default reduxForm({
  form: 'SeleccionarGaleriaForm',
  validate,
})(SeleccionarGaleriaForm);
