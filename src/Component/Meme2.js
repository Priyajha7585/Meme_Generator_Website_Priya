import React from "react";

export const Meme2 = (props) => {
  return (
    <>
      <h2>Here is the meme you generated</h2>
      <img
        style={{height:250+'px', width: 250+'px' }}
        src={props.url}
        alt="No Image"
      />
    </>
  )
}
export default Meme2;   
