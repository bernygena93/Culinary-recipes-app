import {fetchRecipes} from '../../db';
import {
  save,
  getAll,
  saveFavorites,
  deleteById,
  deleteFavorite,
} from '../../service/recipesService';

export const CREATE_RECIPE = 'CREATE_RECIPE';
export const GET_RECIPES = 'GET_RECIPES';
export const INSERT_FAVORITE = 'INSERT_FAVORITE';
export const GET_FAVORITES = 'GET_FAVORITES';
export const DELETE_RECIPE = 'DELETE_RECIPE';
export const DELETE_FAVORITE = 'DELETE_FAVORITE';

export const createRecipe = (
  user,
  title,
  instructions,
  photo,
  ingredients,
  difficulty,
  steps,
) => {
  const payload = {
    user,
    title,
    instructions,
    photo,
    ingredients,
    difficulty,
    steps,
  };

  return async dispatch => {
    try {
      await save(payload);
      dispatch({
        type: CREATE_RECIPE,
        payload,
      });
    } catch (err) {
      console.log(err.message);
    }
  };
};

export const findAllRecipes = user => {
  return async dispatch => {
    try {
      const result = await getAll();
      const recipes = Object.keys(result.data).map(key => ({
        ...result.data[key],
        id: key,
      }));
      dispatch({
        type: GET_RECIPES,
        user,
        payload: recipes,
      });
    } catch (err) {
      console.log(err.message);
    }
  };
};

export const insertRecipe = item => {
  return async dispatch => {
    try {
      const result = await saveFavorites(item);
      payload = {
        id: result.insertId,
        user: item.user,
        title: item.title,
        instructions: item.instructions,
        photo: item.photo,
        ingredients: item.ingredients,
        difficulty: item.difficulty,
        steps: item.steps,
      };
      console.log('producto favorito', payload);
      dispatch({
        type: INSERT_FAVORITE,
        payload,
      });
    } catch (err) {
      console.log(err.message);
    }
  };
};

export const fetchFavorites = () => {
  return async dispatch => {
    try {
      const result = await fetchRecipes();
      dispatch({
        type: GET_FAVORITES,
        payload: result,
      });
    } catch (err) {
      console.log(err.message);
    }
  };
};

export const deleteRecipe = id => {
  return async dispatch => {
    try {
      const result = await deleteById(id);
      console.log('delete result', result);
      dispatch({
        type: DELETE_RECIPE,
        id: id,
      });
      console.log('receta eliminada');
    } catch (err) {
      console.log(err.message);
    }
  };
};

export const deleteFavorites = id => {
  return async dispatch => {
    try {
      console.log('id ingresado', id);
      const result = await deleteFavorite(id);
      console.log('resultado', result);
      dispatch({
        type: DELETE_FAVORITE,
        id: id,
      });
    } catch (err) {
      console.log(err.message);
    }
  };
};
