import React, {Component} from 'react';
import NoteList from "./NoteList.jsx";
import {generateId, getInitialData} from "../utils/index.js";
import NoteInput from "./NoteInput.jsx";
import NoteSearch from "./NoteSearch.jsx";

class NoteApp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            notes: getInitialData(),
            prevNotes: getInitialData(),
        }

        this.onDeleteNoteHandler = this.onDeleteNoteHandler.bind(this);
        this.onArchiveNoteHandler = this.onArchiveNoteHandler.bind(this);
        this.onRestoreNoteHandler = this.onRestoreNoteHandler.bind(this);
        this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
        this.onSearchNoteHandler = this.onSearchNoteHandler.bind(this);
    }

    onDeleteNoteHandler(id) {
        this.setState((previousState) => {
            const notes = previousState.notes.filter(note => note.id !== id);
            return {notes};
        });
    }

    onArchiveNoteHandler(id) {
        this.setState((previousState) => {
            const target= previousState.notes.findIndex(note => note.id === id);
            previousState.notes[target].archived = true;
            return {
                prevNotes: previousState.notes,
                notes: previousState.notes
            }
        })
    }

    onRestoreNoteHandler(id) {
        this.setState((previousState) => {
            const target = previousState.notes.findIndex(note => note.id === id);
            previousState.notes[target].archived = false;
            return {
                prevNotes: previousState.notes,
                notes: previousState.notes
            }
        })
    }

    onAddNoteHandler({title, body}) {
        const notes = [
            {
                id: generateId(),
                title,
                body,
                archived: false,
                createdAt: new Date().toISOString(),
            },
            ...this.state.notes
        ];

        this.setState(() => ({
            notes,
            prevNotes: notes
        }))
    }

    onSearchNoteHandler({keyword}) {
        if (keyword === '') {
            this.setState((previousState) => {
                return {
                    notes: previousState.prevNotes,
                }
            });
            return;
        }

        this.setState((previousState) => {
            const notes = previousState.notes.filter(note => note.title.toLowerCase().includes(keyword.toLowerCase()));
            return { notes };
        });
    }

    render() {
        const activeNotes = [];
        const archivedNotes = [];

        this.state.notes.forEach(note => {
            if (note.archived) {
                archivedNotes.push(note);
                return;
            }

            activeNotes.push(note);
        });

        return (
            <>
            <div className="note-app__header">
                <h1>Notes</h1>
                <NoteSearch searchNote={this.onSearchNoteHandler}/>
            </div>

            <div className="note-app__body">
                <div className="note-input">
                    <h2>Buat Catatan</h2>
                    <NoteInput addNote={this.onAddNoteHandler}/>
                </div>

                <h2>Catatan Aktif</h2>
                <NoteList
                    notes={activeNotes}
                    onDelete={this.onDeleteNoteHandler}
                    onArchive={this.onArchiveNoteHandler}
                />

                <h2>Arsip</h2>
                <NoteList
                    notes={archivedNotes}
                    onDelete={this.onDeleteNoteHandler}
                    onArchive={this.onRestoreNoteHandler}
                />
            </div>
            </>
        );
    }
}

export default NoteApp;