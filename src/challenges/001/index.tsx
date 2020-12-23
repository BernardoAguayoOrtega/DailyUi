import React, { ReactElement } from 'react';
import './001.css'

const SignUp: React.FC = (): ReactElement => {
	return (
		<div className='form-container'>
			<form className='form' action=''>
				<label htmlFor='size_1'>First Name</label>
				<input type='text' name='name' id='size_1' placeholder='First name' />
        <label htmlFor='size_2'>Last Name</label>
				<input type='text' name='lastName' id='size_2' placeholder='Last name' />
        <label htmlFor='size_3'>Email</label>
				<input type='Email' name='email' id='size_3' placeholder='Email' />
        <label htmlFor='size_4'>Date</label>
				<input type='date' name='date' id='size_4'/>
			</form>
		</div>
	);
};

export default SignUp;
