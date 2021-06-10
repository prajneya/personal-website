import React, { Component } from 'react';
import { Link } from "react-router-dom";

import './Sidebar.css';

class Sidebar extends Component {
	render(props) {

		return (
			<>
				<div className="no-scroll sidebar">
					{this.props.name === "blog" ? 
					<div className="my-5 sidebar-item color-active">
						BLOG
					</div> :
					<Link to="/blog">
					<div className="my-5 sidebar-item color-special">
						BLOG
					</div>
					</Link> }
					{/*{this.props.name === "work" ? 
					<div className="my-5 sidebar-item color-active">
						WORK & EXPERIENCE
					</div>  :
					<Link to="/work">
					<div className="my-5 sidebar-item color-inactive">
						WORK & EXPERIENCE
					</div> 
					</Link> }*/}
					{this.props.name === "study" ? 
					<div className="my-5 sidebar-item color-active">
						RESEARCH & STUDY
					</div> :
					<Link to="/study">
					<div className="my-5 sidebar-item color-inactive">
						RESEARCH & STUDY
					</div> 
					</Link> }
					{this.props.name === "projects" ? 
					<div className="my-5 sidebar-item color-active">
						COOL PROJECTS
					</div> :
					<Link to="/projects">
					<div className="my-5 sidebar-item color-inactive">
						COOL PROJECTS
					</div> 
					</Link> }
					{this.props.name === "contact" ? 
					<div className="my-5 sidebar-item color-active">
						REACH OUT
					</div> :
					<Link to="/contact">
					<div className="my-5 sidebar-item color-inactive">
						REACH OUT
					</div>
					</Link> }
					{this.props.name === "skills" ? 
					<div className="my-5 sidebar-item color-active">
						SKILLS & INTERESTS
					</div> :
					<Link to="/skills">
					<div className="my-5 sidebar-item color-inactive">
						SKILLS & INTERESTS
					</div>
					</Link> }
				</div>
			</>

		)
	}
}

export default Sidebar;