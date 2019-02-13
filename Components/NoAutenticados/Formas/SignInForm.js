import React from 'react';
import {
  View, Text, TextInput, Button, StyleSheet,
} from 'react-native';
import { Field, reduxForm } from 'redux-form';
import autenticacion from '../../../Store/Servicios/Firebase';

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
});

const fieldNombre = (props) => {
  const { input, ph, meta } = props;
  console.log(props);
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
      { meta.touched && <Text style={styles.errors}>{meta.error}</Text> }
    </View>
  );
};

const validate = (values) => {
  const errors = {};
  if (!values.nombre) {
    errors.nombre = 'requerido';
  } else if (values.nombre.length < 5) {
    errors.nombre = 'deben ser al menos 5 caracteres';
  } else if (values.nombre.length > 10) {
    errors.nombre = 'debe ser menor a 10 caracteres';
  }

  if (!values.password) {
    errors.password = 'requerido';
  } else if (values.password.length < 5) {
    errors.password = 'deben ser al menos 5 caracteres';
  } else if (values.password.length > 15) {
    errors.password = 'debe ser menor a 15 caracateres';
  }

  return errors;
};

const SignInForm = (props) => {
  console.log(props);

  const { handleSubmit } = props;
  return (
    <View>
      <Field name="nombre" component={fieldNombre} ph="nombre" />
      <Field name="password" component={fieldNombre} ph="*****" />
      <Text>Redux Form</Text>
      <Button
        title="SignIn"
        onPress={handleSubmit((values) => {
          console.log(values);
          // autenticacion.auth().createUserWithEmailAndPassword(email, password)
          //   .then((success) => {
          //     console.log(success);
          //   }).catch((error) => {
          //   // Handle Errors here.
          //     const errorCode = error.code;
          //     const errorMessage = error.message;
          //     console.log(`${errorCode} ${errorMessage}`);
          //   });
        })}
      />
    </View>
  );
};

export default reduxForm({
  form: 'SignInForm',
  validate,
})(SignInForm);
