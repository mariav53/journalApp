import React, { useState } from 'react';

const NoteImage = ({ url }) => {
	const [isOpen, setIsOpen] = useState(false);

	const handleShowDialog = () => {
		setIsOpen(!isOpen);
		console.log('cliked');
	};
	return (
		<div>
			<img
				className='small'
				src={url}
				onClick={handleShowDialog}
				alt='not available'
			/>

			{isOpen && (
				<div class='noteImage__modal'>
					<span class='noteImage__modal-close' onClick={handleShowDialog}>
						&times;
					</span>
					<img class='noteImage__modal-img' id='img01' src={url} />
					<div id='caption'></div>
				</div>
			)}
		</div>
	);
};

export default NoteImage;
