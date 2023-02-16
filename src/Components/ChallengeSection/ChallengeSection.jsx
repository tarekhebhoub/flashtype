import React from 'react'
import './ChallengeSection.css'
import TextContainer from './TextContainer/TextContainer'

const ChallengeSection=(props)=>{
	return(
		<div className="challenge-section-container">
			<h1 data-aos="fade-down" className="challenge-section-header">
				Take a Speed test now!
			</h1>
			<TextContainer 
				selectedParagraph={props.selectedParagraph}
				timeRemaining={props.timeRemaining}
				timerStarted={props.timerStarted}
				words={props.words}
				characters={props.characters}
				wpm={props.wpm}
				testInfo={props.testInfo}
				handleUserInput={props.handleUserInput}
				refresh={props.refresh}
			/>
		</div>
	)
}

export default ChallengeSection;