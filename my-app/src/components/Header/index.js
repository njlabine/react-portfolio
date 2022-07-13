import React, { PureComponent } from 'react'

//stylings
import Outer from './styled/Outer'
import AboutBio from './sty;ed/aboutBio'
import AboutTitle from './styled/AboutTitle'

//comps
import FancyTitle from '../../styled/FancyTitle'

export default class About extends PureComponent {
	constructor(props) {
		super(props)
		this.state ={}
	}

	getYears = () => {
		let today = new Date();
		var year = today.getFullYear();
		return year - 2022;
	}

	render() {
		let years = this.getYears();

		return (
			<Outer>
				<FancyTitle>Welcome! My name is Nate LaBine, and I want to be your next Developer!</FancyTitle>
				<AboutTitle>What do I do?</AboutTitle>
				<AboutBio>I am a full stack web developer located out of Columbus, Ohio. I am a soon to be graduate from The Ohio State's full stack bootcamp.	 
				</AboutBio>
				<AboutTitle>What do I do in my free time?</AboutTitle>
				<AboutBio>
					I have had many interesting jobs and hobbies over the years. From the time I was 18 I have been playing guitar and bass professionally in a few national touring acts.  
				</AboutBio>
				<AboutBio>
					I also enjoy quailty time with my friends and family, who are all very important to me. Ontop of being a professional musician, I have also worked in the construction field, flipping house and adding extentions to many homes in the Columbus area.
				</AboutBio>
			</Outer>
		)
	}
}
