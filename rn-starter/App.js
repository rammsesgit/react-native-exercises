import { createStackNavigator, createAppContainer } from 'react-navigation'
import HomeScreen from './src/screens/HomeScreen'
import ComponentScreen from './src/screens/ComponentsScreen'

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Component: ComponentScreen
  },
  {
    initialRouteName: 'Component',
    defaultNavigationOptions: {
      title: 'App'
    }
  }
)

export default createAppContainer(navigator)
