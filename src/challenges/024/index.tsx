import React, { ReactElement } from 'react';
import './024.css';

const Header: React.FC = (): ReactElement => {

	return (
		<div className="header-container">
			<h2 className="neon-word">neon</h2>
			<h2>lights</h2>
		</div>
	)
}

export const BoardingPass: React.FC = (): ReactElement => {
	return (
		<div className='container'>
			<Header />
		</div>
	);
};
export default BoardingPass;
