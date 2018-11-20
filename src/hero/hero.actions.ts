import { AppState } from './../app/store';
import { HeroAction } from './hero.actions';
import { Hero } from './hero';
import { Action } from 'redux';
import { reDo, ReDoAction } from 'redux-re-do';

export enum HeroActionType {
    updating = 'HeroAction/updating',
    update = 'HeroAction/update'
}

export interface HeroAction extends Action {
    type: HeroActionType;
    hero?: Hero
}

export function updateHero(): ReDoAction<HeroAction, AppState> {
    return reDo((dispatch) => {
        dispatch({
            type: HeroActionType.updating
        });

        setTimeout(() => {
            const apiResult: Hero = {} as any;
            dispatch({
                type: HeroActionType.update,
                hero: {
                    ...apiResult,
                    name: 'John Smith'
                }
            });
        }, 3000);
    });
}
