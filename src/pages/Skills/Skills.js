import React, { Component } from 'react';
import { Link } from "react-router-dom";

import Sidebar from './../../components/Sidebar/Sidebar';
import Skill from './../../components/Skill/Skill';

class Skills extends Component {
	render() {

		return (
			<>
				<Link to="/"><button className="cta-button btn-dark px-3 py-2">Home</button></Link>
				<div className="row">
					<div className="col-lg-8">
						<Skill />
					</div>
					<div className="col-lg-4">
						<Sidebar name="skills" />
					</div>
				</div>
			</>

		)
	}
}

export default Skills;
