import * as React from 'react';
import styled from 'styled-components';
import { Sizes } from './sizes';

export const DivContent = styled.div`
    @media screen and (min-width: 1024px) {
        height: 100%;
        margin-left: ${Sizes.SIDEBAR_WIDTH};
    }
    
    @media screen and (max-width: 1024px) {
        width: 100%;
        margin-top: ${Sizes.TITLEBAR_HEIGHT};
    }
`;

export class Content extends React.Component {
    
    render() {
        return (
            <DivContent>
                <p>Content area</p>
            </DivContent>
        );
    }
    
}