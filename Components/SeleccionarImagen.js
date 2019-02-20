import React from 'react';
import {
  Image, View, TouchableOpacity,
} from 'react-native';
import { ImagePicker } from 'expo';
import picture from '../assets/profile.png';

const SeleccionarImagen = (props) => {
  const { imagen, cargar } = props;
  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
    });
    console.log(result);

    if (!result.cancelled) {
      cargar(result);
    }
  };

  return (
    <View style={{ flex: 2, alignItems: 'center', justifyContent: 'center' }}>
      <TouchableOpacity
        onPress={pickImage}
      >
        {
        imagen ? (
          <Image
            style={{ width: 200, height: 200, borderRadius: 100 }}
            source={{ uri: imagen.uri }}
          />
        )
          : (
            <Image
              style={{ width: 200, height: 200, borderRadius: 100 }}
              source={picture}
            />
          )
      }
      </TouchableOpacity>
    </View>
  );
};

export default SeleccionarImagen;
