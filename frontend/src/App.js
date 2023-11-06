import React, { Component, createRef } from 'react';
import { render } from "react-dom";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect
} from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './components/Nav/Nav.jsx'
import Home from './pages/Index/index.jsx'
import Error404 from './pages/Error404/error404.jsx'
// For testing components with Django integration.
import Bug from './pages/Bug/Bug.jsx'
import BugAdd from './pages/BugAdd/BugAdd.jsx'
import Django from './pages/Django/Django.jsx'
import CommandAdd from './pages/CommandAdd/CommandAdd.jsx'
import PowerShell from './pages/PowerShell/PowerShell.jsx';

class App extends Component {
  state = {
    
  }

  render() {
    return (
      <div> 
        <Router>
          {/* Use Switch to avoid 404 not rendering on all pages. */}
          <Switch>
            {/* All our Routes goes here! */}
            <Route exact path="/" component={Home} />
            <Route exact path="/bug" component={Bug} />
            <Route exact path="/bug_add" component={BugAdd} />
            <Route exact path="/django" component={Django} />
            <Route exact path="/ps" component={PowerShell} />
            <Route exact path="/command_add" component={CommandAdd} />
            <Route component={Error404} />
          </Switch>
        </Router>      
      </div>

    )
  }
}

export default App;
