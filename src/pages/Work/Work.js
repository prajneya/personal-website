import React, { Component } from 'react';
import { Link } from "react-router-dom";

import Sidebar from './../../components/Sidebar/Sidebar';
import Experience from './../../components/Experience/Experience';

import './Work.css';

class Work extends Component {
	render() {

		return (
			<>
				<Link to="/"><button className="cta-button btn-dark px-3 py-2">Home</button></Link>
				<div className="row">
					<div className="col-lg-8">
						<Experience />
					</div>
					<div className="col-lg-4">
						<Sidebar name="work" />
					</div>
				</div>
			</>

		)
	}
}

export default Work;
