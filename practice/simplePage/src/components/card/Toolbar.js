import React from 'react';
import 'src/css/Toolbar.css';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import API from 'src/assets/api';

class Toolbar extends React.Component {
    render() {
        return (
            <div className="Toolbar">
                <div className="Search">
                    <TextField id="search-title" label="제목" required onKeyDown={this.chagneTitle} />
                </div>
                <div className="Search">
                    <Autocomplete
                        id="search-genre"
                        options={API.DATA.GENRE}
                        getOptionLabel={(option) => option.title}
                        style={{ width: 300 }}
                        onChange={this.changeGenre}
                        defaultValue={API.DATA.GENRE[0]}
                        renderInput={(params) => {
                            return < TextField {...params} label="장르" />
                        }}
                    />
                </div>
            </div>
        );
    }

    chagneTitle = (e) => {
        if (e.keyCode !== 13 && e.keyCode !== 9) return;
        if (!e.target.value) {
            alert("Enter the title!");
            e.preventDefault();
            return false;
        }

        const data = { key: "query", value: e.target.value }
        this.props.onSearch(data);
    }

    changeGenre = (e, value, reason) => {
        console.log("change genre", value)
        const data = { key: "genre", value: value.value }
        this.props.onSearch(data);
    }
}



export default Toolbar;
