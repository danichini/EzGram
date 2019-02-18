// import liraries
import React, { Component } from 'react';
import {
  View, Text, StyleSheet, Button,
} from 'react-native';
import { connect } from 'react-redux';
import SignInForm from './Formas/SignInForm';

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
class SignIn extends Component {
  signinDeUsuario = (values) => {
    const { login } = this.props;
    login(values);
  }

  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <Text>SignIn</Text>
        <SignInForm login={this.signinDeUsuario} />
        <Button
          title="SignUp"
          onPress={() => { navigation.navigate('SignUp'); }}
        />
      </View>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({

});

const mapDispatchToProps = dispatch => ({
  login: (values) => {
    dispatch({ type: 'LOGIN', datos: values });
  },
});


export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
