import {View, Text, Image, FlatList, ScrollView} from 'react-native';
import React from 'react';
import {styles} from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {COLORS} from '../../utils/constants/Colors';

const RecipesDetail = ({route}) => {
  const {recipe} = route.params;
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{recipe.title}</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.userContainer}>
          <View style={styles.avatar}></View>
          <Text style={styles.text}>por {recipe.user}</Text>
        </View>
        <View style={styles.carouselContainer}>
          <Image source={{uri: recipe.photo}} style={styles.image} />
        </View>
        <View style={styles.infoContainer}>
          <Text>
            <Ionicons name="speedometer" size={20} color={COLORS.DARK_RED} />
            {'   '}
            Dificultad: {recipe.difficulty}
          </Text>
          <Text>
            <Ionicons name="list-circle" size={20} color={COLORS.DARK_RED} />
            {'   '}
            Pasos: {recipe.steps}
          </Text>
        </View>
        <View style={styles.listContainer}>
          <Text style={styles.subtitle}>
            <Ionicons name="basket" size={25} color={COLORS.DARK_RED} /> Lista
            de Ingredientes:{' '}
          </Text>
          <FlatList
            data={recipe.ingredients}
            keyExtractor={item => item.id}
            renderItem={data => (
              <Text style={styles.text}>{` * ${data.item}`}</Text>
            )}
          />
        </View>
        <View style={styles.instructionContainer}>
          <Text style={styles.subtitle}>
            <Ionicons name="restaurant" size={24} color={COLORS.DARK_RED} />
            Instrucciones:{' '}
          </Text>
          <FlatList
            data={recipe.instructions}
            keyExtractor={item => item.id}
            renderItem={data => (
              <>
                <Text style={styles.steps}>Paso {data.index + 1}.</Text>
                <Text style={styles.text}>{data.item}</Text>
                <Text style={styles.divider}>
                  -----------------------------{' '}
                  <Ionicons
                    name="restaurant"
                    size={20}
                    color={COLORS.LIGHT_GRAY}
                  />{' '}
                  -----------------------------------
                </Text>
              </>
            )}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default RecipesDetail;
