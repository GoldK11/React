import API from 'src/assets/api'
import { ReactTabulator } from 'react-tabulator';
import 'src/css/Contents.css';
import 'react-tabulator/lib/styles.css';
import 'react-tabulator/css/bootstrap/tabulator_bootstrap.min.css';

const LIBS = {
    TABULATOR: {
        options: {
            ajaxURL: API.VALUE.URL,
            ajaxConfig: {
                mode: "cors",
                method: "GET",
                headers:
                {
                    [API.KEY.CLIENT_ID]: API.VALUE.CLIENT_ID,
                    [API.KEY.CLIENT_SECRET]: API.VALUE.CLIENT_SECRET
                }
            },
            layout: "fitColumns",
            placeholder: "No Data",
            movableColumns: true,
            selectable: 1,
            ajaxResponse: (url, params, response) => {
                console.log('ajaxResponse', response);
                let data = response.items;
                return data;
            },
            ajaxError: (error) => {
                console.log('ajaxError', error);
            }
        },

        setOptions: (customData) => {
            const options = Object.assign(LIBS.TABULATOR.options, customData);
            return options;
        },

        renderTable: (options, columns) => {
            return (
                <ReactTabulator
                    className="Table"
                    columns={columns}
                    data={[]}
                    options={options}
                />
            )
        },

        changeTable: () => { }

    }
}

export default LIBS;