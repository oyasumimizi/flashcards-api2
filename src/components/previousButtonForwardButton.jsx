import React from 'react'
import FlashCards from './flashCards'
function CardPosition(props){
    return (
            <div className="container-fluid">
                 <cardFlip />
                 <div className="row row-spacer">
                 <div className="col-md-4">
                 <button onClick={() => props.previousCard()}>Previous Card</button>
              </div>
              </div>
             <div className ="col-md-4">
                 <FlashCards FlashCards={props.FlashCards}/>
                         </div>
             <div className="col-md-4">
             <button onClick={() => props.nextCard()}>Next Card</button>
             </div>
         </div> 
         );

}

export default CardPosition;