import Note from "../models/noteModel.js";

export const getNotes = async (req, res) => {
  try {
    const notes = await Note.find().sort({ createdAt: -1 });
    res.status(200).json(notes);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

export const createNote = async (req, res) => {
  try {
    const { title, description } = req.body;

    if (!title) {
      return res.status(400).json({ message: "Title is required" });
    }

    const newNote = await Note.create({ title, description });
    res.status(201).json(newNote);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

export const updateNote = async (req, res, next) => {
  try {
    const updatedNote = await Note.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    if (!updatedNote) {
      return res.status(404).json({ message: "Note not found" });
    }

    res.json(updatedNote);
  } catch (error) {
    next(error);
  }
};

export const deleteNote = async (req, res, next) => {
  try {
    const deletedNote = await Note.findByIdAndDelete(req.params.id);

    if (!deletedNote) {
      return res.status(404).json({ message: "Note not found" });
    }

    res.json({ message: "Note deleted successfully" });
  } catch (error) {
    next(error);
  }
};
