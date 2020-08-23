import React, { PureComponent } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { SignUp } from './SignUp';

class router extends Component {
	render() {
		return (
			<div>
				<Switch>
					<Route path="/" exact render={() => SignUp} />
				</Switch>
			</div>
		);
	}
}

export default router;
