const NoteItem = ({ note, onEdit, onDelete }) => {
    const createdAt = new Date(note.createdAt);
    const updatedAt = new Date(note.updatedAt);

    const isUpdated = updatedAt.getTime() !== createdAt.getTime();
    return (
        <div className="note-item">
            <h3>Title: {note.title}</h3>
            <p>Description: {note.description}</p>
            <small>Created: {new Date(note.createdAt).toLocaleString()}</small>
            {isUpdated && (
                <small>Updated: {new Date(note.updatedAt).toLocaleString()}</small>
            )}
            <div className="note-actions">
                <button onClick={() => onEdit(note)}>Edit</button>
                <button onClick={() => onDelete(note._id)}>Delete</button>
            </div>
        </div>
    );
}

export default NoteItem;
