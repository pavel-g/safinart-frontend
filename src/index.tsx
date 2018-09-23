import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {observer} from 'mobx-react';
import { appState, AppState } from './app-state';
import { Sidebar } from './sidebar';
import { Content } from './content';
import { BrowserRouter } from 'react-router-dom';

@observer
class SafinartMain extends React.Component<{appState: AppState}, {}> {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Sidebar/>
                    <Content></Content>
                </div>
            </BrowserRouter>
        );
    }

    onReset = () => {
        this.props.appState.resetTimer();
    }
};

ReactDOM.render(<SafinartMain appState={appState} />, document.getElementById('root'));
