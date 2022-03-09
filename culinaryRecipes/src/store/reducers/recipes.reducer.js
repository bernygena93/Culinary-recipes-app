import Recipes from '../../models/RecipesModel';
import {
  CREATE_RECIPE,
  DELETE_FAVORITE,
  DELETE_RECIPE,
  GET_FAVORITES,
  GET_RECIPES,
  INSERT_FAVORITE,
} from '../actions/recipes.action';

const initialState = {
  recipes: [],
  myRecipes: [],
  favorites: [],
};

const RecipesReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_RECIPE:
      let updateRecipes;
      let updateMyRecipes = [...state.myRecipes, action.payload];
      return {
        ...state,
        myRecipes: updateMyRecipes,
      };
    case INSERT_FAVORITE:
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };
    case GET_RECIPES:
      action.payload.forEach(recipe => {
        if (recipe.user === action.user) {
          updateRecipes = state.recipes;
          updateMyRecipes = [...state.myRecipes, recipe];
        } else {
          updateRecipes = [...state.recipes, recipe];
          updateMyRecipes = state.myRecipes;
        }
      });
      return {
        ...state,
        recipes: updateRecipes,
        myRecipes: updateMyRecipes,
      };
    case GET_FAVORITES:
      return {
        ...state,
        favorites: action.payload.map(item => {
          return new Recipes(
            item.id,
            item.user,
            item.title,
            item.ingredients,
            item.photo,
            item.instructions,
            item.difficulty,
            item.steps,
          );
        }),
      };
    case DELETE_RECIPE:
      console.log(action.id);
      return {
        ...state,
        myRecipes: state.myRecipes.filter(recipe => recipe.id !== action.id),
      };
    case DELETE_FAVORITE:
      console.log(action.id);
      return {
        ...state,
        favorites: state.favorites.filter(recipe => recipe.id !== action.id),
      };
    default:
      return state;
  }
};

export default RecipesReducer;
