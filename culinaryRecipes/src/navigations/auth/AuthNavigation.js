import React from 'react';
import {View, Text} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useDispatch, useSelector} from 'react-redux';
import {styles} from './styles';
import LoginScreen from '../../screens/auth/LoginScreen';
import RegisterScreen from '../../screens/auth/RegisterScreen';
import Button from '../../components/button/Button';
import { logout } from '../../store/actions/user.action';

const Stack = createNativeStackNavigator();

const AuthNavigation = () => {
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return user.islogged ? (
    <View style={styles.container}>
      <Text>sesion iniciada como</Text>
      <Text style={styles.email}>{user.user.email}</Text>
      <Button title="Salir" onPress={handleLogout} style={styles.button} />
    </View>
  ) : (
    <Stack.Navigator
      initialRouteName="login"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name="login"
        component={LoginScreen}
        options={{
          headerShadowVisible: false,
        }}
      />
      <Stack.Screen
        name="register"
        component={RegisterScreen}
        options={{
          headerShadowVisible: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default AuthNavigation;
