import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CONST from 'src/assets/cosnt';
import LIB from 'src/assets/lib';
import 'src/css/Toolbar.css';

class Toolbar extends React.Component {
    render() {
        console.log("Render : Toolbar component");
        return (
            <div className="Toolbar">
                <div className="Search">
                    <TextField
                        id="search-title"
                        style={{ width: 200 }}
                        label={CONST.PLACEHOLDER.TITLE}
                        required
                        onKeyDown={this.chagneTitle}
                    />
                </div>
                <div className="Search">
                    <Autocomplete
                        id="search-genre"
                        style={{ width: 200 }}
                        disableClearable
                        defaultValue={LIB.TABULATOR.data.genreList[0]}
                        options={LIB.TABULATOR.data.genreList}
                        getOptionLabel={(option) => option.title}
                        onChange={this.changeGenre}
                        renderInput={(params) => {
                            return < TextField {...params} label={CONST.PLACEHOLDER.GENRE} />
                        }}
                    />
                </div>
            </div>
        );
    }

    chagneTitle = (e) => {
        if (e.keyCode !== 13 && e.keyCode !== 9) return;
        if (!e.target.value) {
            alert(CONST.ALERT.ERROR.SEARCH.TITLE);
            e.preventDefault();
            return false;
        }
        const data = { key: CONST.URL.PARAMS.QUERY, value: e.target.value }
        this.props.onSearch(data);
    }

    changeGenre = (e, value, reason) => {
        let data = { key: CONST.URL.PARAMS.GENRE };
        this.props.onSearch(data);
    }
}



export default Toolbar;
