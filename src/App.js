import React, { Component } from 'react';
import { render } from 'react-dom';
import { Link, Switch, Route, BrowserRouter as Router } from 'react-router-dom';

import Header from './component/Header';
import InHeader from './component/InHeader';
import Footer from './component/Footer';
import Body from './component/Body';

function App() {
	return (
		<Router>
			<header>
				<Header />
				<InHeader />
			</header>
			<main>
				<Body />

				<Footer />
			</main>
		</Router>
	);
}

export default App;
