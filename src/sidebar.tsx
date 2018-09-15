import * as React from 'react';
import * as SUI from 'semantic-ui-react';
import { Menu } from './menu'

export class Sidebar extends React.Component {
    
    render() {
        return (
            <SUI.List>
                <SUI.List.Content>
                    <h1>Safinart</h1>
                </SUI.List.Content>
                <Menu></Menu>
            </SUI.List>
        );
    }
    
}