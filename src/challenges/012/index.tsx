import React, { ReactElement } from 'react';

import './012.css';

export const Header: React.FC = (): ReactElement => {
	return (
		<div className='header-container'>
			<div className='left-side'>
				<i className='fas fa-bars menu'></i>
				<a href='/' className='link'>
					men
				</a>
				<a href='/' className='link'>
					woman
				</a>
				<a href='/' className='link'>
					kids
				</a>
			</div>
			<div className='logo-container'>
      <i className="fab fa-drupal logo"></i>
			</div>
			<div className='right-side'>
				<div className='search'>
          <i className="fas fa-search"></i>
					<p>search</p>
				</div>
				<i className="fas fa-shopping-bag shop"></i>
			</div>
		</div>
	);
};

// export const Content:React.FC = (): ReactElement => {

// }

// export const Footer:React.FC = (): ReactElement => {

// }

export const Shop: React.FC = (): ReactElement => {
	return (
		<div className='container'>
			<Header />
		</div>
	);
};

export default Shop;
