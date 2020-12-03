import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startLogout } from '../../actions/auth';
import { startNewNote } from '../../actions/notes';
import { JournalEntries } from './JournalEntries';

export const Sidebar = () => {
	const dispatch = useDispatch();
	const { name } = useSelector((state) => state.auth);
	const handleLogout = () => {
		dispatch(startLogout());
	};

	const handleAddNewEntry = () => {
		dispatch(startNewNote());
	};

	return (
		<aside className='journal__sidebar'>
			<div className='journal__sidebar-navbar'>
				<h3>
					<span className='journal__navbar-name'>
						<i className='fas fa-circle'></i>
						Hey, {name}
					</span>
				</h3>

				<button className='btn logout' onClick={handleLogout}>
					Logout <i className='fas fa-sign-out-alt'></i>
				</button>
			</div>

			<div className='journal__sidebar-actions'>
				<div className='journal__sidebar-search mt-5'>
					<input type='text' placeholder='search' />
				</div>

				<div
					className='journal__sidebar-new-entry mt-5'
					onClick={handleAddNewEntry}>
					<button className='btn btn-add'>
						<i className='fas fa-plus'></i>add note
					</button>
				</div>
			</div>

			<JournalEntries />
		</aside>
	);
};
