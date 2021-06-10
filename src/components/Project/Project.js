import React, { Component } from 'react';

class Project extends Component {
	render() {

		return (
			<>
				<div className="topic-content">
					<div className="subtopic-heading">jarvis, fire up.</div>
					<hr />
					<div className="my-5 px-3">
						A collection of cool things I learnt to build.
						<br/><br/>

						You can also have a look at my <a href="/blog"><span className="color-highlight">blogs</span></a> and the <a href="/study"><span className="color-highlight">problems</span></a> I’m working on.
					</div>
					<div className="m-3">
						<div className="my-2 frosted-glass-card">
							<a href="http://dumbgamer.com" target="#"><div className="mb-4 card-header">dumbgamer.com</div></a>
							<div className="m-3 card-detail">A social gaming platform where you can play multiple games with your friends; especially the classic party game: Mafia. Click on learn more to visit the website.</div>
							<a href="http://dumbgamer.com" target="#"><button className="learn-more btn btn-dark">Learn more</button></a>
						</div>
						<div className="my-2 frosted-glass-card">
							<a href="http://peersity.in" target="#"><div className="mb-4 card-header">peersity.in</div></a>
							<div className="m-3 card-detail">A full stack Social Networking platform, built exclusively for IIIT-H Students. Click on learn more to visit the website.</div>
							<a href="http://peersity.in" target="#"><button className="learn-more btn btn-dark">Learn more</button></a>
						</div>
						<div className="my-2 frosted-glass-card">
							<div className="mb-4 card-header">brickbreaker</div>
							<div className="m-3 card-detail">A game that can be played on the Terminal based on the classic DX-Ball Game. Built using Python3 </div>
							<a href="https://github.com/prajneya/brickgame" target="#"><button className="learn-more btn btn-dark">Learn more</button></a>
						</div>
						<div className="my-2 frosted-glass-card">
							<div className="mb-4 card-header">confessions generator</div>
							<div className="m-3 card-detail">Web App that generates a sarcastic / humurous confession which is often seen in confession pages of undergraduate colleges. </div>
							<a href="https://prajneya.github.io/Confessions-Generator/" target="#"><button className="learn-more btn btn-dark">Learn more</button></a>
						</div>
						<div className="my-2 frosted-glass-card">
							<div className="mb-4 card-header">jobportal webApp</div>
							<div className="m-3 card-detail">a MERN-Stack based web application that implements a job portal deploying two kinds of users: Applicants and Recruiters </div>
						</div>
					</div>
				</div>
			</>

		)
	}
}

export default Project;