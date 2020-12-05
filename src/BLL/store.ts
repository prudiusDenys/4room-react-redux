import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from 'redux-thunk';
import {tracksReducer} from "./reducers/tracks-reducer";

const reducers = combineReducers({
tracks: tracksReducer
})

export type RootReducersType = ReturnType<typeof reducers>

export const store = createStore(reducers, applyMiddleware(thunkMiddleware))

