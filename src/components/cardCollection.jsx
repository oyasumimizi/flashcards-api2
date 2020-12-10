import React from 'react';

import React {Component} from 'react';

class CardCollection extends Component{
    constructor(props){
        super(props);
        this.state={ }
            title= "",
    }

this.handleChange = this.handleChange.bind(this);
this.handleSubmit = this.handleSubmit.bind(this);

handleChange(e){
    this.setState({
        [e.target.name]: e.target.value
    });
}

handleSubmit(e){
    e.preventDefault();
    const flashcard = {
        title: this.state.title,
    }
    this.props.addNewCardCollection(flashcard);
    this.setState({
        title: ""
    });
}

    render(){
        return(
            <div>
                <hr/>
                <center>
                    <h3>Add a new card to the collection.</h3>
                </center>
               <form onSubmit={this.handleSubmit}>
                   <div className="row col-allign">
                       <label>Title:</label>
                       <input type ="text" name="title" value={this.state.title}
                       onChange={this.handleChange}/>
                   </div>
                   <div className="row col-allign">
                   <label>Word:</label>
                       <input type="text" name="word" value={this.state.word}
                       onChange={this.handleChange}/>
                   </div>
                   <div className="row col-allign">
                       <label>Description:</label>
                       <input type="text" name="description" value={this.state.description}
                       onChange={this.handleChange}/>
                   </div>
                   <div className="cold-md-4">
                       <input type="submit" value="Add"/>
                   </div>
                <div>
            </form>
        </div>
    );
}





export default CardCollection;