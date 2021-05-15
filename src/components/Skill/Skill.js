import React, { Component } from 'react';

import './Skill.css'

class ReachOut extends Component {
	render() {

		return (
			<>
				<div className="topic-content">
					<div className="subtopic-heading">flex</div>
					<hr />
					<div className="category my-5">PROGRAMMING AND SCRIPTING</div>
					<div className="my-5 px-3 all-skills">
						<div className="skill-item">
							<img src="images/c++.png" alt="skill"/>
							<div className="my-2 text-center">C++</div>
						</div>
					</div>
					<div className="category my-5">FRAMEWORKS AND DEV ENVIRONMENTS</div>
					<div className="my-5 px-3 all-skills">
						<div className="skill-item">
							<img src="images/c++.png" alt="skill"/>
							<div className="my-2 text-center">C++</div>
						</div>
					</div>
					<div className="category my-5">DATA STREAMING, STORAGE, MISC.</div>
					<div className="my-5 px-3 all-skills">
						<div className="skill-item">
							<img src="images/c++.png" alt="skill"/>
							<div className="my-2 text-center">C++</div>
						</div>
					</div>
				</div>
			</>

		)
	}
}

export default ReachOut;