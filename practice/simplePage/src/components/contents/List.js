import React from 'react';
import Toolbar from '../utilities/Toolbar';
import Movie from './Movie';
import 'src/css/List.css';

class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            urlQuery: {}
        }
    }

    render() {
        console.log("Render : List component");
        const urlQuery = this.state.urlQuery;
        return (
            <div className="List">
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


export default List;
