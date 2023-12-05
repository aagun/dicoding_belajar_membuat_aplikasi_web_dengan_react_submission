import React from 'react';
import ActionButton from "./ActionButton.jsx";

function RestoreButton({id, onRestore}) {
    return (
        <ActionButton
            id={id}
            actionName="archive"
            onClickEventHandler={onRestore}>
            Pindahkan
        </ActionButton>
    );
}

export default RestoreButton;