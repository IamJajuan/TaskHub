import { BrowserRouter as Router,} from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <div className="app-container">
      <Router>
        <Header isAuth = {true} />
        <div className = "app-content" >

        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
