import * as React from 'react';
import styled from 'styled-components';

export interface ContentProps {
    sidebarSize: string;
    titlebarSize: string;
};

export const DivContent = styled.div`
    @media screen and (min-width: 1024px) {
        height: 100%;
        margin-left: ${(props: ContentProps) => props.sidebarSize};
    }
    
    @media screen and (max-width: 1024px) {
        width: 100%;
        margin-top: ${(props: ContentProps) => props.titlebarSize};
    }
`;

export class Content extends React.Component {
    
    props: ContentProps;
    
    render() {
        return (
            <DivContent sidebarSize={this.props.sidebarSize} titlebarSize={this.props.titlebarSize}>
                <p>Content area</p>
            </DivContent>
        );
    }
    
}