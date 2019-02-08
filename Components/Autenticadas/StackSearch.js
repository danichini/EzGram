import { createStackNavigator, createAppContainer } from 'react-navigation';
import Publicacion from './Publicacion';
import Search from './Search';
import Autor from './Profile';
import Comentarios from './Comentarios';

const StackSearch = createStackNavigator({
  Search: {
    screen: Search,
  },
  Publicacion: {
    screen: Publicacion,
  },
  Autor: {
    screen: Autor,
  },
  Comentarios: {
    screen: Comentarios,
  },
},
{
  headerMode: 'none',
});

export default createAppContainer(StackSearch);
