import React, { Component } from 'react';

import './Experience.css';

class Experience extends Component {
	render() {

		return (
			<>
				<div className="topic-content">
					<div className="subtopic-heading">been there. done that.</div>
					<hr />
					<div className="my-5 px-3">
						<div className="row">
							<div className="col-lg-6">
								<img src="" alt="exp"/>
							</div>
							<div className="col-lg-6">
								<div className="card-header">sample exp</div>
								<div className="m-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus erat massa, imperdiet sed fermentum ac, consectetur consequat quam.</div>
							</div>
						</div>
					</div>
				</div>
			</>

		)
	}
}

export default Experience;