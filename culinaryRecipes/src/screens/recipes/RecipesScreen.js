import {View, Text, FlatList} from 'react-native';
import React from 'react';
// import recipes from '../../json/recipes.json';
import Recipe from '../../components/card/Recipe';
import {styles} from './styles';
import {useSelector} from 'react-redux';

const RecipesScreen = ({navigation}) => {
  const recipes = useSelector(state => state.recipes.recipes);
  const navigateRecipesDetail = item => {
    navigation.navigate('recipesDetail', {recipe: item});
  };
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
