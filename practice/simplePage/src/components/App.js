import Header from './layout/Header';
import Contents from './layout/Contents';
import { BrowserRouter as Router } from 'react-router-dom';
import 'src/css/App.css';


function App() {
  return (
    <div className="App Layout">
      <Router>
        <Header></Header>
        <Contents></Contents>
      </Router>
    </div>
  );
}

export default App;
