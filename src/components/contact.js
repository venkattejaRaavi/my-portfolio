import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
class Contact extends Component {
	render() {
		return (
			<div className="contact-body">
				<Grid className="contact-grid">
					<Cell cols={6}>
						<h2>Venkat teja Ravi</h2>
						<img
							src="https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png"
							alt="avatar"
							style={{ height: '250px' }}
						/>
						<p style={{ width: '75%', margin: 'auto', paddingTop: '1em' }}>
							Mollit nulla laboris est incididunt nisi ex laborum id elit veniam. Ea proident ipsum sunt
							proident. Dolore irure in ex ad ex sunt tempor ad ex consequat adipisicing enim incididunt.
							Amet in nulla cupidatat Lorem consectetur ex laborum eu qui Lorem id duis eiusmod. Voluptate
							cillum sunt id culpa consectetur eu reprehenderit esse ea consequat amet sunt minim qui.
							Ullamco elit irure est pariatur excepteur sint consectetur proident enim mollit ad labore.
						</p>
					</Cell>
					<Cell cols={6}>
						<h2>Contact Me</h2>
						<hr />
						<div className="contact-list">
							<List>
								<ListItem>
									<ListItemContent style={{ fontSize: '25px', fontFamily: 'Anton' }}>
										<i className="fa fa-phone-square" aria-hidden="true" />
										+91 7013340028
									</ListItemContent>
								</ListItem>
								<ListItem>
									<ListItemContent style={{ fontSize: '25px', fontFamily: 'Anton' }}>
										<i className="fa fa-fax" aria-hidden="true" />
										+91 7013340028
									</ListItemContent>
								</ListItem>
								<ListItem>
									<ListItemContent style={{ fontSize: '25px', fontFamily: 'Anton' }}>
										<i
											className="fa fa-envelope"
											style={{ paddingRight: '18rem' }}
											aria-hidden="true"
										/>
										venkatteja.ravi@gmail.com
									</ListItemContent>
								</ListItem>
								<ListItem>
									<ListItemContent style={{ fontSize: '25px', fontFamily: 'Anton' }}>
										<i className="fa fa-skype" aria-hidden="true" />
										+91 7013340028
									</ListItemContent>
								</ListItem>
							</List>
						</div>
					</Cell>
				</Grid>
			</div>
		);
	}
}

export default Contact;
