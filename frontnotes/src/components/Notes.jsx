import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
export default class Notes extends Component {

        state = {
            notes: []
        }
    
    componentDidMount(){
        this.getnotes();
    }
    getnotes = () =>  {
        axios.get('http://localhost:3200/notes')
        .then(res=>{
            this.setState({
              notes : res.data.notes
            })
        }).catch((err)=>console.log(err));
      }

      deleteNote = (id) => {
        axios.delete('http://localhost:3200/notes/delete/'+id)
        .then(res=>{
            this.setState({
              notes : this.state.notes.filter(item => item._id!== id)
            })
        }).catch((err)=>console.log(err));
      }
    render() {
        const { notes } = this.state;
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-10 m-4 mx-auto">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>Titre</th>
                                        <th>description</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                  {
                                    notes.length > 0 && notes.map(note => (
                                     <tr key={note._id}>
                                        <td>{note.title}</td>
                                        <td>{note.body}</td>
                                        <td>

                                        <a
                                         onClick={()=> this.deleteNote(note._id)}
                                         className="btn text-white btn-sm btn-danger">
                                        Delete</a>
                                            <Link to={'/edit/note/'+note._id} className="btn text-white btn-sm btn-warning ml-2">update</Link>
                                        </td>
                                    </tr>    
                                    ))
                                  }
                                   
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
