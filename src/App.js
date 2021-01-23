import { BrowserRouter as Router, Route, Switch,} from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/Home';

function App() {
  return (
    <div className="app-container">
      <Router>
        <Header isAuth = {true} />
        <div className = "app-content" >

          <Switch>
          <Route exact path = "/" component = {Home} />
          </Switch>

        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
