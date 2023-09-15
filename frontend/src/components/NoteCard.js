import React from 'react';
import { useHistory } from 'react-router-dom';

const NoteCard = ({ note }) => {
    const history = useHistory();

    const handleClick = () => {
        history.push(`/note/${note.id}`);
    }

    return (
        <div className="note-card" onClick={handleClick}>
            <h3>{note.title}</h3>
            <p>{note.summary}</p>
        </div>
    );
}

export default NoteCard;