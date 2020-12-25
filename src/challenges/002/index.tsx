import React, { ReactElement } from 'react';
import './002.css';

const Checkout: React.FC = (): ReactElement => {
	return (
		<div className='card-container'>
			<form className='card-fields'>
				<div id='element1' className='element'>
					<label htmlFor='card-holder'>card holder</label>
					<input type='text' name='card-holder' className='card-holder' />
				</div>
				<div id='element2' className='element'>
					<label htmlFor='card-number'>card number</label>
					<input type='text' name='card-number' className='card-number' />
				</div>
				<div id='element3' className='element'>
					<label htmlFor='card-date'>Date</label>
					<input type='text' name='card-date' className='card-date' />
				</div>
				<div id='element4' className='element'>
					<label htmlFor='card-cvv'>card cvv</label>
					<input type='text' name='card-cvv' className='card-cvv' />
				</div>
			</form>
			<button>confirm</button>
		</div>
	);
};

export default Checkout;
