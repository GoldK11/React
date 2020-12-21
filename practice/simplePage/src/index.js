import React from 'react';
import ReactDOM from 'react-dom';
import App from 'src/components/App';
import 'react-tabulator/lib/styles.css';
import 'react-tabulator/css/bootstrap/tabulator_bootstrap.min.css';
import 'src/css/index.css';
import "src/css/libs.css"

ReactDOM.render(
    // <React.StrictMode>
    <App />,
    // </React.StrictMode>,
    document.getElementById('root')
);

