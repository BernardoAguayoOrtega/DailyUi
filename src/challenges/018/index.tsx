import React, { ReactElement } from 'react';

import './018.css';

const Content: React.FC = (): ReactElement => {
	return (
		<div className='content-container'>
			<div className='chart'>
				<p className='chart-content'>4,4</p>
			</div>
			<div className='content-info'>Radial chart (dark)</div>
		</div>
	);
};

const Data: React.FC = (): ReactElement => {
	return (
		<div className='data-container'>
			<div className='side'>
				<div className='up'>78,2%</div>
				<div className='down'>item</div>
			</div>
			<div className='side'>
				<div className='up'>21,8%</div>
				<div className='down'>item</div>
			</div>
		</div>
	);
};

export const Chart: React.FC = (): ReactElement => {
	return (
		<div className='container'>
			<Content />
			<Data />
		</div>
	);
};

export default Chart;
