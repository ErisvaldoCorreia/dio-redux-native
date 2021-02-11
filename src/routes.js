import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'; 

import HomeTemp from './modules';

const Stack = createStackNavigator();

const Routes = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen 
                    name='HomeTemp'
                    component={HomeTemp}
                    options={{
                        title: 'Pagina Inicial',
                        headerTitleAlign: 'center'
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Routes;