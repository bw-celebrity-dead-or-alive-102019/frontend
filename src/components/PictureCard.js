import React from "react";

const PictureCard = props => {
  return (
    <div >
        <h1>{props.name}</h1>
        <img alt='celeb' src={props.image_url}/>
        <button>Dead</button>
        <button>Alive</button>
      
    </div>
  );
};
export default PictureCard;
