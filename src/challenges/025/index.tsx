import React, { ReactElement } from 'react';
import './025.css';

const Header: React.FC = (): ReactElement => {
	return (
		<header>
			<div className='logo-container'>
				<i className='fas fa-play'></i>
			</div>
			<nav>
				<ul>
					<li>
						<a href='/'>home</a>
					</li>
					<li>
						<a href='/'>movies</a>
					</li>
					<li>
						<a href='/'>tv shows</a>
					</li>
					<li>
						<a href='/'>favorite</a>
					</li>
				</ul>
			</nav>
			<div className='search-box'>
				<i className='fas fa-search'></i>
			</div>
		</header>
	);
};

const Carousel: React.FC = (): ReactElement => {
	return <div className='carousel-container'>Carousel</div>;
};

const MovieDescription: React.FC = (): ReactElement => {
	return <div className='movie-description'>movie description</div>;
};

export const BoardingPass: React.FC = (): ReactElement => {
	return (
		<div className='container'>
			<Header />
		</div>
	);
};
export default BoardingPass;
