import moment from 'moment';
import React, { useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { activeNote } from '../../actions/notes';
import { useForm } from '../../hooks/useForm';
import NoteImage from './NoteImage';
import { NotesAppBar } from './NotesAppBar';

export const NoteScreen = () => {
	const dispatch = useDispatch();
	const { active: note } = useSelector((state) => state.notes);

	const [formValues, handleInputChange, reset] = useForm(note);

	const { title, body } = formValues;

	//si el id de la nota cambia
	const activeId = useRef(note.id);
	useEffect(() => {
		if (note.id !== activeId.current) {
			reset(note);
			activeId.current = note.id;
		}
	}, [note, reset]);

	//actualizar nota
	useEffect(() => {
		dispatch(activeNote(formValues.is, { ...formValues }));
	}, [formValues, dispatch]);

	return (
		<div className='notes__main-content'>
			<NotesAppBar />
			{note.url && (
				<div
					className='journal__content journal__entry-picture'
					style={{
						backgroundSize: 'cover',
						backgroundImage: `url(${note.url})`,
						backgroundRepeat: 'no-repeat',
						backgroundPosition: 'center',
						height: '300px',
					}}></div>
			)}

			<div className='notes__content'>
				<p className='notes__content-date'>
					{moment().format('ddd, MMM DD YYYY').toUpperCase()}
				</p>
				<textarea
					placeholder='Some awesome title'
					className='notes__title-input'
					autoComplete='off'
					value={title}
					name='title'
					onChange={handleInputChange}
				/>

				<textarea
					placeholder='What happened today'
					className='notes__textarea'
					value={body}
					name='body'
					onChange={handleInputChange}></textarea>

				{note.url && (
					<div className='notes__image'>
						<NoteImage url={note.url} />
					</div>
				)}
			</div>
		</div>
	);
};
