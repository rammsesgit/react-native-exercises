import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import HomeScreen from './src/screens/HomeScreen'
import ComponentsScreen from './src/screens/ComponentsScreen'
import ListScreen from './src/screens/ListScreen'
import ImagesScreen from './src/screens/ImagesScreen'
import CounterScreen from './src/screens/CounterScreen'
import ColorScreen from './src/screens/ColorScreen'
import ColorScreenReducer from './src/screens/ColorScreenReducer'
import BoxScreen from './src/screens/BoxScreen'

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Component: ComponentsScreen,
    Images: ImagesScreen,
    Counter: CounterScreen,
    Color: ColorScreen,
    Box: BoxScreen,
    ColorReducer: ColorScreenReducer,
    List: ListScreen
  },
  {
    initialRouteName: 'Box',
    defaultNavigationOptions: {
      title: 'First App'
    }
  }
)

export default createAppContainer(navigator)
