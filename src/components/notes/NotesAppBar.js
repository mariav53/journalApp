import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startDelete, startSaveNote, startUpload } from '../../actions/notes';

export const NotesAppBar = () => {
	const dispatch = useDispatch();
	const { active } = useSelector((state) => state.notes);

	const [isVisible, setIsVisible] = useState(false);

	const handleSave = () => {
		console.log({ active });
		dispatch(startSaveNote(active));
	};

	const handlePictureUpload = () => {
		document.querySelector('#fileSelector').click();
	};

	const handleFileChange = (e) => {
		const file = e.target.files[0];
		if (file) {
			dispatch(startUpload(file));
		}
	};

	const handleDeleteNote = () => {
		dispatch(startDelete(active.id));
	};
	return (
		<div className='notes__appbar'>
			<input
				id='fileSelector'
				type='file'
				name='file'
				style={{ display: 'none' }}
				onChange={handleFileChange}
			/>

			<div className='notes__appBar-btns-container'>
				<div className='notes__appBar-btns'>
					<div className='notes__appBar-btns-1'>
						<button className='btn btn-appBar' onClick={handleDeleteNote}>
							<i className='fas fa-trash-alt'></i> Delete note
						</button>
					</div>
					<div className='notes__appBar-btns-2'>
						<button className='btn btn-appBar' onClick={handlePictureUpload}>
							<i className='fas fa-image'></i> Upload image
						</button>

						<button className='btn btn-appBar' onClick={handleSave}>
							<i className='fas fa-save'></i>Save
						</button>
					</div>
				</div>
			</div>

			<div className='notes__appBar-btns-container-mobile'>
				<div className='notes__appBar-btns-mobile'>
					<button
						id='mobile-menu'
						className='mobile-menu-button'
						onClick={() => setIsVisible(!isVisible)}>
						<i class='fas fa-ellipsis-v'></i>
					</button>

					{isVisible && (
						<nav id='main-navigation' className='navigation'>
							<ul className='nav'>
								<li className='nav__item'>
									<button className='btn btn-appBar' onClick={handleDeleteNote}>
										<i className='fas fa-trash-alt'></i>
									</button>
								</li>
								<li className='nav__item'>
									<button
										className='btn btn-appBar'
										onClick={handlePictureUpload}>
										<i className='fas fa-image'></i>
									</button>
								</li>
								<li className='nav__item'>
									<button className='btn btn-appBar' onClick={handleSave}>
										<i className='fas fa-save'></i>
									</button>
								</li>
							</ul>
						</nav>
					)}
				</div>
			</div>
		</div>
	);
};
