/* eslint-disable react/prop-types */
import React from 'react';
import { Text, View, Button } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
// import PropTypes from 'prop-types';

const SignIn = (props) => {
  console.log(props);
  const { navigation } = props;

  return (
    <View>
      <Text>Componente SignIn</Text>
      <Button
        title="Navegar a SignUp"
        onPress={() => { navigation.navigate('SignUp'); }}
      />

    </View>
  );
};
const SignUp = (props) => {
  const { navigation } = props;
  return (
    <View>
      <Text>Componente SignUp</Text>
      <Button
        title="Regresar a SignIn"
        onPress={() => {
          navigation.goBack();
        }}
      />
    </View>
  );
};

const RutasNoAutenticadas = createStackNavigator({
  SignIn: {
    screen: SignIn,
  },
  SignUp: {
    screen: SignUp,
  },
}, {
  headerMode: 'none',
});

// SignIn.propTypes = {
//   navigation: PropTypes.func.isRequired,
// };

// SignUp.propTypes = {
//   navigation: PropTypes.func.isRequired,
// };

export default createAppContainer(RutasNoAutenticadas);
