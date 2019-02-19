import React from 'react';
import {
  Image, View, TouchableOpacity,
} from 'react-native';
import { ImagePicker } from 'expo';

import picture from '../assets/profile.png';

export default class SeleccionarImagen extends React.Component {
  state = {
    image: null,
  };

  pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
    });

    console.log(result);

    if (!result.cancelled) {
      this.setState({ image: result.uri });
    }
  };

  render() {
    const { image } = this.state;

    return (
      <View style={{ flex: 2, alignItems: 'center', justifyContent: 'center' }}>
        <TouchableOpacity
          onPress={this.pickImage}
        >
          {
          image ? (
            <Image
              source={{ uri: image }}
              style={{ width: 200, height: 200, borderRadius: 100 }}
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
  }
}
