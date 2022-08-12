import React from "react";
import NoteCard from './noteCard';
 
function NoteList({ notes, onDelete, onChangeStatus }) {
 return (
   <div className="contact-list">
     {
      notes.length > 0 ?
       notes.map((note) => (
         <NoteCard key={note.id} {...note} id={note.id}
         onDelete={onDelete} onChangeStatus={onChangeStatus}/>
       )) : <p>Tidak Ada Catatan</p>
     }
   </div>
 );
}
 
export default NoteList;