import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {styles} from './styles';
import InputOption from '../../components/form/InputOption';
import SelectDropdown from 'react-native-select-dropdown';
import Button from '../../components/button/Button';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {COLORS} from '../../utils/constants/Colors';
import {useDispatch, useSelector} from 'react-redux';
import {createRecipe} from '../../store/actions/recipes.action';
import List from '../../components/list/List';
import {launchCamera} from 'react-native-image-picker';
import {PERMISSIONS, request, RESULTS} from 'react-native-permissions';

const NewRecipeScreen = ({navigation}) => {
  const user = useSelector(state => state.user.user);
  const [pickerResponse, setPickerResponse] = useState();
  const distpatch = useDispatch();
  const [form, setForm] = useState({
    title: '',
    instructions: [],
    photo: {},
    ingredients: [],
    difficulty: '',
  });
  const [ingredient, setIngredient] = useState({
    ingredient: '',
    amount: '',
  });
  const [ingredients, setIngredients] = useState([]);
  const [step, setStep] = useState({});
  const [steps, setSteps] = useState([]);
  const difficulty = ['Facil', 'Medio', 'Dificil'];

  useEffect(() => {
    console.log('email'), user.email;
    setIngredient({
      ingredient: '',
      amount: '',
    });
    setForm({...form, ingredients: ingredients});
  }, [ingredients]);

  useEffect(() => {
    setStep('');
    setForm({...form, instructions: steps});
  }, [steps]);

  const handleTakeImage = async () => {
    const IS_IOS = Platform.OS === 'ios';
    const options = {
      selectionLimit: 1,
      mediaType: 'photo',
    };

    let granted;

    if (IS_IOS) {
      granted = await request(PERMISSIONS.IOS.CAMERA);
    } else {
      granted = await request(PERMISSIONS.ANDROID.CAMERA);
    }

    if (granted === RESULTS.GRANTED) {
      launchCamera(options, res => {
        if (!res.didCancel && !res.error) {
          setPickerResponse(res.assets[0]);
          setForm({...form, photo: res.assets[0]});
        }
      });
    } else {
      console.warn('Permission denied');
    }
  };

  const handleSubmitRecipe = () => {
    distpatch(
      createRecipe(
        user.email,
        form.title,
        form.instructions,
        form.photo.uri,
        form.ingredients,
        form.difficulty,
        form.instructions.length,
      ),
    );
    setForm({
      title: '',
      instructions: [],
      photo: {},
      ingredients: [],
      difficulty: '',
      steps: [],
    });
    navigation.navigate('myRecipes');
  };
  return (
    <View style={styles.container}>
      <ScrollView>
        <TouchableOpacity
          style={styles.imageContainer}
          onPress={handleTakeImage}>
          {pickerResponse ? (
            <Image source={{uri: pickerResponse.uri}} style={styles.image} />
          ) : (
            <>
              <Ionicons name="camera" size={50} color={COLORS.DARK_VIOLET} />
              <Text>Cargar foto</Text>
            </>
          )}
        </TouchableOpacity>
        <View style={styles.form}>
          <InputOption
            label="Titulo de la Receta"
            placeholder="Papas a la crema"
            setForm={setForm}
            form={form}
            name="title"
          />
          <View style={styles.ingredientsContainer}>
            <InputOption
              label="Ingrediente"
              placeholder="Harina 000"
              setForm={setIngredient}
              form={ingredient}
              name="ingredient"
            />
            <InputOption
              label="Cantidad"
              placeholder="1 taza"
              setForm={setIngredient}
              form={ingredient}
              name="amount"
            />
            <Button
              title="Agregar"
              style={styles.buttonAdd}
              color="white"
              onPress={() =>
                setIngredients([
                  ...ingredients,
                  `${ingredient.ingredient}-${ingredient.amount}`,
                ])
              }
            />
            <List items={ingredients} />
          </View>
          <View style={styles.ingredientsContainer}>
            <Text>Pasos</Text>
            <TextInput
              multiline={true}
              numberOfLines={5}
              placeholder="Colocar la harina en un bowl..."
              onChangeText={text => setStep(text)}
            />
            <Button
              title="Agregar"
              style={styles.buttonAdd}
              color="white"
              onPress={() => setSteps([...steps, step])}
            />
            <List items={steps} />
          </View>
          <SelectDropdown
            data={difficulty}
            buttonTextStyle={styles.fontSelect}
            defaultButtonText="Dificultad"
            buttonStyle={styles.select}
            onSelect={(selectedItem, index) => {
              setForm({...form, difficulty: selectedItem});
            }}
            buttonTextAfterSelection={selectedItem => {
              return selectedItem;
            }}
            rowTextForSelection={item => {
              return item;
            }}
          />
          <Button
            title="Guardar Receta"
            style={styles.button}
            color="white"
            onPress={handleSubmitRecipe}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default NewRecipeScreen;
