import { useState } from 'react';
import './App.css';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import Login from './pages/Login';
import Home from './pages/Home';

function App() {
	return (
		<Router>
			<main>
				<Switch>
					<Route exact path='/' component={Home} />
					<Route exact path='/login' component={Login} />
				</Switch>
			</main>
		</Router>
	);
}

export default App;
