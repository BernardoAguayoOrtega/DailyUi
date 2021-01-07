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

export const Content:React.FC = (): ReactElement => {

  return(
    <div className='content-container'>
      <img src='https://images.unsplash.com/photo-1554735490-5974588cbc4f?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTJ8fHNob2VzfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' alt=''/>
    </div>
  )
}

// export const Footer:React.FC = (): ReactElement => {

// }

export const Shop: React.FC = (): ReactElement => {
	return (
		<div className='container'>
			<Header />
      <Content />
		</div>
	);
};

export default Shop;
