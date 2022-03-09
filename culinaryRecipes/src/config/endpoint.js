const endpointDBBase =
  'https://culinary-recipes-app-f4f2e-default-rtdb.firebaseio.com/';

const API_KEY = 'AIzaSyApbiSJVBSB-KIC5zQe7GnhcojUKjoEWpY';

export const endpointRecipes = `${endpointDBBase}recipes`;
export const endpointUsers = `${endpointDBBase}users`;
export const URL_API_SIGNUP = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`;
export const URL_API_SIGNIN = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`;
