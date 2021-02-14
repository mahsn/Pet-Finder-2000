import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Navbar from './components/NavBar/Navbar.js';
import Home from './components/Pages/Home/Home.js';
import Pets from './components/Pages/Pets/Pets.js';
import SingLogMain from './components/Pages/SingLogMain/SingLogMain.js';

function App() {
  return (
    <>
      <Router>
          <Navbar/>
          <Switch>
            <Route  path="/" exact component = {Home}/>
            <Route  path="/pets" exact component = {Pets}/>
            <SingLogMain  path="/sign-up" exact component  = {SingLogMain} />
          </Switch>
      </Router>
    </>
  );
}

export default App;
