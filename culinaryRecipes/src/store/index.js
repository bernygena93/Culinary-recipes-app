import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import RecipesReducer from './reducers/recipes.reducer';
import AuthReducer from './reducers/user.reducer';

const RootReducer = combineReducers({
  recipes: RecipesReducer,
  user: AuthReducer,
});

export default createStore(RootReducer, applyMiddleware(thunk));
