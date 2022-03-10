import {View, Text, FlatList} from 'react-native';
import React, {useEffect} from 'react';
// import recipes from '../../json/recipes.json';
import Recipe from '../../components/card/Recipe';
import {styles} from './styles';
import {useSelector, useDispatch} from 'react-redux';

const RecipesScreen = ({navigation}) => {
  const recipes = useSelector(state => state.recipes.recipes);
  const user = useSelector(state => state.user.user)
  const dispatch = useDispatch();
  const navigateRecipesDetail = item => {
    navigation.navigate('recipesDetail', {recipe: item});
  };

  useEffect(()=>{
    dispatch(findAllRecipes(user.email))
  },[])
  
  return (
    <View style={styles.recipesContainer}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={recipes}
        keyExtractor={item => item.id}
        renderItem={data => (
          <Recipe item={data.item} onpress={navigateRecipesDetail} />
        )}
      />
    </View>
  );
};

export default RecipesScreen;
