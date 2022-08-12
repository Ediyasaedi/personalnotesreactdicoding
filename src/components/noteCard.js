import React from "react";
import {showFormattedDate} from "../utils/data";

function NoteCard({title, body, createdAt, archived, id, onDelete, onChangeStatus}){
    let date = new Date(createdAt);
    return (
        <div className="card">
            <h1>{title}</h1>
            <h4>Dibuat : {showFormattedDate(date)}</h4>
            <p>{body}</p>
            <div className="footer-card">
                <button className="btn-archive-active" type="button" onClick={() => onChangeStatus(id)}>{archived ? "Move to Active" : "Move to Archive"}</button>
                <button className="btn-delete" type="button" onClick={() => onDelete(id)}>Delete</button>
            </div>
        </div>
    )
};

export default NoteCard;