import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {isReadyRef, navigationRef} from 'react-navigation-helpers';

import {ROUTES} from './routes';
import {MovementsLoad} from '../pages/Movements/Movements.load';
import {MovementsDetailsLoad} from '../pages/MovementsDetails/MovementsDetails.load';

const Stack = createStackNavigator();

const MovementsNavigator = () => {
  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={() => {
        isReadyRef.current = true;
      }}>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen
          key={ROUTES.MOVEMENTS}
          name={ROUTES.MOVEMENTS}
          component={MovementsLoad}
        />
        <Stack.Screen
          key={ROUTES.MOVEMENTS_DETAILS}
          name={ROUTES.MOVEMENTS_DETAILS}
          component={MovementsDetailsLoad}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export {MovementsNavigator};
