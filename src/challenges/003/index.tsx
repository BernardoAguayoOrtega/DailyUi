import React, { ReactElement } from 'react';
import './003.css';

const NavBar: React.FC = (): ReactElement => {
	
	return(
		<div className="navbar-container">
			<div className="left-side">
				Selection
			</div>
			<div className="right-side">
				<a href="/" className="features">features</a>
				<a href="/" className="why">Why Selection</a>
				<a href="/" className="pricing" >Pricing</a>
				<a href="/" className="blog">Blog</a>
				<a href="/" className="sign-up">Sign Up</a>
			</div>
		</div>
	)
}

const InfoData: React.FC = (): ReactElement => {
	return(
		<div className="info-data-container">
			<h2>Manage faster and sell more with big data</h2>
		</div>
	)
}

const SideBar: React.FC = (): ReactElement => {

	return(
		<aside className='side-bar-container'>
			<div className="number">20k</div>
			<div className="sidebar-info">Quickly integrate our solution and start processing more sales.</div>
		</aside>
	)
}

const LandingPage: React.FC = (): ReactElement => {
	return (
		<div className='container'>
			<NavBar />
			<InfoData />
			<SideBar />
		</div>
	);
};

export default LandingPage;
