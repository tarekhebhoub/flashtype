import React from 'react'
import './TypingChallengeContainer.css'
import ChallengeDetailsCard from './../ChallengeDetailsCard/ChallengeDetailsCard'
import TypingChanllenge from './../TypingChanllenge/TypingChanllenge'

const TypingChallengeContainer=(props)=>{
	return(
		<div className="typing-challenge-container">
			{/*Detail Section*/}
			<div className="details-container">
				{/*Words Typed*/}
				<ChallengeDetailsCard CardName="Words" CardValue={props.words}/>
				{/*Characters Typed*/}
				<ChallengeDetailsCard CardName="Characters" CardValue={props.characters}/>
				{/*Speed*/}
				<ChallengeDetailsCard CardName="Speed" CardValue={props.wpm}/>
			</div>
			{/*The Real Challenge*/}
			<div className="typewriter-container">
				<TypingChanllenge 
					selectedParagraph={props.selectedParagraph}
					timeRemaining={props.timeRemaining}
					timerStarted={props.timerStarted}
					testInfo={props.testInfo}
					handleUserInput={props.handleUserInput}
				/>
			</div>
		</div>
	)
}

export default TypingChallengeContainer;