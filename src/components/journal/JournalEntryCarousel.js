import React from 'react';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { activeNote, startDelete } from '../../actions/notes';

export const JournalEntryCarousel = ({ id, date, title, body, url }) => {
	const dispatch = useDispatch();
	const noteDate = moment(date);

	const handleEntryClick = () => {
		dispatch(activeNote(id, { date, title, body, url }));
	};

	const handleDeleteNote = (e) => {
		e.preventDefault();
		e.stopPropagation();
		dispatch(startDelete(id));
	};

	return (
		<div className='journal__entry pointer carousel' onClick={handleEntryClick}>
			{url ? (
				<div
					className='journal__content journal__entry-picture'
					style={{
						backgroundSize: 'cover',
						backgroundImage: `url(${url})`,
						backgroundRepeat: 'no-repeat',
						backgroundPosition: 'center',
						position: 'relative',
					}}>
					<div
						className={`${
							!url
								? 'journal__entry-date-box-content'
								: 'journal__entry-date-box-content-img'
						}`}>
						<h4>{moment(noteDate).format('DD MMM')}</h4>
						<span>{moment(noteDate).format('ddd')}</span>
					</div>
					<div className='delete-entry' onClick={(e) => handleDeleteNote(e)}>
						<i className='fas fa-trash-alt'></i>
					</div>
				</div>
			) : (
				<div className='journal__content main journal__entry-body'>
					<div
						className={`${
							!url
								? 'journal__entry-date-box-content'
								: 'journal__entry-date-box-content-img'
						}`}>
						<h4>{moment(noteDate).format('DD MMM')}</h4>
						<span>{moment(noteDate).format('ddd')}</span>
					</div>
					<div className='delete-entry' onClick={(e) => handleDeleteNote(e)}>
						<i className='fas fa-trash-alt'></i>
					</div>

					<p className='journal__entry-title'>{title}</p>
					<p className='journal__entry-content'>{body}</p>
				</div>
			)}
		</div>
	);
};
