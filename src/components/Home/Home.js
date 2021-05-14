import React, { Component } from 'react';

import Sidebar from './../Sidebar/Sidebar';
import About from './../About/About';

import './Home.css';

class Home extends Component {
	render() {

		return (
			<>
				<div className="row">
					<div className="col-lg-8">
						<About />
					</div>
					<div className="col-lg-4">
						<Sidebar />
					</div>
				</div>
			</>

		)
	}
}

export default Home;
