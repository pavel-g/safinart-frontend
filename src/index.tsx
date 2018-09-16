import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {observer} from 'mobx-react';
import DevTools from 'mobx-react-devtools';
import { appState, AppState } from './app-state';
import styled from 'styled-components';

const Section = styled.section`
    color: white;
`;

@observer
class SafinartMain extends React.Component<{appState: AppState}, {}> {
    render() {
        return (
            <div>
                {/* <FullScreen></FullScreen> */}
                <DevTools />
            </div>
        );
    }

    onReset = () => {
        this.props.appState.resetTimer();
    }
};

ReactDOM.render(<SafinartMain appState={appState} />, document.getElementById('root'));
