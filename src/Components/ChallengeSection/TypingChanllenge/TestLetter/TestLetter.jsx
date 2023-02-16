import React from 'react'
import './TestLetter.css'

const TestLetter=(props)=>{
	const {status}= props.individualTestLetter;
	const statusClass={
		correct:"test-letter-correct",
		incorrect:"test-letter-incorrect",
		notAttempted:"test-letter-not-attempted"
	}[status];
	
	/*if(status==="correct"){
		statusClass="test-letter-correct"
	}else if(status==="incorrect"){
		statusClass="test-letter-incorrect"
	}else{
		statusClass="test-letter-not-attempted"
	}*/
	return(
		<span className={`test-letter ${statusClass}`}>{props.individualTestLetter.testLetter}</span>
	)
}

export default TestLetter;