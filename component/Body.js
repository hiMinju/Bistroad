import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { Link, Switch, Route, BrowserRouter as Router } from 'react-router-dom';

import Home from './Home';
import signUp from './SignUp';
import signIn from './SignIn';
import Store from './Store';
import main from './main';

class Body extends Component {
	render() {
		return (
			<div>
				<Typography component="div" align="center" style={{ height: '100vh' }}>
					<Switch>
						<Route exact path="/" component={Home} />
						<Route path="/signUp" component={signUp} />
						<Route path="/signIn" component={signIn} />
						<Route path="/home" component={Home} />
						<Route path="/store" component={Store} />
						<Route path="/main" component={main} />
					</Switch>
				</Typography>
			</div>
		);
	}
}

export default Body;
