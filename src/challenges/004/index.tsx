import React, { ReactElement } from 'react';
import './004.css';

const Header: React.FC = (): ReactElement => {

	return(
		<header>
			<i>=</i>
			<p>Calculator</p>
			<i>x</i>
		</header>
	)
}

const Screen: React.FC = (): ReactElement => {

	return(
		<div className="screen">
		</div>
	)
}

const Buttons: React.FC = (): ReactElement => {

	return(
		<div className="buttons">
			<a href="">c</a>
			<a href="">%</a>
			<a href="">%</a>
			<a href="">/</a>
			<a href="">7</a>
			<a href="">8</a>
			<a href="">9</a>
			<a href="">x</a>
			<a href="">4</a>
			<a href="">5</a>
			<a href="">6</a>
			<a href="">-</a>
			<a href="">1</a>
			<a href="">2</a>
			<a href="">3</a>
			<a href="">0</a>
			<a href="">.</a>
			<a href="">=</a>
			<a href="">+</a>
		</div>
	)
}

const Calculator: React.FC = (): ReactElement => {
	return (
		<div className='container'>
				<Header />
				<Screen />
				<Buttons />
		</div>
	);
};

export default Calculator;
