import React from 'react';
import { connect, MapStateToProps } from "react-redux";
import { LoaderComponent } from '../loader/loader.component';
import { AppState } from '../app/store';
import { Hero } from './hero';

import './hero.component.scss';

type Props = {
    hero?: Partial<Hero>,
    loaded: boolean
};
const HeroBaseComponent: React.StatelessComponent<Props> = (props) => {
    let name = '';
    if (props.hero && props.hero.name) {
        name = props.hero.name;
    }

    return <LoaderComponent loaded={props.loaded}>
        <div className='hero-component'>
            {name}
        </div>
    </LoaderComponent>;
}

const mapStateToProps: MapStateToProps<Props, {}, AppState> = (state) => ({
    hero: state.heroReducer.hero,
    loaded: state.heroReducer.loaded
});

export const HeroComponent = connect(mapStateToProps)(HeroBaseComponent);