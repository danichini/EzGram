
import { createAppContainer, createMaterialTopTabNavigator } from 'react-navigation';
import Add from './Add';
import StackHome from './StackHome';
import StackSearch from './StackSearch';
import Follow from './Follow';
import Profile from './Profile';


const TabFollow = createMaterialTopTabNavigator({
  Follow: {
    screen: Follow,
  },
  Followers: {
    screen: Follow,
  },
});

export default createAppContainer(TabFollow);
