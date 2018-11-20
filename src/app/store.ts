import { HeroState, heroReducer } from "../hero/hero.reducer";
import { combineReducers, applyMiddleware, createStore } from "redux";
import { reDoMiddleware } from "redux-re-do";

export type AppState = {
    heroReducer: HeroState
}
const reducers = combineReducers<AppState>({ heroReducer });
const middleware = applyMiddleware(reDoMiddleware);

export const appStore = createStore(reducers, middleware);