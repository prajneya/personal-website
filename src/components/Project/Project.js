import React, { Component } from 'react';

class Project extends Component {
	render() {

		return (
			<>
				<div className="topic-content">
					<div className="subtopic-heading">jarvis, fire up.</div>
					<hr />
					<div className="my-5 px-3">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus erat massa, imperdiet sed fermentum ac, consectetur consequat quam.
						<br/><br/>

						You can also have a look at my <span className="color-highlight">blogs</span> and the <span className="color-highlight">projects</span> I’m working on.
					</div>
					<div className="m-3">
						<div className="my-2 frosted-glass-card">
							<div className="mb-4 card-header">dumbgames</div>
							<div className="m-3 card-detail">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus erat massa, imperdiet sed fermentum ac, consectetur consequat quam.</div>
							<button className="learn-more btn btn-dark">Learn more</button>
						</div>
						<div className="my-2 frosted-glass-card">
							<div className="mb-4 card-header">peersity</div>
							<div className="m-3 card-detail">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus erat massa, imperdiet sed fermentum ac, consectetur consequat quam.</div>
							<button className="learn-more btn btn-dark">Learn more</button>
						</div>
					</div>
				</div>
			</>

		)
	}
}

export default Project;