const BASE_URL = import.meta.env.VITE_API_URL;

const getNotes = async () => {
    const res = await fetch(BASE_URL);
    return res.json();
};

const createNote = async (note) => {
    await fetch(BASE_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(note),
    });
};

const updateNote = async (id, note) => {
    await fetch(`${BASE_URL}/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(note),
    });
};

const deleteNote = async (id) => {
    await fetch(`${BASE_URL}/${id}`, {
        method: 'DELETE',
    });
};

export default { getNotes, createNote, updateNote, deleteNote };
