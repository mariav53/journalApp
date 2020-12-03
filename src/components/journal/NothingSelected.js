import React from 'react';
import { useDispatch } from 'react-redux';
import { startNewNote } from '../../actions/notes';

export const NothingSelected = () => {
	const dispatch = useDispatch();

	const handleAddNewEntry = () => {
		dispatch(startNewNote());
	};

	return (
		<div className='nothing__main-content'>
			<div className='nothing__main-content-center'>
				<p>Take a moment to write down your ideas</p>
				<div className='nothing__new-entry' onClick={handleAddNewEntry}>
					<i className='fas fa-plus-circle fa-2x'></i>
				</div>
			</div>
		</div>
	);
};
