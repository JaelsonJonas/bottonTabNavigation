import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/HomeScreen';

import ConfigurationScreen from '../screens/ConfigurationScreen';
import { NavigationContainer } from '@react-navigation/native';
import Perfil from '../screens/Perfil';

import Icon from 'react-native-vector-icons/FontAwesome';


const Tab = createBottomTabNavigator();

const TabNav = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator>

                <Tab.Screen name="Home" component={HomeScreen} options={{ tabBarLabel: "Home", tabBarIcon: () => (<Icon name="home" size={20} color={"#000"} />) }} />

                <Tab.Screen name="Configuracoes" component={ConfigurationScreen}  options={{ tabBarLabel: "Home", tabBarIcon: () => (<Icon name="cog" size={20} color={"#000"} />) }} />

                <Tab.Screen name="Perfil" component={Perfil}  options={{ tabBarLabel: "Home", tabBarIcon: () => (<Icon name="user" size={20} color={"#000"} />) }}/>

            </Tab.Navigator>
        </NavigationContainer>
    )

}
export default TabNav