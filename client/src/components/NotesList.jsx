import NoteItem from './NoteItem';

const NotesList = ({ notes, onEdit, onDelete }) => {
    if (!notes.length) return <p>No notes found.</p>;

    return (
        <div className="notes-list">
            {notes.map((note) => (
                <NoteItem
                    key={note._id}
                    note={note}
                    onEdit={onEdit}
                    onDelete={onDelete}
                />
            ))}
        </div>
    );
}

export default NotesList;
