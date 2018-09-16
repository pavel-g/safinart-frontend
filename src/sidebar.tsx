import * as React from 'react';
import { Menu } from './menu'
import styled from 'styled-components';

export const DivSidebar = styled.div`
    height: 100%;
    width: ${props => props.width};
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    background-color: #FFFFFF;
    overflow-x: hidden;
    
    h1 {
        color: #808080;
    }
`;

export class Sidebar extends React.Component {
    
    props: {width: string}
    
    render() {
        return (
            <DivSidebar width={this.props.width}>
                <h1>Safinart</h1>
                <Menu></Menu>
            </DivSidebar>
        );
    }
    
}