import React, { ReactElement } from 'react';

import './013.css';

interface headerInterface {
	name: string;
}

const Header: React.FC<headerInterface> = ({ name }): ReactElement => {
	return (
		<div className='header-container'>
			<div className='left-side'>
				<i className='fas fa-chevron-left' />
				<div className='avatar' />
				<p className='name'>{name}</p>
			</div>
			<div className='right-side'></div>
		</div>
	);
};

const Content: React.FC = (): ReactElement => {
	return (
		<div className='content-container'>
			<img src='' alt='' />
		</div>
	);
};

export const Footer: React.FC = (): ReactElement => {
	return <div className='footer'>footer</div>;
};

export const DirectMessage: React.FC = (): ReactElement => {
	return (
		<div className='container'>
			<Header name='Alexa' />
			<Content />
			<Footer />
		</div>
	);
};

export default DirectMessage;
