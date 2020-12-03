import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import { JournalEntryCarousel } from './JournalEntryCarousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const JournalCarousel = ({ notes }) => {
	const notesLength = notes.length > 1;
	let centerModeInit = false;

	if (notesLength) {
		centerModeInit = true;
	} else {
		centerModeInit = false;
	}
	return (
		<Carousel
			autoPlay
			centerMode={centerModeInit}
			showArrows={true}
			className='hola'>
			{notes.map((note) => (
				<JournalEntryCarousel
					key={note.id}
					{...note}
					notesLength={notes.length}
				/>
			))}
		</Carousel>
	);
};

export default JournalCarousel;
