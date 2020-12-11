import React from 'react';
import CardCollection from './cardCollection/cardCollection';
import FlashCards from './flashCards/flashCards.JSX';
import CardPosition from './previousButtonForwardButton';
import Axios from "axios";


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

class Card extends render() {
    return (
        <div> 
        { this.props.value }
        </div>
    );
}
}

class CardContainer extends React.Component {   
    render() {
    let arr=["one", "two", "three", "four", "five"];
    let elements=[];
    for(let i=0; i<arr.length; i++){
        elements.push(<Card value={ arr[i] } />);
    }
        return (
        <div> 
        {elements}
        </div>
    );
}
}
    addNewCard(flashCards){
        this.flashCards.push(flashCards);
        this.setState({
            flashCardsNumber: this.flashCards.length - 1
        });
    }

    
    goToNextFlashCard(){
        let tempFlashCardsNumber = this.state.flashCardsNumber;
        tempFlashCardsNumber++;
        if(tempFlashCardsNumber === this.flashCards.length{
            tempFlashCardsNumber = 0;
        }
        this.setState({
            flashCardsNumber: tempFlashCardsNumber
        });
    }

    goToPreviousFlashCard(){
        let tempFlashCardsNumber = this.state.flashCardsNumber;
        tempFlashCardsNumber--;
        if(tempFlashCardsNumber < 0)
            tempFlashCardsNumber = this.flashCards.length -1;
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
