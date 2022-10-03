import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer} from '@react-navigation/native'
import { Text } from 'native-base'
import SearchScreen from '../screens/SearchScreen'
import MoviesScreen from '../screens/MoviesScreen'
import MoviesList from '../lists/MoviesList'

const Tab = createMaterialTopTabNavigator();



const TabStack = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator screenOptions={{
                    tabBarLabelStyle: { textTransform: 'none',  },
                    tabBarItemStyle: { borderBottom: '1px solid #2c3e50' },
                    tabBarStyle: { },
                }}>
              <Tab.Screen name="Movies" component={MoviesScreen} />
              <Tab.Screen name="Search Results" component={SearchScreen} />
              <Tab.Screen name="TV Shows" component={MoviesList} />
            </Tab.Navigator>
        </NavigationContainer>
          );
}


export default TabStack