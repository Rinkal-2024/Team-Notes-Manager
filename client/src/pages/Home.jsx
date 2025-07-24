import React, { useEffect, useState } from 'react';
import NotesList from '../components/NotesList';
import NoteForm from '../components/NoteForm';
import noteService from '../services/noteService';

const Home = () => {
    const [notes, setNotes] = useState([]);
    const [editingNote, setEditingNote] = useState(null);

    const fetchNotes = async () => {
        const data = await noteService.getNotes();
        setNotes(data);
    };

    useEffect(() => {
        fetchNotes();
    }, []);

    const handleAdd = async (note) => {
        await noteService.createNote(note);
        fetchNotes();
    };

    const handleUpdate = async (id, note) => {
        await noteService.updateNote(id, note);
        setEditingNote(null);
        fetchNotes();
    };

    const handleDelete = async (id) => {
        await noteService.deleteNote(id);
        fetchNotes();
    };

    return (
        <>
            <NoteForm onAdd={handleAdd} onUpdate={handleUpdate} editingNote={editingNote} />
            <NotesList notes={notes} onEdit={setEditingNote} onDelete={handleDelete} />
        </>
    );
}

export default Home;
