import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import MainPage from './views/MainPage';

export default function Routes() {
	return (
		<Router>
			<Switch>
				<Route exact path='/'>
					<MainPage />
				</Route>
			</Switch>
		</Router>
	);
}

