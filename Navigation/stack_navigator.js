import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../Screens/home_screen';
import MainScreen from '../Screens/main_screen';
import CurrentWeatherScreen from '../Screens/currentweather_screen';
import { Text } from 'react-native';

const Stack = createStackNavigator();

export default function StackNavigator (){
    const headerStyle = {
        backgroundColor: 'black'
    }
    const headerTitleStyle = {
        color: 'white',
    }
    const headerLeftContainerStyle = {
        color: 'white'
    }
    const tintColor = 'white';
    const homeOptions = {
        headerTitle: <Text> Bienvenido </Text>,
        headerTitleAlign: 'center',
        headerStyle: headerStyle,
        headerTitleStyle: headerTitleStyle,
        headerLeftContainerStyle: headerLeftContainerStyle,
        headerTintColor: tintColor,
    }
    const mainOptions = {
        headerTitle: <Text> Weather </Text>,
        headerTitleAlign: 'center',
        headerStyle: headerStyle,
        headerTitleStyle: headerTitleStyle,
        headerLeftContainerStyle: headerLeftContainerStyle,
        headerTintColor: tintColor,
    }
    const currentOptions = {
        headerTitle: <Text> Clima Actual </Text>,
        headerTitleAlign: 'center',
        headerStyle: headerStyle,
        headerTitleStyle: headerTitleStyle,
        headerLeftContainerStyle: headerLeftContainerStyle,
        headerTintColor: tintColor,
    }
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen 
                    name="Home" 
                    component={ HomeScreen }
                    options={ homeOptions }
                />
                <Stack.Screen 
                    name="Main" 
                    component={ MainScreen } 
                    options={ mainOptions }
                />
                <Stack.Screen 
                    name="CurrentWeather" 
                    component={ CurrentWeatherScreen } 
                    options={ currentOptions }    
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}