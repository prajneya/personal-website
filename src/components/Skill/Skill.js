import React, { Component } from 'react';
import { skill_list } from './../../content/Skills.js';

import './Skill.css';

class ReachOut extends Component {

	render() {

		return (
			<>
				<div className="topic-content">
					<div className="subtopic-heading">flex</div>
					<hr />
					<div className="category my-5">PROGRAMMING AND SCRIPTING</div>
					<div className="my-5 px-3 all-skills">
						{skill_list.filter((skill) => {return skill.category === "programming"}).map(item => (
							<div className="mx-3 skill-item">
								<img src={"images/"+item['skill']+".png"} alt="skill"/>
								<div className="my-2 text-center">{item['skill']}</div>
							</div>
						))}
					</div>
					<div className="category my-5">FRAMEWORKS AND DEV ENVIRONMENTS</div>
					<div className="my-5 px-3 all-skills">
						{skill_list.filter((skill) => {return skill.category === "frameworks"}).map(item => (
							<div className="mx-3 skill-item">
								<img src={"images/"+item['skill']+".png"} alt="skill"/>
								<div className="my-2 text-center">{item['skill']}</div>
							</div>
						))}
					</div>
					<div className="category my-5">DATA STREAMING, STORAGE, MISC.</div>
					<div className="my-5 px-3 all-skills">
						{skill_list.filter((skill) => {return skill.category === "data"}).map(item => (
							<div className="mx-3 skill-item">
								<img src={"images/"+item['skill']+".png"} alt="skill"/>
								<div className="my-2 text-center">{item['skill']}</div>
							</div>
						))}
					</div>
					<div className="subtopic-heading">interests</div>
					<hr />
					<div className="my-5 px-3 all-skills text-center">
						{skill_list.filter((skill) => {return skill.category === "interest"}).map(item => (
							<div className="mx-5 d-inline-block">
								<div className="my-3 hobby-item text-center">
									<img src={"images/"+item['skill']+".png"} alt="skill"/>
									<div className="my-2 text-center">{item['skill']}</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</>

		)
	}
}

export default ReachOut;