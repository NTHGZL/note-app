import React from 'react'
import Draggable from 'react-draggable'
import './styles/NoteStyle.css'
import {deleteNote} from '../services/Api'
import Img from '../img/logo.png'
import EditModal from './EditModal'

class Note extends React.Component {


  handleDelete(id){
    
    deleteNote(id)
    
  }

  render () {
    const { note } = this.props
    return (
      note
        ? (
         

            <div className='note'>
              <div className="update">
             <EditModal />
              <button className='delete' onClick={() => this.handleDelete(note.id)}>
                <img id='garbage' src={Img} />
              </button>
              </div>
              
              
              <span className='title'>
                <h2>{note.title}</h2>
              </span>
              <div className='separator' />
              <span className='description'>
                {note.description}
              </span>
            </div>
        
        )
        : 'NO DATA'
    )
  }
}

export default Note
