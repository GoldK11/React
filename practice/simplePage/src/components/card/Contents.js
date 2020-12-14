import React from 'react';
import Toolbar from './Toolbar';
import Movie from './Movie';
import 'src/css/Contents.css';

class Contents extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            params: {
                query: null,
                genre: 0
            }
        }
    }

    render() {
        const params = this.state.params;
        console.log("render Contents", params);
        return (
            <div className="Contents">
                <Toolbar onSearch={this.handleSearch}></Toolbar>
                <Movie params={params}></Movie>
            </div>
        );
    }

    handleSearch = (data) => {
        const params = this.state.params
        params[data.key] = data.value;
        console.log("handle search", params);

        this.setState(params);
    };

}




export default Contents;
