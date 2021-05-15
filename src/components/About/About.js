import React, { Component } from 'react';

import './About.css';

class About extends Component {
	render() {

		return (
			<>
				<div className="main-content">
					<div className="subtitle-heading">WELCOME TO THE WEBSITE OF</div>
					<div className="hero-heading">pra<span className="color-inactive">jn</span>eya kumar</div>
					<div className="description my-5">
						Hi. I am Prajneya Kumar, a <span className="color-highlight">junior</span> at <span className="color-highlight">IIIT, Hyderabad</span> pursuing <span className="color-highlight">Masters by Research</span> in <span className="color-highlight">Computational Linguistics</span> and Bachelors in <span className="color-highlight">Computer Science</span>.

						<br/><br/>
						I currently work at the <span className="color-highlight">Cognitive Science Lab</span> studying varying brain patterns in humans according to the languages they speak. 
						<br/><br/>
						I love designing and developing beautiful websites(as this one, :P). I am amazing at singing and can play the guitar and the piano. I love travelling and playing video games. Check out my <span className="color-highlight">blog</span> and <span className="color-highlight">project</span> sections for cool stuff.
					</div>
				</div>
			</>

		)
	}
}

export default About;