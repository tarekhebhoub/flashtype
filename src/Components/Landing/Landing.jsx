import React from 'react'
import './Landing.css'
import hero from './../../assets/hero.png'
import Typewriter from 'typewriter-effect';

const Landing=()=>{
	return(
		<div data-aos="fade-right" className="landing-container">
			<div className="landing-lerf">
				<h1 className="landing-header">Can you type ...</h1>
				<div className="typewriter-container">
					<Typewriter
					  options={{
					    strings: ['Fast?', 'Correct?','Quick?'],
					    autoStart: true,
					    loop: true,
					  }}
					/>
				</div>
			</div>
			<div className="landing-right">
				<img className="hero-img" src={hero} alt="Hero Image"/>
			</div>
		</div>
	)
}

export default Landing