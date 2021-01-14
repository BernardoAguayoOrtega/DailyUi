import React, { ReactElement } from 'react';

import './017.css';

const Header: React.FC = (): ReactElement => {
	return (
		<div className='header'>
			<figure>
				<img src='https://images.unsplash.com/photo-1594224457860-23bdb45f8e3d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8N3x8Y2hhaXJ8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' alt='chair' />
			</figure>
			<div className='header-data'>Lorem ipsum dolor sit amet.</div>
		</div>
	);
};

const Info: React.FC = (): ReactElement => {
	return <div className='header'>IM Info</div>;
};

const Footer: React.FC = (): ReactElement => {
	return <div className='header'>IM the Footer</div>;
};

export const EmailReceipt: React.FC = (): ReactElement => {
	return (
		<div className='container'>
			<Header />
			<Info />
			<Footer />
		</div>
	);
};

export default EmailReceipt;
