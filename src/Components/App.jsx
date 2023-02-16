import React from 'react'
import './App.css'
import Landing from './Landing/Landing'
import Nav from './Nav/Nav'
import Footer from './Footer/Footer'
import ChallengeSection from './ChallengeSection/ChallengeSection'
import {SAMPLE_PARAGRAPHS} from './../data/SampleParagraph'

const TotalTime=60;
const ServiceUrl="http://metaphorpsum.com/paragraphs/1/5"
const defaultState={
		selectedParagraph:"Hello World!",
		timeRemaining:TotalTime,
		timerStarted:false,
		words:0,
		characters:0,
		wpm:0,
		testInfo:[]
	}
class App extends React.Component{
	state=defaultState;
	fetchParagraphFallBack=()=>{
		const data=SAMPLE_PARAGRAPHS[
			Math.floor(Math.random()*SAMPLE_PARAGRAPHS.length)
		]
		const selectedParagraphArray=data.split("")
			const testInfo=selectedParagraphArray.map(character=>{
			return({
				testLetter:character,
				status:"notAttempted"
			})
		})
		this.setState({...defaultState,testInfo,selectedParagraph:data})
		
	}
	fetchParagraph=()=>{
		fetch(ServiceUrl)
		.then(response=>response.text())
		.then(data=>{
			const selectedParagraphArray=data.split("")
			const testInfo=selectedParagraphArray.map(character=>{
			return({
				testLetter:character,
				status:"notAttempted"
			})
		})
		this.setState({...defaultState,testInfo,selectedParagraph:data})
		})
	}
	componentDidMount(){
		this.fetchParagraph()
		
	}	
	startTimer=()=>{
		this.setState({timerStarted:true})
		const timer=setInterval(()=>{
			if(this.state.timeRemaining>0){
				const timeCount=TotalTime-this.state.timeRemaining;
				let wpm=0;
				if(timeCount!==0){
					wpm=(this.state.words/timeCount)*TotalTime	
				}
				
				this.setState({
					timeRemaining:this.state.timeRemaining-1,
					wpm:parseInt(wpm)
				})	
			}else{
				clearInterval(timer);
			}
			
		},1000)
	}

	handleUserInput=(inputValue)=>{
		if(!this.state.timerStarted){this.startTimer()}
		const characters=inputValue.length;
		const words=inputValue.split(" ").length;
		const index=characters-1;
		if(index<0){
			this.setState({
				testInfo:[
					{
						testLetter:this.state.testInfo[0].testLetter,
						status:"notAttempted"
					},
					...this.state.testInfo.slice(1),
				],
				characters,
				words
			});
			return;
		}

		if (index>=this.state.selectedParagraph.length){
			this.setState({characters,words});
			return;
		}

		//Make a copy of testInfo
		const testInfo=this.state.testInfo;
		console.log(testInfo)
		if(!(index===this.state.selectedParagraph.length-1))
			testInfo[index+1].status="notAttempted"
		const isCorrect=inputValue[index]===testInfo[index].testLetter;
		//Update the testInfo
		testInfo[index].status=isCorrect?"correct":"incorrect"

		//update the state

		this.setState({
			testInfo,
			characters,
			words
		})
	}
	refresh=()=>{
		this.fetchParagraph()
	}
	render(){
		return(
			<div className="App">
				{/*Nav Section*/}
				<Nav />
				{/*Landing Page*/}
				<Landing />
				{/*Challenge Section*/}
				<ChallengeSection
					selectedParagraph={this.state.selectedParagraph}
					timeRemaining={this.state.timeRemaining}
					timerStarted={this.state.timerStarted}
					words={this.state.words}
					characters={this.state.characters}
					wpm={this.state.wpm}
					testInfo={this.state.testInfo}
					handleUserInput={this.handleUserInput}
					refresh={this.refresh}
				/>
				{/*Footer*/}
				<Footer />
			</div>
		)
	}
}

export default App;