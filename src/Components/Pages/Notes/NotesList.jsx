import Note from './Note';
import AddNote from './AddNote';

const NotesList = ({
	notes,
	handleAddNote,
	handleDeleteNote,
}) => {
	return (
	
		<div className='notes-list' style={{display:`grid`,gridTemplateColumns:`repeat(3,1fr)`,gap:`2em`}}>
			{notes.map((note,index) => (
				<Note key={index}
					id={note.id}
					text={note.text}
					date={note.date}
					handleDeleteNote={handleDeleteNote}
				/>
			))}
			<AddNote handleAddNote={handleAddNote} />

		</div>
					

	);
};

export default NotesList;
