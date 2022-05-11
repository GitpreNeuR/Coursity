import { MdDeleteForever } from 'react-icons/md';

const Note = ({ id, text, date, handleDeleteNote }) => {
	return (
	
		<div className='note' style={{border:`2px solid brown`,
		backgroundColor:`#eb9b3b`,textAlign:`center`,padding:`15px`,borderRadius:`10px`,height:`250px`,width:`300px`,overflow:`auto`}}>
			<div className='note-footer' style={{display:`inline-flex`,gap:`5em`,borderBottom:`2px solid brown`,position:`relative`}}>
				<small>{date}</small>
				<MdDeleteForever
					onClick={() => handleDeleteNote(id)}
					className='delete-icon'
					size='1.5em'
					style={{cursor:`pointer`}}
				/>
			</div>
			
			<p style={{position:`relative`,display:`content`,wordWrap:`break-word`,marginTop:`1em`}}>{text}</p>
			
			
		</div>
	);
};  

export default Note;
