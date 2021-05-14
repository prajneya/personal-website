import React, { Component } from 'react';

import './Sidebar.css';

class Sidebar extends Component {
	render() {

		return (
			<>
				<div className="no-scroll sidebar">
					<div className="my-5 sidebar-item color-special">
						BLOG
					</div>
					<div className="my-5 sidebar-item color-inactive">
						WORK & EXPERIENCE
					</div>
					<div className="my-5 sidebar-item color-inactive">
						RESEARCH & STUDY
					</div>
					<div className="my-5 sidebar-item color-inactive">
						COOL PROJECTS
					</div>
					<div className="my-5 sidebar-item color-inactive">
						REACH OUT
					</div>
					<div className="my-5 sidebar-item color-inactive">
						SKILLS
					</div>
				</div>
			</>

		)
	}
}

export default Sidebar;