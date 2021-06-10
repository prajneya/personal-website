import React, { Component } from 'react';

import './Research.css'

class Research extends Component {
	render() {

		return (
			<>
				<div className="topic-content">
					<div className="subtopic-heading">nerd alert</div>
					<hr />
					<div className="my-5 px-3">
						Here are some of the works that I have explored, mostly based on computational linguistics. This area needs to be updated.
						<br/><br/>

						You can also have a look at my <a href="/blog"><span className="color-highlight">blogs</span></a> and the <a href="/projects"><span className="color-highlight">projects</span></a> I’m working on.
					</div>
					<div className="m-3">
						<div className="my-2 frosted-glass-card">
							<div className="mb-4 card-header">chunking indian languages</div>
							<div className="m-3 card-detail">Implemented two unsupervised algorithms (kmeans and heirarchical clustering) in order to chunk sentences in the Hindi language. More details can be seen on the github repo.</div>
							
						</div>
						<div className="my-2 frosted-glass-card">
							<div className="mb-4 card-header">summarizing hindi text documents</div>
							<div className="m-3 card-detail">Implemented two extractive approaches to summarize text documents in the Hindi language. Click on Learn More to check our the Github Repo.</div>
							<a href="https://github.com/AurumnPegasus/Text-Summariser" target="#"><button className="learn-more btn btn-dark">Learn more</button></a>
						</div>
					</div>
				</div>
			</>

		)
	}
}

export default Research;