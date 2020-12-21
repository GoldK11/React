import Header from './layout/Header';
import Page from './layout/Page';
import { BrowserRouter as Router } from 'react-router-dom';
import 'src/css/App.css';


function App() {
  return (
    <Router>
      <div className="App Layout">
        <Header></Header>
        <Page></Page>
      </div>
    </Router>
  );
}

export default App;
