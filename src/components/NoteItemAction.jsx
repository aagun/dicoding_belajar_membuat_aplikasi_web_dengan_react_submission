import React from 'react';
import DeleteButton from "./buttons/DeleteButton.jsx";
import ArchiveButton from "./buttons/ArchiveButton.jsx";
import RestoreButton from "./buttons/RestoreButton.jsx";

function NoteItemAction({id, isArchived, deleteHandler, archiveHandler}) {
    return (
        <div className="note-item__action">
            <DeleteButton id={id} onDelete={deleteHandler}/>
            {
                isArchived
                    ? <RestoreButton id={id} onRestore={archiveHandler}/>
                    : <ArchiveButton id={id} onArchive={archiveHandler}/>
            }
        </div>
    );
}

export default NoteItemAction;