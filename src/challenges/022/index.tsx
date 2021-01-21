import React, { ReactElement } from 'react';

import './022.css';

interface headerInterface {
	title: string;
	buttonText: string;
	placeholder: string;
}

const Header: React.FC<headerInterface> = ({
	title,
	buttonText,
	placeholder
}): ReactElement => {
	return (
		<div className='header'>
			<h2 className='title'>{title}</h2>
			<div className='header-search-boc-container'>
				<input type='text' placeholder={placeholder} className='search-box' />
				<div className='header-button'>{buttonText}</div>
			</div>
		</div>
	);
};

const Categories: React.FC = (): ReactElement => {
	return <div className='categories'></div>;
};

const Category: React.FC = (): ReactElement => {
	return <h2>Category</h2>;
};

export const Search: React.FC = (): ReactElement => {
	return (
		<div className='container'>
			<Header title='explore' buttonText='cancel' placeholder='Search' />
			<Categories>
				<Category />
			</Categories>
		</div>
	);
};
export default Search;
