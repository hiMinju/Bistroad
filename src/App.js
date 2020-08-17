import React, { Fragment } from 'react';
import Header from './component/Header';
import InHeader from './component/InHeader';
import Footer from './component/Footer';
import Body from './component/Body';

// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Home from './routes/Home';

function App() {
	return (
		<Fragment>
			<div>
				<Header />
				<InHeader />
			</div>
			<div>
				<Body />
			</div>
			<div />
			{/* <Router>
				<div>
					<Switch>
						<Route exact path="/" component={Home} />
						// 추가
					</Switch>
				</div>
			</Router> */}
			<div>
				<Footer />
			</div>
		</Fragment>
	);
}

export default App;
