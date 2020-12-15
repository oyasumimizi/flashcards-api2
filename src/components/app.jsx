import React from 'react';
import CardCollection from './cardCollection';
import FlashCards from './flashCards';
import CardPosition from './previousButtonForwardButton';


class App extends React.Component {
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
//make methods that make api calls

    // axios = require('axios').default;



    // addNewCard(flashCards){
    //     this.flashCards.push(flashCards);
    //     this.setState({
    //         flashCardsNumber: this.flashCards.length - 1
    //     });
    // }

    
    // goToNextFlashCard(){
    //     let tempFlashCardsNumber = this.state.flashCardsNumber;
    //     let collectionLength = this.state.collection.length;
    //     tempFlashCardsNumber++
    //     if(tempFlashCardsNumber === collectionLength) {
    //         tempFlashCardsNumber = 0;
    //     }
    //     this.setState({
    //         flashCardsNumber: tempFlashCardsNumber
    //     });
    // }

    // goToPreviousFlashCard(){
    //     let tempFlashCardsNumber = this.state.flashCardsNumber;
    //     let flashCardsLength = this.state.flashCardsLength.length;
    //     collectionLength--
    //     if(tempFlashCardsNumber < 0){
    //         tempFlashCardsNumber = collectionLength -1;
            
    //     this.setState({
    //         flashCardsNumber: tempFlashCardsNumber

            
    //      });
    //     }
    // }

    render(){
        // console.log(['collections: '], this.state.collections[this.state.collectionNumber])
        console.log({loading: this.state.loading}); 
        return (this.state.loading ? <h1>Loading...</h1>:
           <div>
//                <FlashCards
//                collections = {this.collections}
//                collection = {this.state.collections[this.state.collectionNumber]}/>

//                 {/* CardPosition flashCards={this.flashCards[this.state.flashCardsNumber]} nextCard={() => this.goToNextFlashCard()}  */}
//                 {/* previousFlashCard={() => this.goToPreviousFlashCard()} />) */}
//                 <CardCollection addNewCardCollection={this.addNewCardCollection.bind(this)}/>
//             </div>

//         );
//     }
// }

export default App;
//get data in
// return loading 
// when data shows is present add child components