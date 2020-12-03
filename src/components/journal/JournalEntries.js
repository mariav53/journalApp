import React from 'react';
import { useSelector } from 'react-redux';
import JournalCarousel from './JournalCarousel';
import { JournalEntry } from './JournalEntry';

export const JournalEntries = () => {
	const { notes } = useSelector((state) => state.notes);

	return (
		<>
			<div className='journal__entries'>
				{notes.map((note) => (
					<JournalEntry key={note.id} {...note} />
				))}
			</div>
			<div className='journal__entries-mobile'>
				<JournalCarousel notes={notes} />
			</div>
		</>
	);
};
