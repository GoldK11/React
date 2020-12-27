import React from 'react';
import { ReactTabulator } from 'react-tabulator';
import CONST from 'src/assets/js/const';
import API from 'src/assets/js/api'
import LIB from 'src/assets/js/lib'
import 'src/css/contents/Movie.css';

class Movie extends React.Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();

        this.columns = [
            {
                title: CONST.TABLE.COLUMNS.LABEL.IMAGE, field: CONST.TABLE.COLUMNS.VALUE.IMAGE, minWidth: 150,
                width: 150, hozAlign: "center", formatter: "image", headerSort: false
            },
            { title: CONST.TABLE.COLUMNS.LABEL.TITLE, field: CONST.TABLE.COLUMNS.VALUE.TITLE, minWidth: 200, formatter: "html" },
            { title: CONST.TABLE.COLUMNS.LABEL.DIRECTOR, field: CONST.TABLE.COLUMNS.VALUE.DIRECTOR, minWidth: 120 },
            { title: CONST.TABLE.COLUMNS.LABEL.ACTORS, field: CONST.TABLE.COLUMNS.VALUE.ACTORS, minWidth: 150 },
            {
                title: CONST.TABLE.COLUMNS.LABEL.RATING, field: CONST.TABLE.COLUMNS.VALUE.RATING, minWidth: 100,
                width: 150, hozAlign: "center", formatter: "star"
            }
        ];

        this.options = {
            ...LIB.TABULATOR.options.common,
            ajaxURLGenerator: this.ajaxURLGenerator,
            ajaxResponse: this.ajaxResponse,
            ajaxError: this.ajaxError,
        };
    }


    render() {
        console.log("Render : Movie component");
        return (
            <div className="Movie">
                <ReactTabulator
                    ref={this.myRef}
                    className="Table"
                    columns={this.columns}
                    options={this.options}
                    data={[]}
                />
            </div>
        );
    }

    componentDidMount() {
        console.log("componentDidMount : Movie component");
    }

    componentDidUpdate() {
        console.log("componentDidUpdate : Movie component");
        if (!this.props.urlQuery[CONST.URL.QUERY.QUERY]) {
            alert(CONST.ALERT.ERROR.SEARCH.TITLE);
            return;
        }
        const tabulator = this.myRef.current.table;
        tabulator.setData(API.ajax.query, this.props.urlQuery);
    }

    // ======== user custom method ========

    ajaxURLGenerator = (url, config, params) => {
        console.log("ajaxURLGenerator", url, params);
        let newURL = `${url}?${CONST.URL.QUERY.QUERY}=${params.query}&${CONST.URL.QUERY.START}=${(params.page - 1) * params.size + 1}`;
        newURL += params.genre ? `&${CONST.URL.QUERY.GENRE}=${params.genre}` : "";
        return newURL;
    }

    ajaxResponse = (url, params, response) => {
        let data = response.items;
        console.log('ajaxResponse', url, response);
        data.forEach(ob => {
            ob.title = `${ob.title}<br><i>${ob.subtitle}</i>`
            ob.image = ob.image === "" ? API.default.image : ob.image;
            ob.actor = ob.actor.replace(/\|/gi, " || ");
            ob.director = ob.director.slice(0, -1);
            ob.userRating /= 2
            return ob;
        })

        return {
            last_page: Math.min(Math.ceil(response.total / 10), 100),
            data: data
        };
    }

    ajaxError = (error) => {
        console.log('ajaxError', error);
    }
}

export default Movie;
