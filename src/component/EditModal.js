import React from 'react';
import ReactModal from 'react-modal';
import {createNote} from '../services/Api'

class EditModal extends React.Component {
  constructor() {
    super();
    this.state = {
      title: '',
      description: '',
      isOpen: false,
    };
  }

  handleChange = (event) => {
      this.setState({
          [event.target.name]: event.target.value
      })
  }

  handleOpenModal = () => {
      this.setState({isOpen: true})
  }

  handleCloseModal = () => {
      this.setState({isOpen: false})
  }

  handleSubmit = (event) => {
    event.preventDefault()

    createNote(this.state)
    .then(() => console.log('La note a été ajoutée'))
  }

  

  render() {
      const {title, description, isOpen} = this.state;
    return (
        <div>
            <button onClick={this.handleOpenModal}>Nouvelle note</button>
            <ReactModal
                isOpen={isOpen}
            >
                <button onClick={this.handleCloseModal}>Fermer</button>
                <form onSubmit={this.handleSubmit}>

                    <div className="form-group">
                    <label>Titre : </label>
                    <input name="title" onChange={this.handleChange} value={title} />
                    </div>
                    <div className="form-group">
                    <label>Description : </label>
                    <input name="description" onChange={this.handleChange} value={description} />
                    </div>
                   
                    
                    <button type="submit">Ajouter</button>
            </form>
            
        </ReactModal>
        </div>
    );
  }

  componentDidMount() {
    this.setState({
      someKey: 'otherValue'
    });
  }
}

export default EditModal;
