import React from "react";
import NoteList from './noteList';
 
function NoteContainer({ notes, onDelete, onChangeStatus, titleContainer }) {
 return (
    <>
        <h1>{titleContainer}</h1>
        <div className="contact-list">
            <NoteList notes={notes} onDelete={onDelete} onChangeStatus={onChangeStatus}/>
        </div>
    </>
 );
}
 
export default NoteContainer;