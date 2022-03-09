import {View, Text} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {styles} from './tabStyles';
import AuthNavigation from './auth/AuthNavigation';
import HomeNavigation from './home/HomeNavigation';
import FavoritesNavigation from './favorites/FavoritesNavigation';
import MyRecipesNavigation from './myRecipes/MyRecipesNavigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {COLORS} from '../utils/constants/Colors';

const BottomTabs = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <BottomTabs.Navigator
      initialRouteName="HomeTab"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBar,
      }}>
      <BottomTabs.Screen
        name="HomeTab"
        component={HomeNavigation}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={styles.item}>
              <Ionicons
                name={focused ? 'home' : 'home-outline'}
                size={24}
                color={focused && COLORS.BLUE}
              />
              <Text style={{color: focused && COLORS.BLUE}}>Recetas</Text>
            </View>
          ),
        }}
      />
      <BottomTabs.Screen
        name="FavoritesTab"
        component={FavoritesNavigation}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={styles.item}>
              <Ionicons
                name={focused ? 'heart' : 'heart-outline'}
                size={24}
                color={focused && COLORS.BLUE}
              />
              <Text style={{color: focused && COLORS.BLUE}}>Favoritos</Text>
            </View>
          ),
        }}
      />
      <BottomTabs.Screen
        name="MyRecipesTab"
        component={MyRecipesNavigation}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={styles.item}>
              <Ionicons
                name={focused ? 'receipt' : 'receipt-outline'}
                size={24}
                color={focused && COLORS.BLUE}
              />
              <Text style={{color: focused && COLORS.BLUE}}>Mis Recetas</Text>
            </View>
          ),
        }}
      />
      <BottomTabs.Screen
        name="AuthTab"
        component={AuthNavigation}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={styles.item}>
              <Ionicons
                name={focused ? 'person' : 'person-outline'}
                size={24}
                color={focused && COLORS.BLUE}
              />
              <Text style={{color: focused && COLORS.BLUE}}>Cuenta</Text>
            </View>
          ),
        }}
      />
    </BottomTabs.Navigator>
  );
};

export default TabNavigation;
