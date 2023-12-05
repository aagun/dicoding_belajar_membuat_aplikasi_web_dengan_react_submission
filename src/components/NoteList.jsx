import React from 'react';
import NoteItem from "./NoteItem.jsx";
import NoteEmpty from "./NoteEmpty.jsx";

function NoteList({notes, onDelete, onArchive}) {

    if (!notes.length) {
        return <NoteEmpty />;
    }

    return (
        <div className="notes-list">
            {notes.map(note => <NoteItem
                key={note.id}
                note={note}
                onDelete={onDelete}
                onArchive={onArchive}
            />)}
        </div>
    );
}

export default NoteList;