import React from 'react';
import Toolbar from './Toolbar';
import Movie from './Movie';
import CONST from 'src/assets/cosnt';
import 'src/css/Contents.css';

class Contents extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            params: {}
        }
    }

    render() {
        console.log("Render : Contents component");
        const params = this.state.params;
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
        if (!params[CONST.URL.PARAMS.QUERY]) {
            alert(CONST.ALERT.ERROR.SEARCH.TITLE);
            return;
        }
        this.setState(params);
    };

}




export default Contents;
