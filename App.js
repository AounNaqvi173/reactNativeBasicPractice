import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from "./src/screens/HomeScreen";
import componetsScreen from './src/screens/componentsScreen';
import ListScreen from './src/screens/listScreens'

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: componetsScreen,
    List: ListScreen
  },
  {
    initialRouteName: "List",
    defaultNavigationOptions: { 
      title: "Lists"
    }
  }
);

export default createAppContainer(navigator);
