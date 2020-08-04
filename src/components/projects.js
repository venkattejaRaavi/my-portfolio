import React, { Component } from 'react';
import { Tab, Tabs, Grid, Cell, Card, CardTitle, CardText, CardMenu, CardActions, Button, IconButton } from 'react-mdl';

class Projects extends Component {
	constructor(props) {
		super(props);
		this.state = { activeTab: 0 };
	}

	toggleCategories = () => {
		switch (this.state.activeTab) {
			case 0:
				return (
					<div className="projects-grid">
						{/* project 1*/}
						<Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
							<CardTitle
								style={{
									color: 'black',
									height: '176px',
									background:
										'url(https://www.python.org/static/opengraph-icon-200x200.png) center / cover'
								}}
							>
								Python3 Project #1
							</CardTitle>
							<CardText>This is a dummy Python3 Project. That This text can be replaced.</CardText>
							<CardActions border>
								<Button border>Github</Button>
								<Button border>CodePen</Button>
								<Button border>LiveDemo</Button>
							</CardActions>
							<CardMenu style={{ color: 'black' }}>
								<IconButton name="share" />
							</CardMenu>
						</Card>
						{/* project 2*/}
						<Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
							<CardTitle
								style={{
									color: 'black',
									height: '176px',
									background:
										'url(https://www.python.org/static/opengraph-icon-200x200.png) center / cover'
								}}
							>
								Python3 Project #2
							</CardTitle>
							<CardText>This is a dummy Python3 Project. That This text can be replaced.</CardText>
							<CardActions border>
								<Button border>Github</Button>
								<Button border>CodePen</Button>
								<Button border>LiveDemo</Button>
							</CardActions>
							<CardMenu style={{ color: 'black' }}>
								<IconButton name="share" />
							</CardMenu>
						</Card>
						{/* project 3*/}
						<Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
							<CardTitle
								style={{
									color: 'black',
									height: '176px',
									background:
										'url(https://www.python.org/static/opengraph-icon-200x200.png) center / cover'
								}}
							>
								Python3 Project #3
							</CardTitle>
							<CardText>This is a dummy Python3 Project. That This text can be replaced.</CardText>
							<CardActions border>
								<Button border>Github</Button>
								<Button border>CodePen</Button>
								<Button border>LiveDemo</Button>
							</CardActions>
							<CardMenu style={{ color: 'black' }}>
								<IconButton name="share" />
							</CardMenu>
						</Card>
					</div>
				);
			case 1:
				return (
					<div>
						<h1>ReactJs Projects</h1>
					</div>
				);
			case 2:
				return (
					<div>
						<h1>Deep Learning Projects</h1>
					</div>
				);
			case 3:
				return (
					<div>
						<h1>Terraforms Projects</h1>
					</div>
				);
			default:
				return <div />;
		}
	};
	render() {
		return (
			<div className="category-tabs">
				<Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
					<Tab>Python3</Tab>
					<Tab>ReactJs</Tab>
					<Tab>DeepLearning</Tab>
					<Tab>Terraforms</Tab>
				</Tabs>
				<Grid>
					<Cell col={12}>
						<div className="content">{this.toggleCategories()}</div>
					</Cell>
				</Grid>
			</div>
		);
	}
}

export default Projects;
