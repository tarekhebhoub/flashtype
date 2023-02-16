import React from 'react'
import './TypingChanllenge.css'
import TestLetter from './TestLetter/TestLetter'
 
const TypingChanllenge=(props)=>{
	return(
		<div className="typing-challenge">
			<div className="timer-container">
				<p className="timer">
					00:
					{props.timeRemaining>=10?props.timeRemaining:`0${props.timeRemaining}`}
				</p>
				<p className="timer-info">
					{!props.timerStarted?"Start typing to start the test":undefined}
					
				</p>
			</div>

			<div className="textarea-container">
				<div className="textarea-left">
					<div className="textarea test-paragraph">
						{props.testInfo.map((individualTestLetter,index)=>(
						 	<TestLetter key={index} individualTestLetter={individualTestLetter}/>
						))}
					</div>
				</div>

				<div className="textarea-right">
					<textarea onChange={(e)=>{props.handleUserInput(e.target.value)}} className="textarea" placeholder="Start typing here">
						
					</textarea>
				</div>
			</div>
		</div>
	)
}

export default TypingChanllenge;

