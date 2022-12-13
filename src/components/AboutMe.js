import React from 'react';
import {Divider, Grid, Image, Segment, Header } from 'semantic-ui-react';
import Technology from './Technology';

const AboutMe = ()=> {

	return(
		<div>
	
		
		<Segment fluid style={{ padding: '3em 0em' }} vertical color='brown'>
		<Grid container stackable verticalAlign='middle'>
			<Grid.Row>
			<Grid.Column width={8}>
				<Header as='h1' style={{ fontSize: '2em' }}>
				About Me
				</Header>
				<p style={{ fontSize: '1.33em' }}>
				I am a Software Engineer that has a history in the medical field. I have the capability to adapt in any enviroment, and fullfill any poisition I am needed in with the best of my ability.

				Having a(n) history in the medical field has given me the resources to work quick and efficiently under in circumstances with indivualds around me. Giving me the access to break down problems, figure out the problem, and create the best solution moving forward.
				</p>
				
				
			</Grid.Column>
			<Grid.Column floated='right' width={6}>
				<Image bordered rounded size='large' src={`${process.env.PUBLIC_URL}/images/profile.JPG`}/>
			</Grid.Column>
			</Grid.Row>
			
		</Grid>
		</Segment>
		
	</div>

	)
}

export default AboutMe