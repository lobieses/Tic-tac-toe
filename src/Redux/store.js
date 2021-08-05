import {createStore, combineReducers} from 'redux';
import gameReducer from './app-reducer';
import initialGameReducer from "./initialGame-reducer";

let reducers = combineReducers({
    game: gameReducer,
});

let store  = createStore(reducers);

export default store;