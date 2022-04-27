import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from "./src/screens/HomeScreen";
import componetsScreen from './src/screens/componentsScreen';
import ListScreen from './src/screens/listScreens';
import imageScreen from './src/screens/imageScreen';
import CounterScreen from './src/screens/CounterScreen';
import Colorgenerator from './src/screens/ColorScreen';
import CustomColor from './src/screens/CustomColorScreen';
import TextScreen from './src/screens/TextScreen';
import BoxScreen from './src/screens/BoxObject';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: componetsScreen,
    List: ListScreen,
    Image: imageScreen,
    Count: CounterScreen,
    Color:  Colorgenerator,
    ColorSelect: CustomColor,
    Text: TextScreen,
    Box: BoxScreen
  },
  {
    initialRouteName: "Home",   
    defaultNavigationOptions: { 
      title: "Home"
    }
  }
);

export default createAppContainer(navigator);
