import React from 'react';
 
class NoteInput extends React.Component {
    constructor(props) {
        super(props);
      
        this.state = {
            title: "",
            body: "",
            archived: false,
            limit: 50
        }
      
        this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
        this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
        this.onArchivedChangeEventHandler = this.onArchivedChangeEventHandler.bind(this);
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
      }
      
    onTitleChangeEventHandler(event) {
        this.setState(() => {
            return {
            title: event.target.value,
            limit: 50 - event.target.value.length
            }
        });
    }
    
    onBodyChangeEventHandler(event) {
        this.setState(() => {
            return {
            body: event.target.value,
            }
        });
    }

    onArchivedChangeEventHandler(event) {
        const checked = event.target.checked;
        console.log(checked)
        this.setState(() => {
            return {
                archived: checked,
            }
        });
    }
    
    onSubmitEventHandler(event) {
        event.preventDefault();
        this.props.addNote(this.state);
    }

 render() {
   return (

<div className="container">
    <div className='container-flex'>
    <form className='note-input' onSubmit={this.onSubmitEventHandler}>
    <div className="row">
        <h3>Add New Note</h3>
    </div>
        <div className="row">
            <div className="col-25">
                <label for="title">Title</label>
            </div>
            <div className="col-75">
            <span className=''>Limit : {this.state.limit}</span>
            <input type="text" placeholder="Title" value={this.state.title} onChange={this.onTitleChangeEventHandler} className="inputForm"/>
            </div>
        </div>

        <div className="row">
            <div className="col-25">
                <label for="body">Body</label>
            </div>
            <div className="col-75">
                <textarea type="text" placeholder="Body" value={this.state.body} onChange={this.onBodyChangeEventHandler} style={{height: "200px"}} className="inputForm"></textarea>
            </div>
        </div>
        
        <div className="row">
            <div className="col-25">
            </div>
            <div className="col-75">
                <input type="checkbox" value={this.state.archived} onChange={this.onArchivedChangeEventHandler} id="isArchiveId"/>
                <label for="archive">  Save to Archive</label>
            </div>
        </div>
        <div className="row">
            <button type="submit" className='btn-add'>Add</button>
        </div>
     </form>
    </div>
    </div>
   )
 }
}
 
export default NoteInput;