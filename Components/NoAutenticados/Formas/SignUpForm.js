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
        keyboardType={input.name === 'correo' ? 'email-address' : 'default'}
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

  if (!values.nombre) {
    errors.nombre = 'requerido';
  } else if (values.nombre.length < 5) {
    errors.nombre = 'deben ser al menos 5 caracteres';
  } else if (values.nombre.length > 10) {
    errors.nombre = 'debe ser menor a 10 caracteres';
  }

  if (!values.correo) {
    errors.correo = 'requerido';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.correo)) {
    errors.correo = 'correo invalido';
  }

  if (!values.password) {
    errors.password = 'requerido';
  } else if (values.password.length < 5) {
    errors.password = 'deben ser al menos 5 caracteres';
  } else if (values.password.length > 15) {
    errors.password = 'debe ser menor a 15 caracateres';
  }

  if (!values.confirmacion) {
    errors.confirmacion = 'requerido';
  } else if (values.password !== values.confirmacion) {
    errors.confirmacion = 'el password debe coincider';
  }

  return errors;
};

const SignUpForm = ({ handleSubmit, registro }) => (
  <View style={styles.container}>
    <Field name="imagen" component={fieldImagen} />
    <Field name="nombre" component={fieldNombre} ph="nombre" />
    <Field name="correo" component={fieldNombre} ph="@correo.com" />
    <Field name="password" component={fieldNombre} ph="*****" />
    <Field name="confirmacion" component={fieldNombre} ph="*****" />
    <Button
      title="Registrar"
      onPress={handleSubmit(registro)}
    />
  </View>
);

export default reduxForm({
  form: 'SignUpForm',
  validate,
})(SignUpForm);
