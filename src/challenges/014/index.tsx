import React, { ReactElement } from 'react';

import './014.css';

const Header: React.FC = (): ReactElement => {
	return (
		<div className='header-container'>
			<i className='fas fa-bars'></i>
		</div>
	);
};

interface timer {
	numbers: string;
}

const Timer: React.FC<timer> = ({ numbers }): ReactElement => {
	return (
		<div className='timer-container'>
			<div className='external-wheel'>
				<div className='internal-wheel'>
					<div className='numbers'>{numbers}</div>
				</div>
			</div>
		</div>
	);
};

const Footer: React.FC = (): ReactElement => {
	return (
		<div className='footer-container'>
			<div className='left-button button'>
				<i className='fas fa-square'></i>
			</div>
			<div className='right-button button'>
			<i className="fas fa-pause"></i>
			</div>
		</div>
	);
};

export const Countdown: React.FC = (): ReactElement => {
	return (
		<div className='container'>
			<Header />
			<Timer numbers='14:16' />
			<Footer />
		</div>
	);
};

export default Countdown;
