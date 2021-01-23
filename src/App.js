import { BrowserRouter as Router, Route, Switch,} from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import PrivateRoute from "./components/PrivateRoute";
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp'


function App() {
  return (
    <div className="app-container">
      <Router>
        <Header isAuth = {true} />
        <div className = "app-content" >

          <Switch>
          <PrivateRoute isAuth = {false} exact path = "/" >
            <Home />
          </PrivateRoute>
          <Route path = "/login" component = {Login} />
          <Route path = "/signup" component = {SignUp} />
          </Switch>

        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
