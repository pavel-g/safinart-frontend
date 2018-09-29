import * as React from 'react';

export enum MainContentModes {
    MAP = 'MAP',
    GALLERY = 'GALLERY'
}

export interface MainContentStateInterface {
    mode: MainContentModes
}

export class MainContent extends React.Component {
    
    state: MainContentStateInterface;
    
    constructor(props) {
        super(props);
        this.state = {
            mode: MainContentModes.MAP
        };
    }
    
    render() {
        let component;
        if (this.state.mode === MainContentModes.GALLERY) {
            component = (
                <div>Галерея</div>
            );
        } else {
            component = (
                <div>Карта</div>
            );
        }
        return (
            <div>
                {component}
            </div>
        );
    }
    
}