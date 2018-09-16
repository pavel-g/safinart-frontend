import * as React from 'react';
import styled from 'styled-components';

export interface ContentProps {
    sidebarSize: string
};

export const DivContent = styled.div`
    height: 100%;
    margin-left: ${(props: ContentProps) => props.sidebarSize};
`;

export class Content extends React.Component {
    
    props: ContentProps;
    
    render() {
        return (
            <DivContent sidebarSize={this.props.sidebarSize}>
                <p>Content area</p>
            </DivContent>
        );
    }
    
}