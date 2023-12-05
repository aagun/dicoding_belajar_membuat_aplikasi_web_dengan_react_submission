import React from 'react';

function ActionButton({id, onClickEventHandler, actionName, children}) {
    return (
        <button className={`note-item__${actionName}-button`} onClick={() => onClickEventHandler(id)}>{children}</button>
    );
}

export default ActionButton;