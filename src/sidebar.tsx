import * as React from 'react';
import { Menu } from './menu'
import styled from 'styled-components';

export interface SidebarProps {
    sidebarSize: string;
    titlebarSize: string;
};

export const DivSidebar = styled.div`
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    background-color: #FFFFFF;
    overflow-x: hidden;
    overflow-y: hidden;
    
    h1 {
        color: #808080;
    }
    
    @media screen and (min-width: 1024px) {
        height: 100%;
        width: ${(props: SidebarProps) => props.sidebarSize};
    }
    
    @media screen and (max-width: 1024px) {
        height: ${(props: SidebarProps) => props.titlebarSize};
        width: 100%;
    }
`;

export class Sidebar extends React.Component {
    
    props: SidebarProps;
    
    render() {
        return (
            <div>
                <DivSidebar sidebarSize={this.props.sidebarSize} titlebarSize={this.props.titlebarSize}>
                    <h1>Safinart</h1>
                    <Menu></Menu>
                </DivSidebar>
            </div>
        );
    }
    
}