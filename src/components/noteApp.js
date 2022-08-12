import React from "react";
import NoteInput from "./noteInput";
import {getInitialData} from '../utils/data.js';
import NoteHeader from "./noteHeader";
import NoteContainer from "./noteContainer";

class NoteApp extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      notes: getInitialData(),
      activeNotes : [],
      archivedNotes : [],
      queryFilter: ''
    }
  
    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onSearchNoteHandler = this.onSearchNoteHandler.bind(this);
    this.onChangeArchiveStatus = this.onChangeArchiveStatus.bind(this);
  }

  static getDerivedStateFromProps(prevProps, prevState) {
    let tempArchived = [], tempActive = []
    prevState.notes.map((note) => (
      note.archived ? tempArchived.push(note) : tempActive.push(note)
    ))
    return {...prevState, activeNotes : tempActive, archivedNotes : tempArchived };
  }

  onDeleteHandler(id) {
    const notes = this.state.notes.filter(note => note.id !== id);
    this.setState({ notes });
  }

  onSearchNoteHandler(keyword) {
    this.setState({
      queryFilter: keyword,
    });   
    // if(keyword !== ""){
    //   const notes = this.state.notes.filter(note => note.title.toLowerCase() === keyword.toLowerCase());
    //   this.setState({ notes });
    // } else {
    //   this.setState(this.state.notes);
    // }

  }

  onChangeArchiveStatus(id){
    this.setState(prevState => ({
      notes: prevState.notes.map(
        el => el.id === id ? { ...el, archived: !el.archived }: el
      )
    }))
  }

  onAddNoteHandler({ title, body, archived }) {
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            title,
            body,
            archived,
            createdAt: new Date().toString(),
          }
        ]
      }
    });
  }

  render() {
    const filteredNotes = this.state.notes.filter((note) => 
        note.title.toLowerCase().includes(this.state.queryFilter.toLowerCase())
    )
    return(
      <>
        <NoteHeader onSearchNoteHandler={this.onSearchNoteHandler} />
        <NoteInput addNote={this.onAddNoteHandler} />
        <div className="note-app">
          <NoteContainer notes={filteredNotes.filter((activeNote) => !activeNote.archived)} onDelete={this.onDeleteHandler} onChangeStatus={this.onChangeArchiveStatus} titleContainer="Active Note"/>
          <NoteContainer notes={filteredNotes.filter((activeNote) => activeNote.archived)} onChangeStatus={this.onChangeArchiveStatus} titleContainer="Archive Note"/>
        </div>
      </>
    )
  };
};

export default NoteApp;