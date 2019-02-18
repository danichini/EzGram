// import liraries
import React, { Component } from 'react';
import {
  View, Text, StyleSheet, Button,
} from 'react-native';
import { connect } from 'react-redux';
import SignUpForm from './Formas/SignUpForm';
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
  registroDeUsuario = (values) => {
    const { registro } = this.props;
    console.log(values);
    registro(values);
  }

  render() {
    const { navigation, registro } = this.props;
    return (
      <View style={styles.container}>
        <Text>SignUp</Text>
        <SignUpForm registro={this.registroDeUsuario} />
        <Button
          title="Aumentar"
          onPress={registro}
        />
        <Button
          title="SignIn"
          onPress={() => { navigation.goBack(); }}
        />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  numero: state.reducerPrueba,
});

const mapDispatchToProps = dispatch => ({
  registro: (values) => {
    dispatch({ type: 'REGISTRO', datos: values });
  },
});

// make this component available to the app
export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
