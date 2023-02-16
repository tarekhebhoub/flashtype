import React from 'react'
import './TryAgain.css'

const TryAgain=(props)=>{
	return(
		<div className="try-again-container">
			<h1>Test Results</h1>
			<div className="result-container">
				<p>
					<b>Characters: </b>{props.characters}
				</p>
				<p>
					<b>Words: </b>{props.words}
				</p>
				<p>
					<b>Speed: </b>{props.wpm} wpm
				</p>
			</div>
			<div>
				<button className="end-buttons start-again-btn" onClick={props.refresh}>Try Again</button>
				<button className="end-buttons share-btn" onClick={()=>{
					window.open(
						"https://www.facebook.com/sharer/sharer.php?u=github.com/tarekhebhoub",
						"facebook-share-dialig",
						"width=800,height=600"
						)
				}}>Share</button>
				<button className="end-buttons tweet-btn" onClick={()=>{
					window.open(
						"https://www.twitter.com.intent/tweet?text=github.com/tarekhebhoub",
						"Twitter",
						"width=800,height=600"
					)
				}}>Tweet</button>
			</div>
		</div>
	)
}

export default TryAgain;