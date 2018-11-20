import React from 'react';
import { Provider } from 'react-redux';
import { HeroComponent } from '../hero/hero.component';
import { updateHero } from '../hero/hero.actions';
import { BrowserRouter, Route } from 'react-router-dom';
import { appStore } from './store';

export class App extends React.Component {
    public componentDidMount() {
        appStore.dispatch(updateHero());
    }

    public render() {
        return (
            <Provider store={appStore}>
                <BrowserRouter>
                    <Route path="/" component={HeroComponent} />
                </BrowserRouter>
            </Provider>
        )
    }
}
