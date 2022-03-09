import {View, FlatList} from 'react-native';
import React, {useEffect} from 'react';
import {styles} from './styles';
import {useDispatch, useSelector} from 'react-redux';
import {findAllRecipes, deleteRecipe} from '../../store/actions/recipes.action';
import Recipe from '../../components/card/Recipe';
import Button from '../../components/button/Button';

const MyRecipesScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user.user)
  const recipes = useSelector(state => state.recipes.myRecipes);

  useEffect(() => {
    dispatch(findAllRecipes(user.email));
  }, [dispatch]);

  const navigateRecipesDetail = item => {
    navigation.navigate('recipesDetail', {recipe: item});
  };

  const handleDeleteRecipes = id => {
    dispatch(deleteRecipe(id));
  };

  return (
    <View style={styles.recipesContainer}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={recipes}
        keyExtractor={item => item.id}
        renderItem={data => (
          <>
            <Recipe item={data.item} onpress={navigateRecipesDetail} />
            <Button
              title="Eliminar Receta"
              style={styles.deleteButton}
              color="white"
              onPress={() => handleDeleteRecipes(data.item.id)}
            />
          </>
        )}
      />
    </View>
  );
};

export default MyRecipesScreen;
