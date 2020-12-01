import React, { useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { activeNote, startDelete } from '../../actions/notes';
import { useForm } from '../../hooks/useForm';
import { NotesAppBar } from './NotesAppBar';

export const NoteScreen = () => {
	const dispatch = useDispatch();
	const { active: note } = useSelector((state) => state.notes);

	const [formValues, handleInputChange, reset] = useForm(note);

	const { id, title, body } = formValues;

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

	const handleDeleteNote = () => {
		dispatch(startDelete(id));
	};

	return (
		<div className='notes__main-content'>
			<NotesAppBar />

			<div className='notes__content'>
				<input
					type='text'
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
						<img src={`${note.url}`} alt='imagen' />
					</div>
				)}
			</div>
			<button className='btn btn-danger' onClick={handleDeleteNote}>
				Delete
			</button>
		</div>
	);
};
