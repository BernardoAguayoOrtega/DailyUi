import React, { ReactElement } from 'react';
import './026.css';

const ImageContainer : React.FC = (): ReactElement => {

	return <h2>image container</h2>
}

const SubscriberContent : React.FC = (): ReactElement => {

	return <h2>SubscriberContent container</h2>
}

export const Subscribe: React.FC = (): ReactElement => {
	return (
		<div className='container'>
			<ImageContainer />
			<SubscriberContent />
		</div>
	);
};
export default Subscribe;
