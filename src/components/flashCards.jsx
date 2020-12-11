import React from 'react';

function FlashCards(props){
    return(
        <div className="flashcards">
                <h1 className="title">{props.flashcards.title}</h1>
                <h2 className= "word">{props.flashcards.word}</h2>
                <h3 className= "description">{props.flashcards.description}</h3>
            </div>
        </div>
    );
)

export default FlashCards;