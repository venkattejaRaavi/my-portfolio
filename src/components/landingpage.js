import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class LandingPage extends Component {
	render() {
		return (
			<div style={{ width: '100%', margin: 'auto' }}>
				<Grid className="landing-grid">
					<Cell col={12}>
						<img
							src="https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png"
							alt="avatar"
							className="avatar-img"
						/>
					</Cell>
					<div className="banner-text">
						<h1>Full Stack Web Developer</h1>
						<hr />
						<p>Python3 | Flask | Django | ReactJS | MongoDB | Deep Learning | Tensorflow | Terraforms</p>
						<div className="social-links">
							{/*Linkedin*/}
							<a href="http://google.com" rel="noopener noreferrer" target="_blank">
								<i className="fa fa-linkedin-square" aria-hidden="true" />
							</a>
							{/*Github*/}
							<a href="http://google.com" rel="noopener noreferrer" target="_blank">
								<i className="fa fa-github" aria-hidden="true" />
							</a>
							{/*Stackoverflow*/}
							<a href="http://google.com" rel="noopener noreferrer" target="_blank">
								<i className="fa fa-stack-overflow" aria-hidden="true" />
							</a>
							{/*instagram*/}
							<a href="http://google.com" rel="noopener noreferrer" target="_blank">
								<i className="fa fa-instagram" aria-hidden="true" />
							</a>
						</div>
					</div>
				</Grid>
			</div>
		);
	}
}

export default LandingPage;
