import React, { Component } from 'react';
import { Link, Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import { BeforeHeader, AfterHeader } from './Header';
import InHeader from './InHeader';
import Footer from './Footer';
import Body from './Body';

class main extends Component {
	render() {
		return (
			<div>
				<header>
					<AfterHeader />
					<InHeader />
				</header>
				<main>
					<Body />

					<Footer />
				</main>
			</div>
		);
	}
}

export default main;
