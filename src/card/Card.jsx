import React from 'react';
import './card.css';


 class Card extends React.Component {
   
    render() {
      return (
      <>
        <div className="bg-light box-shadow-lg rounded-lg p-4 mb-grid-gutter text-center text-sm-left">
            <img class="d-inline-block mb-4 mt-2" width="100" src={this.props.imgsrc} alt="Icon"/>
            <h3 class="h5 mb-2">{this.props.cardname}</h3>
            <p class="font-size-sm">{this.props.cardDedtail}</p>
        </div>
      </>
      );
    }
  }
  
  export default Card;