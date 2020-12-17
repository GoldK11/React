import React from 'react';
import Toolbar from './Toolbar';
import Movie from './Movie';
import 'src/css/Contents.css';

class Contents extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            urlQuery: {}
        }
    }

    render() {
        console.log("Render : Contents component");
        const urlQuery = this.state.urlQuery;
        return (
            <div className="Contents">
                <Toolbar onSearch={this.handleSearch}></Toolbar>
                <Movie urlQuery={urlQuery}></Movie>
            </div>
        );
    }

    handleSearch = (data) => {
        this.setState((state) => {
            const query = state.urlQuery;
            query[data.key] = data.value;
            return { urlQuery: query }
        })

    };

}




export default Contents;
