import React from 'react';

class NoteSearch extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            keyword: ''
        }

        this.onKeywordChangeHandler = this.onKeywordChangeHandler.bind(this);
        this.onKeyDownHandler = this.onKeyDownHandler.bind(this);
    }

    onKeyDownHandler(event) {
        if (event.code === 'Enter') {
            this.props.searchNote(this.state);
        }
    }

    onKeywordChangeHandler(event) {
        event.preventDefault();
        this.setState(() => ({keyword: event.target.value}));
    }

    render() {
        return (
            <div className="note-search">
                <input
                    type="text"
                    placeholder="Cari catatan ..."
                    value={this.state.keyword}
                    onChange={this.onKeywordChangeHandler}
                    onKeyDown={this.onKeyDownHandler}/>
            </div>
        );
    }

}

export default NoteSearch;