
import { createAppContainer } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import Add from './Add';
import StackHome from './StackHome';
import Search from './Search';
import Follow from './Follow';
import Profile from './Profile';


const RutasAutenticadas = createMaterialBottomTabNavigator({
  Home: StackHome,
  Search: {
    screen: Search,
  },
  Add: {
    screen: Add,
  },
  Follow: {
    screen: Follow,
  },
  Profile: {
    screen: Profile,
  },
}, {
  initialRouteName: 'Home',
  activeColor: '#f0edf6',
  inactiveColor: '#000',
  barStyle: { backgroundColor: '#000' },
});

RutasAutenticadas.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }

  return {
    tabBarVisible,
  };
};

export default createAppContainer(RutasAutenticadas);
