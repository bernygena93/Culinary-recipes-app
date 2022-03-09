import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import RecipesScreen from '../../screens/recipes/RecipesScreen';
import {COLORS} from '../../utils/constants/Colors';
import {styles} from './styles';
import RecipesDetail from '../../screens/recipes/RecipesDetail';

const Stack = createNativeStackNavigator();

const HomeNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="home">
      <Stack.Screen
        name="home"
        options={{
          headerStyle: styles.container,
          headerTintColor: COLORS.DARK_VIOLET,
          title: 'Todas las Recetas',
        }}
        component={RecipesScreen}
      />
      <Stack.Screen
        name="recipesDetail"
        options={{
          title: '',
        }}
        component={RecipesDetail}
      />
    </Stack.Navigator>
  );
};

export default HomeNavigation;
