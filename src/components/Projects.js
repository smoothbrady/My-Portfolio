import React from 'react'
import {  Image,  Segment, Header, Card, Button } from 'semantic-ui-react'



const Projects = ()=> {

	const projects = [
		{
			header: 'LetsTalk',
			description:"A Fully functioning React app. Alllowing users to communicate via text, calls, and voice notes. User will be able to create an account and be able to find friends! As well as having the capability to send texts, pictures, and videos.",
			meta:'React Native and CSS',
			image:"LetsTalk.jpeg",
			href: '',
			signIn: ''
			
		},
		{
			header: 'Sportz App',
			description:"A fullstack application that allows useer to stay up to date with their favorite team or any team from NFL, NBA, NHL, MLB, NCAAF, and NCAAB. Within this app the user will recieve live scores, matchups, and odds",
			meta:'Express, MongoDB, Node.js, Axios, Mongoose, React',
			image:"sportz.png",
			href: '',
			signIn: 'Username: b@b.com Password: b'
			
		},


	]
	
 const projectCards = projects.map(project =>(
	<Card key={project.header}>
	
			<Image src={`${process.env.PUBLIC_URL}/images/${project.image}`} wrapped ui={false}/>
	
		<Card.Content>
		
		
		<Card.Header size='huge'>{project.header}</Card.Header>
		<Card.Meta>{project.meta}</Card.Meta>
		<Card.Description>{project.description}</Card.Description><br></br>
		<Card.Meta>{project.signIn}</Card.Meta>
		</Card.Content>
		<Card.Content extra className='ui one button'>
		<a
			href={project.href}
			target='_blank'
			rel="noreferrer"
			aria-label={project.header}
			
		>
			{project.header==='	'?<Button disabled="" basic color='purple'>Live Site Coming Soon Check Out The Code On Github</Button>
			:
				<Button basic color='red'>Come Check It Out!</Button>
			} 
		
			</a>
		
		</Card.Content>
	</Card>

 ))
	return(
		<div>
			<Segment fluid style={{ padding: '5em', marginBottom:'3em' }} verticalAlign='justify' color='brown'>
				<Header size='huge' textAlign='center' color='brown'> My Projects!</Header>
				<Card.Group  centered stackable itemsPerRow={2} >
					{projectCards}
				</Card.Group>
			</Segment>
		</div>
	)
}

export default Projects