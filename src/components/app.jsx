import React from 'react';
import CardCollection from './cardCollection/cardCollection';
import FlashCards from './flashCards/flashCards';
import CardPosition from './previousButtonForwardButton';


class App extends Component{
    constructor(props){
        super(props);
        this.FlashCards = [
            {title: "React"},
            {word: "state", definition: "JS object that holds values for a component"},
            {word: "props", definition: "A way to pass data into components on initialization"},
            {word: "component", definition: "Reusable building blocks for UI using JSX"},
            {title: "C#"},
            {word: "variable", definition: "Named space in memory"},
            {word: "class", definition: "Template for an object that consists of member variables, constructor, methods"},
            {word: "object", definition: "Instance of a class"}
        ];
        this.state = {
            flashCardsNumber:0
        }
    }

    axios = require('axios').default;



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
        tempFlashCardsNumber--
        if(tempFlashCardsNumber < 0){
            tempFlashCardsNumber = collectionLength -1;
            
        this.setState({
            flashCardsNumber: tempFlashCardsNumber

            
        });
    }

    render = (){
        return (
           <div className="container-fluid">
                <CardPosition flashCards={this.flashCards[this.state.flashCardsNumber]} nextCard={() => this.goToNextFlashCard()} previousCard={() => this.goToPreviousFlashCard()}/>)
                <CardCollection addNewCardCollection={this.addNewCardCollection.bind(this)}/>
            </div>

        );
    }
}

export default App;
