import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {styles} from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {COLORS} from '../../utils/constants/Colors';
import {useDispatch} from 'react-redux';
import {
  deleteFavorites,
  insertRecipe,
} from '../../store/actions/recipes.action';

const Recipe = ({item, onpress, isFavorite}) => {
  const dispatch = useDispatch();
  const [favorite, setFavorite] = useState(isFavorite);

  const handleFavorite = () => {
    if (favorite) {
      dispatch(deleteFavorites(item.id));
      console.log('idDb', item.id);
    } else {
      dispatch(insertRecipe(item));
    }
    setFavorite(!favorite);
  };
  return (
    <TouchableOpacity style={styles.container} onPress={() => onpress(item)}>
      <TouchableOpacity style={styles.icon} onPress={handleFavorite}>
        <Ionicons
          name={favorite ? 'heart' : 'heart-outline'}
          size={22}
          color={COLORS.DARK_RED}
        />
      </TouchableOpacity>
      <Image style={styles.img} source={{uri: item.photo}} />
      <View style={styles.descriptionContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <View style={styles.userContainer}>
          <View style={styles.avatar}></View>
          <Text style={styles.text}>{item.user}</Text>
        </View>
        <View style={styles.description}>
          <Ionicons
            name="speedometer-outline"
            size={20}
            color={COLORS.LIGHT_RED}
          />
          <Text style={styles.text}>Dificultad: {item.difficulty}</Text>
          <Ionicons name="basket-outline" size={20} color={COLORS.LIGHT_RED} />
          <Text style={styles.text}>
            Ingredientes: {item?.ingredients.length}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Recipe;
