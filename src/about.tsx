import * as React from 'react';
import Axios from 'axios';
import ReactMarkdown from 'react-markdown';

export class About extends React.Component {
    
    state: {
        content: string;
    };
    
    constructor(props) {
        super(props);
        this.state = {
            content: ''
        };
        this.loadData();
    }
    
    async loadData() {
        const resp = await Axios.get('/about.md');
        this.setState({content: resp.data});
    }
    
    render() {
        return (
            <div>
                <ReactMarkdown source={ this.state.content }></ReactMarkdown>
            </div>
        );
    }
    
}