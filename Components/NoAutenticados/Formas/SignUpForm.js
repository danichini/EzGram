import React from 'react';
import {
  View, Text, TextInput, Button,
} from 'react-native';
import { Field, reduxForm } from 'redux-form';

const fieldNombre = (props) => {
  const { input, ph, meta } = props;
  console.log(props);
  return (
    <View>
      <TextInput
        placeholder={ph}
        onChangeText={input.onChange}
        value={input.value}
        keyboardType={input.name === 'correo' ? 'email-address' : 'default'}
        autoCapitalize="none"
        secureTextEntry={!!(input.name === 'password' || input.name === 'confirmacion')}
      />
      { meta.touched && <Text style={{}}>{meta.error}</Text> }
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

  if (!values.correo) {
    errors.correo = 'requerido';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
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
    errors.correo = 'requerido';
  } else if (values.password !== values.confirmacion) {
    errors.confirmacion = 'el password debe coincider';
  }

  return errors;
};

const SignUpForm = (props) => {
  console.log(props);

  const { handleSubmit } = props;
  return (
    <View>
      <Field name="nombre" component={fieldNombre} ph="nombre" />
      <Field name="correo" component={fieldNombre} ph="@correo.com" />
      <Field name="password" component={fieldNombre} ph="*****" />
      <Field name="confirmacion" component={fieldNombre} ph="*****" />
      <Text>Redux Form</Text>
      <Button
        title="Registrar"
        onPress={handleSubmit(values => console.log(values))}
      />
    </View>
  );
};

export default reduxForm({
  form: 'SignUpForm',
  validate,
})(SignUpForm);
