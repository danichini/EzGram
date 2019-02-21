import React from 'react';
import {
  Image, View, TouchableOpacity,
} from 'react-native';
import { ImagePicker } from 'expo';
import picture from '../assets/profile.png';

const SeleccionarImagen = (props) => {
  const { imagen, cargar, radius } = props;
  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
    });
    console.log('result: ', result);

    if (!result.cancelled) {
      cargar(result);
    }
  };

  const radious = { borderRadius: radius ? 0 : 100 };

  return (
    <View style={{ flex: 2, alignItems: 'center', justifyContent: 'center' }}>
      <TouchableOpacity
        onPress={pickImage}
      >
        {
        imagen ? (
          <Image
            style={{ width: 200, height: 200, ...radious }}
            source={{ uri: imagen.uri }}
          />
        )
          : (
            <Image
              style={{ width: 200, height: 200, ...radious }}
              source={picture}
            />
          )
      }
      </TouchableOpacity>
    </View>
  );
};

export default SeleccionarImagen;
