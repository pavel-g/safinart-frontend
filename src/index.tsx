import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {observer} from 'mobx-react';
import DevTools from 'mobx-react-devtools';
import { appState, AppState } from './app-state';
import * as SUI from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

@observer
class SafinartMain extends React.Component<{appState: AppState}, {}> {
    render() {
        return (
            <div>
                <SUI.Grid celled padded style={{height: '100%'}}>
                    <SUI.Grid.Row style={{height: '100%'}}>
                        <SUI.Sidebar.Pushable>
                            <SUI.Sidebar as={SUI.Menu} vertical visible={true} inverted>
                                <SUI.Menu.Item as='a'>
                                    <h1>Safinart</h1>
                                </SUI.Menu.Item>
                                <SUI.Menu.Item as='a'>
                                    About me
                                </SUI.Menu.Item>
                                <SUI.Menu.Item as='a' href='https://vk.com'>
                                    VK
                                </SUI.Menu.Item>
                                <SUI.Menu.Item as='a' href='https://etsy.com'>
                                    Etsy
                                </SUI.Menu.Item>
                                <SUI.Menu.Item as='a' href='https://livemaster.ru'>
                                    Livemaster
                                </SUI.Menu.Item>
                            </SUI.Sidebar>
                            <SUI.Sidebar.Pusher>
                                <SUI.Grid celled padded style={{'marginLeft': '200px', height: '100%'}}>
                                    <SUI.Grid.Row style={{height: '100%'}}>
                                        <SUI.Button onClick={this.onReset}>
                                            Seconds passed: {this.props.appState.timer}
                                        </SUI.Button>
                                    </SUI.Grid.Row>
                                </SUI.Grid>
                            </SUI.Sidebar.Pusher>
                        </SUI.Sidebar.Pushable>
                    </SUI.Grid.Row>
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
