import { BrowserRouter as Router,} from 'react-router-dom';
import './App.css';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Router>
        <Header isAuth = {true} />
      </Router>
    </div>
  );
}

export default App;
