import React, { JSXElementConstructor, ReactElement, ReactNode } from 'react';
import './027.css';

const Header: React.FC = (): ReactElement => {
	return (
		<div className='header'>
			<div className='links'>
				<p className='link'>Envelope</p>
				<p className='link'>Services</p>
				<p className='link'>Location</p>
			</div>
			<div className='menu-container'>
				<p className='menu'>menu</p>
			</div>
		</div>
	);
};

interface layoutInterface {
	children: ReactElement<any, string | JSXElementConstructor<any>>[] & ReactNode;
}

const Layout: React.FC<layoutInterface> = ({ children }): ReactElement => {
	return(
		<>
			{children}
		</>
	);
};

const Greet: React.FC = (): ReactElement => {
	return (
		<div className='greet-container'>
			<div className='greet-text'>
				<h1>Hello from</h1>
				<h2>Paris</h2>
			</div>
			<div className='greet-image'>
				<figure>
					<img src='' alt='' />
				</figure>
			</div>
		</div>
	);
};

const PostCardForm: React.FC = (): ReactElement => {
	return (
		<>
			<h1>Postcard</h1>
			<input type='text' placeholder='E-mail' />
			<input type='text' placeholder='Message' />
			<button>Send</button>
		</>
	);
};

export const Subscribe: React.FC = (): ReactElement => {
	return (
		<div className='container'>
			<Header />
			<Layout>
				<Greet />
				<PostCardForm />
			</Layout>
		</div>
	);
};
export default Subscribe;
