import React, { ReactElement } from 'react';
import './028.css';


export const Subscribe: React.FC = (): ReactElement => {
	return (
		<div className='container'>
			<h2 className='title'>write us</h2>
			<form action="">
				<input type="text" placeholder="name"/>
				<input type="text" placeholder="email"/>
				<input type="text" placeholder="text" />
			</form>
			<div>send</div>
		</div>
	);
};
export default Subscribe;
