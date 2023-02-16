import React from 'react'
import './ChallengeDetailsCard.css'

const ChallengeDetailsCard=(props)=>{
	return(
		<div className="details-card-container">
			<div className="card-name">{props.CardName}</div>
			<div className="card-value">{props.CardValue}</div>
		</div>
	)
}
export default ChallengeDetailsCard;