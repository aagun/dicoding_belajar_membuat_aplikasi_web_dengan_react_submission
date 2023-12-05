import React from 'react';
import NoteItemContent from "./NoteItemContent.jsx";
import NoteItemAction from "./NoteItemAction.jsx";

function NoteItem({note, onDelete, onArchive}) {
    const {id, title, body, createdAt, archived} = note;
    return (
        <div className="note-item">
            <NoteItemContent title={title} body={body} date={createdAt}/>
            <NoteItemAction id={id} isArchived={archived} deleteHandler={onDelete} archiveHandler={onArchive}/>
        </div>
    );
}

export default NoteItem;