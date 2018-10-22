import * as React from 'react';
import styled from 'styled-components';
import { Sizes } from './sizes';
import { Link } from 'react-router-dom';
import { Links } from './links';

export interface MenuState {
    menuVisible: boolean;
};

export const DivMenu = styled.div``;

export const DivMenuContent = styled.div`
    background-color: #FFFFFF;

    @media screen and (min-width: 1024px) {
        display: block;
    }
    @media screen and (max-width: 1024px) {
        display: ${(props: MenuState) => {return (props.menuVisible ? 'block' : 'none')}};
        position: fixed;
        top: ${Sizes.TITLEBAR_HEIGHT};
        width: 100%;
    }
`;

export const DivMenuButton = styled.button`
    float: right;
    border: 2px solid #000000;
    padding: 5px 15px 5px 15px;
    
    @media screen and (min-width: 1024px) {
        display: none;
    }
    @media screen and (max-width: 1024px) {
        display: block;
    }
`;

export class Menu extends React.Component {
    
    state: MenuState;
    
    constructor(props) {
        super(props);
        this.state = {
            menuVisible: false
        }
    }
    
    render() {
        const links = Links.map((link) => {
            return ( <p><a href={ link.dist }>{ link.name }</a></p> );
        });
        return (
            <DivMenu>
                <DivMenuButton onClick={this.onMenuClick.bind(this)}>Menu</DivMenuButton>
                <DivMenuContent menuVisible={this.state.menuVisible}>
                    <p><Link to="/about">About me</Link></p>
                    { links }
                </DivMenuContent>
            </DivMenu>
        );
    }
    
    onMenuClick() {
        this.setState({
            menuVisible: !this.state.menuVisible
        });
    }
    
}