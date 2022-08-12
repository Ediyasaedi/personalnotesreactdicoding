import React from "react";
import NoteSearch from "./noteSearch";

function NoteHeader({onSearchNoteHandler}){
    return (
        <div class="header">
            <a href="#default" className="logo">MyNotes</a>
            <div class="header-right">
                <a class="active" href="#default"><NoteSearch searchNote={onSearchNoteHandler} /></a>
            </div>
        </div>
    )
}

export default NoteHeader;