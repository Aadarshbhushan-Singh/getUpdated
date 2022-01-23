import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/NavBar';
import News from './Components/News';
import { BrowserRouter as Router,  Switch,  Route } from 'react-router-dom'
import React from 'react'


function App() {
  return (
    <div className="App">
      <Router>
      <NavBar />
        <Switch>
          <Route exact path="/"><News key="science" pageSize={20} country="in" category="general" /></Route>
          <Route exact path="/getUpdated"><News key="science" pageSize={20} country="in" category="general" /></Route>
          <Route exact path="/science"><News key="science" pageSize={20} country="in" category="science" /></Route>
          <Route exact path="/business"><News key="business" pageSize={20} country="in" category="business" /></Route>
          <Route exact path="/entertainment"><News key="entertainment" pageSize={20} country="in" category="entertainment" /></Route>
          <Route exact path="/general"><News key="general" pageSize={20} country="in" category="general" /></Route>
          <Route exact path="/health"><News  key="health" pageSize={20} country="in" category="health" /></Route>
          <Route exact path="/sports"><News key="sports" pageSize={20} country="in" category="sports" /></Route>
          <Route exact path="/technology"><News key="technology" pageSize={20} country="in" category="technology" /></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
