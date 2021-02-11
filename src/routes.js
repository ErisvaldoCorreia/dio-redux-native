import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'; 

import { Catalago, Header } from './modules';

const Stack = createStackNavigator();

const Routes = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: true,
                    cardStyle: { backgroundColor: '#313736'},
                }}
                initialRouteName='HomeCatalogo'
            >
                <Stack.Screen 
                    name='HomeCatalogo'
                    component={Catalago}
                    options={{
                        headerShown: true,
                        headerTransparent: true,
                        headerTitle: () => <Header />
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Routes;
