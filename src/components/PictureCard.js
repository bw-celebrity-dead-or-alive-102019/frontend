import React from "react";

const PictureCard = props => {

  function handleClickDead(e) {
    
    if (props.data.isDead === true) {
      alert('correct')
      window.location.reload(false)
      
    } else {
      alert('wrong');
      window.location.reload(false)
    };
  }
  function handleClickAlive(e) {
    
    if (props.data.isDead === false) {
      alert('correct')
      window.location.reload(false)
      
    } else {
      alert('wrong');
      console.log(props.data.isDead)
      window.location.reload(false)
    };
  }

  
  return (
    <div className='picturecard' >
      {console.log(props, 'props')}
      {console.log(props.data.isDead,'isDead?')}
      <h1>{props.data.name}</h1>
      <div>
         <img alt='celeb' src={props.data.image_url}/>
      </div>
      
      <div>
        {/* <button onClick={() => window.location.reload(false)}>Dead</button>
        <button onClick={() => window.location.reload(false)}>Alive</button> */}
        <button onClick={handleClickDead} >Dead</button>
        <button onClick={handleClickAlive}>Alive</button>
      </div>



      
    </div>
  );
};
export default PictureCard;
