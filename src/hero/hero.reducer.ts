import { HeroActionType, HeroAction } from './hero.actions';
import { HeroState } from './hero.reducer';
import { Reducer } from "redux";
import { Hero } from "./hero";

export interface HeroState {
    loaded: boolean;
    hero?: Hero;
}

const initialState: HeroState = {
    loaded: false
}

export const heroReducer: Reducer<HeroState, HeroAction> = (state = initialState, action) => {
    switch (action.type) {
        case HeroActionType.updating:
            return {
                ...state,
                loaded: false
            };

        case HeroActionType.update:
            if (action.hero) {
                return {
                    ...state,
                    loaded: true,
                    hero: {
                        ...state.hero,
                        ...action.hero
                    }
                };
            }
    }

    return state;
}
