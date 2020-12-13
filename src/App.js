import React, { useState, useEffect } from 'react';
// import { Container, Row, Col } from 'reactstrap';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.css';
import Home from './components/home';
import Workout from './components/workout-routine';
import Oops from './components/oops';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  // const [currentTime, setCurrentTime] = useState(0);

  // useEffect(() => {
  //   fetch('/time').then(res => res.json()).then(data => {
  //     // console.log(data.time);
  //     setCurrentTime(data.time);
  //   });
  // }, []);

  return (
    <div className='App' id="bootstrap-overrides">
			<header className='App-header'>
        <div className="col-md-6">Work It</div>
			</header>
			<BrowserRouter>
				<div className='Site-content'>
					<Switch>
						<Route path='/' component={Home} exact />
						<Route path='/workout' component={Workout} exact />
						<Route component={Oops} exact />
					</Switch>
				</div>
			</BrowserRouter>
		</div>
  );
}

export default App;
