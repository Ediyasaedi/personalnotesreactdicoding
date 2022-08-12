import React from 'react';
 
class NoteSearch extends React.Component {
    constructor(props) {
        super(props);
      
        this.state = {
            title: ""
        }
      
        this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
      }
      
    onTitleChangeEventHandler(event) {
        this.setState(() => {
            return {
            title: event.target.value,
            }
        });
    }
    
    onSubmitEventHandler(event) {
        event.preventDefault();
        this.props.searchNote(this.state.title);
    }

 render() {
   return (
     <form className='note-input' onSubmit={this.onSubmitEventHandler}>
       <input type="text" placeholder="Search" value={this.state.title} onChange={this.onTitleChangeEventHandler} className="searchInput"/>
       <button type="submit" className='btnSearch'>Search</button>
     </form>
   )
 }
}
 
export default NoteSearch;