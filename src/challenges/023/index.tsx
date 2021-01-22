import React, { ReactElement } from 'react';
import './023.css';

const Header: React.FC = (): ReactElement => {

	return(
		<header>
			<figure>
				<img src="https://images.pexels.com/photos/1461974/pexels-photo-1461974.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt=""/>
			</figure>
		</header>
	)
}

const Content: React.FC = (): ReactElement => {

	return(
		<div className="content-container">
			<h2 className="content-title"></h2>
			<p className="content-info"></p>
			<div className="content-position">
				
			</div>
		</div>
	)
}

const Footer: React.FC = (): ReactElement => {

	return <h2>random</h2>
}

export const Onboarding: React.FC = (): ReactElement => {
	return (
		<div className='container'>
			<Header />
			<Content />
			<Footer />
		</div>
	);
};
export default Onboarding;
