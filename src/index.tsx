import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {observer} from 'mobx-react';
import DevTools from 'mobx-react-devtools';
import { appState, AppState } from './app-state';
import * as SUI from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

@observer
class TimerView extends React.Component<{appState: AppState}, {}> {
    render() {
        return (
            <div>
                <SUI.Button onClick={this.onReset}>
                    Seconds passed: {this.props.appState.timer}
                </SUI.Button>
                <DevTools />
            </div>
        );
     }

     onReset = () => {
         this.props.appState.resetTimer();
     }
};

ReactDOM.render(<TimerView appState={appState} />, document.getElementById('root'));
