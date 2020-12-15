import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./App.css";
import Home from "./components/home.jsx";
import WorkoutResult from "./components/workout-routine.jsx";
import Oops from "./components/oops.jsx";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <div className='App' id='bootstrap-overrides'>
      <header className='App-header'>
        <div className='col-md-6'>Work It</div>
      </header>
      <BrowserRouter>
        <div className='Site-content'>
          <Switch>
            <Route path='/' component={Home} exact />
            <Route path='/workout' component={WorkoutResult} exact />
            <Route component={Oops} exact />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
