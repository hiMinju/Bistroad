import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Signup from './SignUp';

class Body extends Component {
	render() {
		return (
			<Container maxWidth="sm">
				<Typography component="div" align="center" style={{ height: '100vh' }}>
					<Signup />
				</Typography>
			</Container>
		);
	}
}

export default Body;
