import React from "react";
import './loader.component.scss';

type Props = {
    loaded: boolean
}

export const LoaderComponent: React.StatelessComponent<Props> = (props) => {
    if (props.loaded) {
        return <>{props.children}</>
    }

    return <div className='loader-component'>
        <span>Loading...</span>
    </div>
}