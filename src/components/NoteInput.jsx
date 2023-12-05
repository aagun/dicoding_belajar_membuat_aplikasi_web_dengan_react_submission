import React from 'react';
import {MAX_TITLE_LENGTH, substract} from "../utils/index.js";

class NoteInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            body: '',
        }

        this.onTitleChangeHandler = this.onTitleChangeHandler.bind(this);
        this.onBodyChangeHandler = this.onBodyChangeHandler.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
    }
    onSubmitHandler(event) {
        event.preventDefault();
        this.props.addNote(this.state);
    }

    onTitleChangeHandler(event) {
        event.preventDefault();

        if (this.state.title.length === MAX_TITLE_LENGTH){
            return;
        }

        this.setState(() => ({title: event.target.value}));
    }

    onBodyChangeHandler(event) {
        event.preventDefault();
        this.setState(() => ({body: event.target.value}));
    }

    render() {
        return (
            <form onSubmit={this.onSubmitHandler}>
                <p className="note-input__title__char-limit">
                    Sisa karakter: {substract(MAX_TITLE_LENGTH, this.state.title.length)}
                </p>
                <input
                    className="note-input__title"
                    type="text"
                    placeholder="Ini adalah judul ..."
                    required
                    value={this.state.title}
                    onChange={this.onTitleChangeHandler} />

                <textarea
                    className="note-input__body"
                    type="text"
                    placeholder="Tuliskan catatanmu di sini ..."
                    required
                    value={this.state.body}
                    onChange={this.onBodyChangeHandler} />

                <button type="submit">Buat</button>
            </form>
        );
    }

}

export default NoteInput;