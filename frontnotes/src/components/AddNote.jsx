import axios from 'axios'
import React, { Component } from 'react'

export default class AddNote extends Component {

    constructor(props){
        super(props);
         this.state = {
         title : '',
         body: ''
     }
    }
    

     handleInputChange = event => {
         this.setState({
             [event.target.name] : event.target.value
         })
     }
handleFormSubmit = event =>{
    event.preventDefault();
    const note  = {
        title : this.state.title,
        body : this.state.body
        
    }
    axios.post('http://localhost:3200/notes/add',note)
    .then(res=>{
        this.setState({
            title:'',
            body:''
        });
        this.props.history.push('/');
    }).catch((err)=>console.log(err));
}

    render() {
        return (
            <div className="container" >
                  <div className="row my-4">
                      <div className="col-md-6 mx-auto">
                          <div className="card bg-light">
                              <div className="card-header">Ajouter Note</div>
                         
                             <div className="card-body">
                                 <form method="post" onSubmit={this.handleFormSubmit}>
                                     <div className="form-group">
                                     <label htmlFor="">
                                         Titre *
                                     </label>
                                     <input 
                                     onChange={this.handleInputChange}
                                     value={this.state.title}
                                     type="text" name="title" 
                                     placeholder="entrer le titre"
                                     required className="form-control"/>
                                     </div>
                                     <div className="form-group">
                                     <label htmlFor="">
                                         Description *
                                     </label>
                                     <textarea
                                        onChange={this.handleInputChange}
                                        value={this.state.body}
                                     row="3" name="body" 
                                     placeholder="entrer la description"
                                     required className="form-control"/>
                                     </div>
                                     <div className="form-group">
                                      <button className="btn btn-success shadow" type="submit">Valider</button>
                                     </div>
                                 </form>
                             </div>
                          </div>

                      </div>
                  </div>

            </div>
        )
    }
}
