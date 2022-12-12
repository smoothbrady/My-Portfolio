import React from 'react'
import {  Image,  Segment, Header, Card, Button } from 'semantic-ui-react'



const Projects = ()=> {

	const projects = [
		{
			header: 'WhatsApp',
			description:"React application for Users that want to create a login and communicate over text using messages, pictures, and videos.",
			meta:'React Native and CSS',
			image:"BamPow.png",
			href: 'https://github.com/skbarbee/django-comics',
			signIn: ''
			
		},
		{
			header: 'Sportz App',
			description:"A fullstack application that allows useer to stay up to date with their favorite team or any team from NFL, NBA, NHL, MLB, NCAAF, and NCAAB. Within this app the user will recieve live scores, matchups, and odds",
			meta:'Express, MongoDB, Node.js, Axios, Mongoose, React',
			image:"sportz.png",
			href: 'https://petplaydate.netlify.app/',
			signIn: 'Username: b@b.com Password: b'
			
		},

		{
			header:"Routine Application",
			description:"A Daily Routine Maker utilzing an Affirmation Database and WeatherAPI",
			meta:"MongoDB, Express, Node.js, and LiquidJS, BootStrap",
			image:"dailyroutine.png",
			href: "https://dailyroutine.fly.dev/",
			signIn: 'Username: User1 Password: User1',
		},

		{
			header:"Boo-p It",
			description:"Simple Boo-p it style javascript game with a Halloween theme.",
			meta:"JavaScript, HTML 5, and CSS 3",
			image:'boopIt.png',
			href:'https://skbarbee.github.io/Boo-p-it-/'
		}

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
			{project.header==='BamPow'?<Button disabled="" basic color='purple'>Live Site Coming Soon Check Out The Code On Github</Button>
			:
				<Button basic color='purple'>Check Out the Live Site</Button>
			} 
		
			</a>
		
		</Card.Content>
	</Card>

 ))
	return(
		<div>
			<Segment fluid style={{ padding: '3em', marginBottom:'2em' }} verticalAlign='justify' color='violet'>
				<Header size='huge' textAlign='center' color='violet'>Projects</Header>
				<Card.Group  centered stackable itemsPerRow={2} >
					{projectCards}
				</Card.Group>
			</Segment>
		</div>
	)
}

export default Projects