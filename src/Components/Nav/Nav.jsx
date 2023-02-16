import React from 'react'
import './Nav.css'
import logo from '../../assets/logo.png'

const Nav=()=>{
	return(
		<div className="nav-container">
			<div className="nav-left">
				<img className="flash-logo" src={logo} alt="Logo"/>
				<p className="flash-logo-text">FlashType</p>
			</div>
			<div className="nav-right">
				<a target="_blank" href="https://www.facebook.com/hebhoub.tarek.5">
					Tarek
				</a>
			</div>
		</div>
	)
}

export default Nav;