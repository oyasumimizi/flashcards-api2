import Axios from 'axios';
import React, {Component} from 'react';
import CardCollection from './cardCollection';
import FlashCards from './flashCards';
// import CardPosition from './previousButtonForwardButton';

//get componentDidMount back in the component, grab data and set it into state variable, also flip loading

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            loading: true,
            flashCardsNumber:0,
            collection:0,
            collectionNumber:0,
            collections:[
                {title: "React"},
                {word: "state", definition: "JS object that holds values for a component"},
                {word: "props", definition: "A way to pass data into components on initialization"},
                {word: "component", definition: "Reusable building blocks for UI using JSX"},
                {title: "C#"},
                {word: "variable", definition: "Named space in memory"},
                {word: "class", definition: "Template for an object that consists of member variables, constructor, methods"},
                {word: "object", definition: "Instance of a class"}]
        }
    }


    componentDidMount(){
        Axios.get('http://localhost:5000/api/collections')
        .then(res => ){
            console.log(flashCards);
            this.setState({ flashCards });
            this.setState({ loading: false })
        }
    }
//make methods that make api calls


    addNewCard(flashCards){
        this.flashCards.push(flashCards);
        this.setState({
            flashCardsNumber: this.flashCards.length - 1
        });
    }

    
    goToNextFlashCard(){
        let tempFlashCardsNumber = this.state.flashCardsNumber;
        let collectionLength = this.state.collection.length;
        tempFlashCardsNumber++
        if(tempFlashCardsNumber === collectionLength) {
            tempFlashCardsNumber = 0;
        }
        this.setState({
            flashCardsNumber: tempFlashCardsNumber
        });
    }

    goToPreviousFlashCard(){
        let tempFlashCardsNumber = this.state.flashCardsNumber;
        let collectionLength = this.state.collection.length;
        collectionLength--
        if(tempFlashCardsNumber < 0){
            tempFlashCardsNumber = collectionLength -1;
            
        this.setState({
            flashCardsNumber: tempFlashCardsNumber

            
         });
        }
    }

    render(){

        console.log(['collection: '], this.state.collection[this.state.collectionNumber])
        console.log({loading: this.state.loading}); 
        return (this.state.loading ? <h1>ReactLoading type={"bars"} color={"white"}</h1>:
        
           
           <div>
               {console.log(this.state.collections)}
               <FlashCards
               collections = {this.collections}
               collection = {this.state.collections[this.state.collectionNumber]}/>

                CardPosition flashCards={this.flashCards[this.state.flashCardsNumber]} nextCard={() => this.goToNextFlashCard()} 
                previousFlashCard={() => this.goToPreviousFlashCard()} />)
                <cardCollection addNewCardCollection={this.addNewCardCollection.bind(this)}/>
            </div>

        );
    }
}

export default App;
