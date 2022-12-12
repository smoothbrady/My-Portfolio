import React from 'react';
import {Divider, Grid, Image, Segment, Header } from 'semantic-ui-react';
import Technology from './Technology';

const AboutMe = ()=> {

	return(
		<div>
	
		
		<Segment fluid style={{ padding: '3em 0em' }} vertical color='purple'>
		<Grid container stackable verticalAlign='middle'>
			<Grid.Row>
			<Grid.Column width={8}>
				<Header as='h1' style={{ fontSize: '2em' }}>
				About Me
				</Header>
				<p style={{ fontSize: '1.33em' }}>
				I am a Software Engineer that has a history in high tempo medical field expeirence. I have the capability to adapy in any enviroment and fullfill any poisition i am needed in with the best of my ability.
				</p>
				
				
			</Grid.Column>
			<Grid.Column floated='right' width={6}>
				<Image bordered rounded size='large' src={`${process.env.PUBLIC_URL}/images/profile.jpeg`}/>
			</Grid.Column>
			</Grid.Row>
			
		</Grid>
		</Segment>
		
	</div>

	)
}

export default AboutMe