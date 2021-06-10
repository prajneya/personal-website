import React, { Component } from 'react';
import { Link } from "react-router-dom";

import Sidebar from './../../components/Sidebar/Sidebar';
import About from './../../components/About/About';

import './Home.css';

class Home extends Component {
	render() {

		return (
			<>
				{/*<Link to="/"><button className="cta-button btn-dark px-3 py-2">Login</button></Link>*/}
				<div className="row">
					<div className="col-lg-8">
						<About />
					</div>
					<div className="col-lg-4">
						<Sidebar name="home" />
					</div>
				</div>
			</>

		)
	}
}

export default Home;
