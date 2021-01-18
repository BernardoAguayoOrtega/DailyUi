import React, { ReactElement, ReactNode } from 'react';

import './019.css';

interface headerInterface {
	title: string
}

export const Header: React.FC<headerInterface> = ({ title }): ReactElement => {
	return (
		<div className='header'>
			<i className='header-return-icon fas fa-arrow-left'></i>
			<h2 className='header-title'>{title}</h2>
			<i className='header-share-icon fas fa-share-alt'></i>
		</div>
	);
};

export const Winners: React.FC = (): ReactElement => {
	return (
		<div className='winners'>
			<div className='second-place'></div>
			<div className='first-place'></div>
			<div className='third-place'></div>
		</div>
	);
};

export const User: React.FC = (): ReactElement => {
	return (
		<div className='user'>
			<i className='position'></i>
			<div className='avatar'></div>
			<p className='user-name'></p>
			<div className='user-score'></div>
			<div className='user-star'></div>
		</div>
	);
};

interface userListInterface {
	children: ReactNode;
}

export const UserList: React.FC<userListInterface> = ({
	children,
}): ReactElement => {
	return <div className='user-list'>{children}</div>;
};

export const Chart: React.FC = (): ReactElement => {
	return (
		<div className='container'>
			<Header title='Leaderboard'/>
			<Winners />
			<UserList>
				<User />
			</UserList>
		</div>
	);
};

export default Chart;
