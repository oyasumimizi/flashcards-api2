import React from 'react'

function CardPosition(props){
    return (
            <div className="container-fluid">
                 <TitleBar />
                 <div className="row row-spacer">
                 <div className="col-md-4">
                 {button onClick={() => props.previousCard()}>Previous Card</button>
              </div>
             <div className ="col-md-4">
                 <FlashCards FlashCards={props.FlashCards}/>
                         </div>
             <div className="col-md-4">
             <button onClick={() => props.nextCard()}>Next Card</button>
             </div>
         </div>
     </div>
 
         );
     }
 }
    )
}

export default CardPosition;