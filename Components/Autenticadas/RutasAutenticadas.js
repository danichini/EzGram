
import { createAppContainer } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import StackHome from './StackHome';
import StackSearch from './StackSearch';
import Profile from './Profile';
import StackFollow from './StackFollow';
import StackAdd from './StackAdd';


const RutasAutenticadas = createMaterialBottomTabNavigator({
  Home: {
    screen: StackHome,
  },
  Search: {
    screen: StackSearch,
  },
  Add: {
    screen: StackAdd,
  },
  Follow: {
    screen: StackFollow,
  },
  Profile: {
    screen: Profile,
  },
}, {
  initialRouteName: 'Home',
  activeColor: '#f0edf6',
  inactiveColor: '#fff',
  barStyle: { backgroundColor: '#000' },
});

export default createAppContainer(RutasAutenticadas);
