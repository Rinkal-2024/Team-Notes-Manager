import { useEffect, useState } from 'react';

const NoteForm = ({ onAdd, onUpdate, editingNote }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    useEffect(() => {
        if (editingNote) {
            setTitle(editingNote.title);
            setDescription(editingNote.description);
        } else {
            setTitle('');
            setDescription('');
        }
    }, [editingNote]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title.trim()) return;

        const note = { title, description };

        if (editingNote) {
            onUpdate(editingNote._id, note);
        } else {
            onAdd(note);
        }

        setTitle('');
        setDescription('');
    };

    return (
        <form onSubmit={handleSubmit} className="note-form">
            <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
            />
            <textarea
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            ></textarea>
            <button type="submit">{editingNote ? 'Update Note' : 'Add Note'}</button>
        </form>
    );
}

export default NoteForm;
