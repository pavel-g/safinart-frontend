import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {observer} from 'mobx-react';
import DevTools from 'mobx-react-devtools';
import { appState, AppState } from './app-state';
import { Sidebar } from './sidebar';
import { Content } from './content';

@observer
class SafinartMain extends React.Component<{appState: AppState}, {}> {
    render() {
        return (
            <div>
                <Sidebar sidebarSize="160px" titlebarSize="40px"/>
                <Content sidebarSize="160px" titlebarSize="40px"></Content>
                {/* <DevTools /> */}
            </div>
        );
    }

    onReset = () => {
        this.props.appState.resetTimer();
    }
};

ReactDOM.render(<SafinartMain appState={appState} />, document.getElementById('root'));
