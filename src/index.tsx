import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {observer} from 'mobx-react';
import DevTools from 'mobx-react-devtools';
import { appState, AppState } from './app-state';
import * as SUI from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import { Sidebar } from './sidebar';

@observer
class SafinartMain extends React.Component<{appState: AppState}, {}> {
    render() {
        return (
            <div>
                <SUI.Grid padded style={{height: '100%'}}>
                    <SUI.Grid.Column width={3}>
                        <Sidebar></Sidebar>
                    </SUI.Grid.Column>
                    <SUI.Grid.Column width={13}>
                        <SUI.Button onClick={this.onReset}>
                            Seconds passed: {this.props.appState.timer}
                        </SUI.Button>
                    </SUI.Grid.Column>
                </SUI.Grid>
                <DevTools />
            </div>
        );
    }

    onReset = () => {
        this.props.appState.resetTimer();
    }
};

ReactDOM.render(<SafinartMain appState={appState} />, document.getElementById('root'));
