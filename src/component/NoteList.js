import React from 'react'
import Note from './Note'

import './styles/NoteListStyle.css'

import {getNotes} from '../services/Api'

class NoteList extends React.Component {
  constructor () {
    super()
    this.state = {
      notes: []
    }
  }

  componentDidMount () {
    
    getNotes()
    .then(data => this.setState({notes: data}))
  
  }

  render () {
    const { notes } = this.state
    return (
      <div className='list-container'>
        {
          notes
            ? (
              notes.map(note => {
                return <Note key={note.id} note={note} />
              })
            )
            : 'NO DATA'
        }
      </div>
    )
  }
}

export default NoteList
