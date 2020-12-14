import React from 'react';
import API from 'src/assets/api'
import 'src/css/Movie.css';
import { ReactTabulator } from 'react-tabulator';

class Movie extends React.Component {

    constructor(props) {
        super(props);
        this.myRef = React.createRef();

        this.columns = [
            { title: "포스터", field: "image", width: 150, minWidth: 150, hozAlign: "center", formatter: "image", headerSort: false },
            { title: "제목", field: "title", minWidth: 200, formatter: "html" },
            { title: "감독", field: "director", minWidth: 100, width: 200 },
            { title: "배우", field: "actor", minWidth: 200 },
            { title: "평점", field: "userRating", minWidth: 100, width: 150, hozAlign: "center", formatter: "star" }
        ];

        this.options = {
            height: 'calc(100% - 40px)',
            layout: "fitColumns",
            placeholder: "No Data",
            movableColumns: true,
            ajaxConfig: {
                mode: "cors",
                method: "GET",
                headers:
                {
                    // 'Content-Type': 'application/json',
                    // 'Accept': 'application/json',
                    'X-Naver-Client-Id': API.CLIENT_ID,
                    'X-Naver-Client-Secret': API.CLIENT_SECRET
                }
            },
            pagination: "remote",
            paginationSize: 10,


            ajaxURLGenerator: (url, config, params) => {
                console.log("ajaxURLGenerator", url, params);
                let newURL = `${url}?query=${params.query}&start=${(params.page - 1) * params.size + 1}`;
                newURL += params.genre ? `&genre=${params.genre}` : "";
                return newURL
            },

            ajaxResponse: (url, params, response) => {
                let data = response.items;
                console.log('ajaxResponse', url, response);
                data.map(ob => {
                    ob.title = `${ob.title}<br><i>${ob.subtitle}</i>`
                    ob.image = ob.image === "" ? API.PLACEHOLDER : ob.image;
                    ob.actor = ob.actor.replace(/\|/gi, " || ");
                    ob.director = ob.director.slice(0, -1);
                    ob.userRating /= 2
                    return ob;
                })

                return {
                    last_page: Math.min(Math.ceil(response.total / 10), 100),
                    data: data
                };
            },

            ajaxError: (error) => {
                console.log('ajaxError', error);
            }
        };

    }


    render() {
        console.log("render movie...");
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
        console.log("componentDidMount");
    }

    componentDidUpdate() {
        console.log("componentDidUpdate");
        const tabulator = this.myRef.current.table;
        console.log(tabulator);
        tabulator.setData(API.URL, this.props.params);
    }
}

export default Movie;
