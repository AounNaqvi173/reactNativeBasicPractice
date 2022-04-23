import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from "./src/screens/HomeScreen";
import componetsScreen from './src/screens/componentsScreen';
import ListScreen from './src/screens/listScreens';
import imageScreen from './src/screens/imageScreen';
import CounterScreen from './src/screens/CounterScreen';


const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: componetsScreen,
    List: ListScreen,
    Image: imageScreen,
    Count: CounterScreen 
  },
  {
    initialRouteName: "Home",   
    defaultNavigationOptions: { 
      title: "Home"
    }
  }
);

export default createAppContainer(navigator);
