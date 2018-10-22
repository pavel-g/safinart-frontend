import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Sidebar } from './sidebar';
import { Content } from './content';
import { BrowserRouter } from 'react-router-dom';

class SafinartMain extends React.Component {
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
};

ReactDOM.render(<SafinartMain/>, document.getElementById('root'));
