import {View, Text} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import FavoritesScreen from '../../screens/favorites/FavoritesScreen';
import {styles} from './styles';
import {COLORS} from '../../utils/constants/Colors';
import {useSelector} from 'react-redux';
import AuthenticateRequireScreen from '../../screens/auth/AuthenticateRequireScreen';

const Stack = createNativeStackNavigator();

const FavoritesNavigation = () => {
  const user = useSelector(state => state.user);

  return (
    <Stack.Navigator initialRouteName="favorites">
      <Stack.Screen
        name="favorites"
        options={{
          headerStyle: styles.container,
          headerTintColor: COLORS.DARK_RED,
          title: 'Favoritos',
        }}
        component={user.islogged ? FavoritesScreen : AuthenticateRequireScreen}
      />
    </Stack.Navigator>
  );
};

export default FavoritesNavigation;
