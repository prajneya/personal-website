import React, { Component } from 'react';
import { Link } from "react-router-dom";

import Sidebar from './../../components/Sidebar/Sidebar';
import ReachOut from './../../components/ReachOut/ReachOut';

class Contact extends Component {
	render() {

		return (
			<>
				<Link to="/"><button className="cta-button btn-dark px-3 py-2">Home</button></Link>
				<div className="row">
					<div className="col-lg-8">
						<ReachOut />
					</div>
					<div className="col-lg-4">
						<Sidebar name="contact" />
					</div>
				</div>
			</>

		)
	}
}

export default Contact;
