import {TouchableOpacity} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MyRecipesScreen from '../../screens/myRecipes/MyRecipesScreen';
import {styles} from './styles';
import {COLORS} from '../../utils/constants/Colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import NewRecipeScreen from '../../screens/myRecipes/NewRecipeScreen';
import RecipesDetail from '../../screens/recipes/RecipesDetail';
import {useSelector} from 'react-redux';
import AuthenticateRequireScreen from '../../screens/auth/AuthenticateRequireScreen';
const Stack = createNativeStackNavigator();

const MyRecipesNavigation = () => {
  const user = useSelector(state => state.user);

  return (
    <Stack.Navigator initialRouteName="myRecipes">
      <Stack.Screen
        name="myRecipes"
        options={({navigation}) => ({
          headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate('newRecipes')}>
              <Ionicons name="add-outline" size={23} color={COLORS.BLUE} />
            </TouchableOpacity>
          ),
          headerStyle: styles.container,
          headerTintColor: COLORS.DARK_VIOLET,
          title: 'Mis Recetas',
        })}
        component={user.islogged ? MyRecipesScreen : AuthenticateRequireScreen}
      />
      <Stack.Screen
        name="newRecipes"
        options={{
          headerStyle: styles.container,
          headerTintColor: COLORS.DARK_VIOLET,
          title: 'Nueva Receta',
        }}
        component={user.islogged ? NewRecipeScreen : AuthenticateRequireScreen}
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

export default MyRecipesNavigation;
