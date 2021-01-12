import React, { ReactElement, useState } from 'react';

import './015.css';

export const OnOff: React.FC = (): ReactElement => {

	const [isSelected, setIsSelected] = useState(false)

	return (
		<div className={`container ${isSelected ? 'on' : ''}`}>
			<div className='up'>
				<h2>Living Room</h2>
				<div className='up-sub-container'>
					<hr />
					<p>off</p>
				</div>
			</div>
			<div className='down'>
				<label className='switch'>
					<input onClick={() => setIsSelected(value => !value)} type='checkbox' />
					<span className='slider round'></span>
				</label>
			</div>
		</div>
	);
};

export default OnOff;
