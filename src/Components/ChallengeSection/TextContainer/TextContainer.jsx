import React from 'react'
import './TextContainer.css'
import TryAgain from './../TryAgain/TryAgain'
import TypingChallengeContainer from './../TypingChallengeContainer/TypingChallengeContainer'

const TextContainer=(props)=>{
	return(
		<div className="text-container">
			{
				props.timeRemaining>0 ? (
						<div data-aos="fade-up" className="typing-challenge-cont">
							< TypingChallengeContainer
								selectedParagraph={props.selectedParagraph}
								timeRemaining={props.timeRemaining}
								timerStarted={props.timerStarted}
								words={props.words}
								characters={props.characters}
								wpm={props.wpm}
								testInfo={props.testInfo}
								handleUserInput={props.handleUserInput}
								/>
						</div>
					
				):(
					<div className="try-again-cont">
						<TryAgain refresh={props.refresh} words={props.words} characters={props.characters} wpm={props.wpm} />
					</div>
				)
			}	
		</div>
		
	)
}

export default TextContainer;