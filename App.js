import './App.css';
import {
  BrowserRouter as Router, Switch, Route
} from "react-router-dom"
import Home from './Home.js'
import Login from './Login.js'
import Register from './Register.js'


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>

          <Route path='/login'>
            <Login />
          </Route>

          <Route path='/register'>
            <Register />
          </Route>


        </Switch>
      </Router>
    </div>
  );
}

export default App;
