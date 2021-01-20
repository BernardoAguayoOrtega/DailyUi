import React, { ReactElement, ReactNode } from 'react';

import './021.css';

const Header: React.FC = (): ReactElement => {
	return (
		<div className='header'>
			<i className='fas fa-chevron-left'></i>
			<div className='title'>myHome</div>
			<i className='fas fa-cog'></i>
		</div>
	);
};

interface cardInterface {
	type: string;
	children: ReactNode;
}

const Card: React.FC<cardInterface> = ({ type, children }): ReactElement => {
	return <div className={`card-container ${type}`}>{children}</div>;
};

export const HomeMonitoringDashboard: React.FC = (): ReactElement => {
	return (
		<div className='container'>
			<Header />
			<div className='cards-section'>
				<Card type='one'>
					<h2>21</h2>
					<div className="buttons">
						<button>+</button>
						<button>-</button>
					</div>
				</Card>
			</div>
		</div>
	);
};
export default HomeMonitoringDashboard;
