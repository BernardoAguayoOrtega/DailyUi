import react from 'react';
import React, { ReactElement } from 'react';
import './029.css';

interface headerInterface {
	title: string;
}

const Header: React.FC<headerInterface> = ({ title }): ReactElement => {
	return (
		<header>
			<h2>{title}</h2>
			<i className='fas fa-globe'></i>
		</header>
	);
};

const Carousel: React.FC = (): ReactElement => {
	return <div className='carousel'></div>;
};

const CarouselItem: React.FC = (): ReactElement => {
	return <div className='carousel-item'></div>;
};

const Options: React.FC = (): ReactElement => {
	return <div className='options'></div>;
};

interface optionInterface {
	logo: ReactElement;
	mainText: string;
	secondaryText: string;
}

const Option: React.FC<optionInterface> = ({
	logo,
	mainText,
	secondaryText,
}): ReactElement => {
	return (
		<div className='option'>
			<div className='logo'>{logo}</div>
			<div className='main-text'>{mainText}</div>
			<div className='secondary-text'>{secondaryText}</div>
		</div>
	);
};

interface footerInterface {
	content: ReactElement;
}

const Footer: React.FC<footerInterface> = ({ content }): ReactElement => {
	return <footer>{content}</footer>;
};

interface buttonInterface {
	content: ReactElement;
}

const Button: React.FC<buttonInterface> = ({ content }): ReactElement => {
	return <div className='button'>{content}</div>;
};

export const Map: React.FC = (): ReactElement => {
	return <div className='container'></div>;
};
export default Map;
