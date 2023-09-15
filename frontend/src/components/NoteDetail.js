import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchNoteDetail } from '../services/apiService';
import { playAudio } from '../services/audioService';

const NoteDetail = ({ note, fetchNoteDetail }) => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchNoteDetail(id).then(() => setLoading(false));
  }, [id, fetchNoteDetail]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{note.title}</h2>
      <button onClick={() => playAudio(note.audioUrl)}>Play Audio</button>
      <h3>Transcription</h3>
      <p>{note.transcription}</p>
      <h3>Summary</h3>
      <p>{note.summary}</p>
    </div>
  );
};

const mapStateToProps = (state) => ({
  note: state.notes.currentNote,
});

const mapDispatchToProps = (dispatch) => ({
  fetchNoteDetail: (id) => dispatch(fetchNoteDetail(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NoteDetail);