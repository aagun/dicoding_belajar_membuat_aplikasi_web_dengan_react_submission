import React from 'react';
import ActionButton from "./ActionButton.jsx";

function DeleteButton({id, onArchive}) {
    // <button className='note-item__archive-button' onClick={() => onArchive(id)}>Archive</button>
    return (
        <ActionButton
            id={id}
            actionName="archive"
            onClickEventHandler={onArchive}>
            Archive
        </ActionButton>
    );
}

export default DeleteButton;