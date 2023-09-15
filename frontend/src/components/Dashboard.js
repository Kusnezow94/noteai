import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNotes } from '../services/apiService';
import NoteCard from './NoteCard';

const Dashboard = () => {
  const dispatch = useDispatch();
  const notes = useSelector(state => state.notes);

  useEffect(() => {
    dispatch(fetchNotes());
  }, [dispatch]);

  return (
    <div className="dashboard">
      <h1>Your Notes</h1>
      <div className="note-list">
        {notes.map(note => (
          <NoteCard key={note.id} note={note} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;