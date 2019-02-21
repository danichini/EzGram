import { createStackNavigator, createAppContainer } from 'react-navigation';
import Add from './Add';
import SeleccionarGaleria from './SeleccionarGaleria';

const StackAdd = createStackNavigator({
  Home: {
    screen: Add,
  },
  Seleccion: {
    screen: SeleccionarGaleria,
  },
},
{
  headerMode: 'none',
});

export default createAppContainer(StackAdd);
