import axios from 'axios';
import {endpointRecipes} from '../config/endpoint';
import {deleteRecipe, fetchRecipes, insertRecipes} from '../db';

export const save = payload => {
  return axios.post(`${endpointRecipes}.json`, payload);
};
export const getAll = () => {
  return axios.get(`${endpointRecipes}.json`);
};
export const updateById = (id, payload) => {
  return axios.delete(`${endpointRecipes}/${id}.json`, payload);
};
export const deleteById = id => {
  return axios.delete(`${endpointRecipes}/${id}.json`);
};

export const saveFavorites = payload => {
  const instrcutionsString = payload.instructions.join('_');
  const ingredientsString = payload.ingredients.join('_');
  console.log('payload', payload);
  console.log('instructions', instrcutionsString);
  console.log('ingredients', ingredientsString);
  return insertRecipes(
    payload.user,
    payload.title,
    ingredientsString,
    payload.photo,
    instrcutionsString,
    payload.difficulty,
    payload.steps,
  );
};

export const deleteFavorite=(id)=>{
  return deleteRecipe(id)
}