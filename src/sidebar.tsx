import * as React from 'react';
import { Menu } from './menu'
import styled from 'styled-components';
import { Sizes } from './sizes';

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
        width: ${Sizes.SIDEBAR_WIDTH};
    }
    
    @media screen and (max-width: 1024px) {
        height: ${Sizes.TITLEBAR_HEIGHT};
        width: 100%;
        
        h1 {
            float: left;
        }
    }
`;

export class Sidebar extends React.Component {
    
    render() {
        return (
            <div>
                <DivSidebar>
                    <h1>Safinart</h1>
                    <Menu></Menu>
                </DivSidebar>
            </div>
        );
    }
    
}