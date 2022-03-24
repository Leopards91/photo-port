import React from 'react';

function About() {
	return (
		<section>
			<div className="center" id="about">
				<h1 className="page-header">About Me</h1>
			</div>
			<div className="center">
				<img
					src={require('../../assets/cover/portrait.jpg')}
					alt="about-me"
					className="photo"
				/>
			</div>
			<div>
				<p>
        My name is Amos Han. I am a web developer-in-training mainly interested in front-end web design work. Specifically, I currently attend the Rutgers Unviersity Coding bootcamp developing new skills including Javascript, CSS, HTML, and React.js, passionate about problem-solving.
				</p>
			</div>
		</section>
	);
}

export default About;