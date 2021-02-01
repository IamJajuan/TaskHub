import { BrowserRouter as Router, Route, Switch,} from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import Project from './pages/Project'
import { GlobalStyles } from './styles/Global';
import { Provider } from 'react-redux';
import { store } from './Store';
import NotFound from './pages/NotFound';
import { BASEURL } from './CONSTANTS';


function App() {
  const  classes = GlobalStyles()
  return (
   <Provider store = {store}>
 <div className="app-container">
      <Router>
        <Header />
        <div className = {classes.toolbar} />
        <div className = "app-content" >

          <Switch>
          <Route exact path = {BASEURL} component = {Home} />
          <Route path = "/project/:id" component = {Project}  />
          <Route path="*"  component = {NotFound}/>
          </Switch>

        </div>
      </Router>
    </div>
   </Provider>
  );
}

export default App;
