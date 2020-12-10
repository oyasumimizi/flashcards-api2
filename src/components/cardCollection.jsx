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

handleChange(event){
    this.setState({
        [event.target.name]: event.target.value
    });
}

handleSubmit(event){
    event.preventDefault();
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
                   <div className="cold-md-4">
                       <input type="submit" value="Add"/>
                   </div>
                <div>
            </form>
        </div>
    );
}





export default CardCollection;