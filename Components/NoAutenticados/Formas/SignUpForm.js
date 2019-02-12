import React from 'react';
import {
  View, Text, TextInput, Button,
} from 'react-native';
import { Field, reduxForm } from 'redux-form';

const fieldNombre = (props) => {
  const { input } = props;
  // console.log(input.value);
  return (
    <TextInput
      placeholder="Texto desde fieldNombre"
      onChangeText={input.onChange}
      value={input.value}
    />
  );
};

const SignUpForm = props => (
  <View>
    <Field
      name="nombre"
      component={fieldNombre}
    />
    <Text>Redux Form</Text>
    <Button
      title="Registrar"
      onPress={props.handleSubmit(values => console.log(values))}
    />
  </View>
);

export default reduxForm({ form: 'SignUpForm' })(SignUpForm);
