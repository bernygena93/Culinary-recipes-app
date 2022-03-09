import React, {useEffect} from 'react';
import {View, Text, FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Recipe from '../../components/card/Recipe';
import {fetchFavorites} from '../../store/actions/recipes.action';
import {styles} from './styles';

const FavoritesScreen = () => {
  const dispatch = useDispatch();
  const recipes = useSelector(state => state.recipes.favorites);

  useEffect(() => {
    dispatch(fetchFavorites());
  }, [recipes]);

  const navigateRecipesDetail = item => {
    navigation.navigate('recipesDetail', item);
  };

  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={recipes}
        keyExtractor={item => item.id}
        renderItem={data => (
          <Recipe item={data.item} onpress={navigateRecipesDetail} isFavorite />
        )}
      />
    </View>
  );
};

export default FavoritesScreen;
