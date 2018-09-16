import * as React from 'react';
import { Menu } from './menu'
import styled from 'styled-components';
import { Content } from './content';

export interface SidebarProps {
    sidebarSize: string
};

export const DivSidebar = styled.div`
    height: 100%;
    width: ${(props: SidebarProps) => props.sidebarSize};
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
    
    props: SidebarProps;
    
    render() {
        return (
            <div>
                <DivSidebar sidebarSize={this.props.sidebarSize}>
                    <h1>Safinart</h1>
                    <Menu></Menu>
                </DivSidebar>
                <Content sidebarSize={this.props.sidebarSize}></Content>
            </div>
        );
    }
    
}