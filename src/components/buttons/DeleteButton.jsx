import React from 'react';
import ActionButton from "./ActionButton.jsx";

function DeleteButton({id, onDelete}) {
    // <button className='note-item__delete-button' onClick={() => onDelete(id)}>Delete</button>
    return (
        <ActionButton id={id} onClickEventHandler={onDelete} actionName="delete">Delete</ActionButton>
    );
}

export default DeleteButton;