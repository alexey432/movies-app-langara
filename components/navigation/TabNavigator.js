import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer} from '@react-navigation/native'
import { Text } from 'native-base'
import SearchScreen from '../screens/SearchScreen'
import MoviesScreen from '../screens/MoviesScreen'
import TvShowsScreen from '../screens/TvShowsScreen'

const Tab = createMaterialTopTabNavigator();



const TabNavigator = () => {
    return (
            <Tab.Navigator screenOptions={{
                    headerShown: false,
                    tabBarLabelStyle: { textTransform: 'none', fontSize: 14.5  },
                    tabBarActiveTintColor: '#2c3e50',
                    tabBarIndicatorStyle: {
                        backgroundColor: '#2c3e50',
                        height: 3,
                    }
                }}>
              <Tab.Screen name="Movies" component={MoviesScreen} />
              <Tab.Screen name="Search Results" component={SearchScreen} />
              <Tab.Screen name="TV Shows" component={TvShowsScreen} />
            </Tab.Navigator>
          );
}


export default TabNavigator