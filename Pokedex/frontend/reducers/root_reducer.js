import { combineReducers } from 'redux';
import entitiesReducer from './pokemon_reducer';


const rootReducer = combineReducers({
  entities: entitiesReducer
});

export default rootReducer;
