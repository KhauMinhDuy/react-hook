import React, { useRef } from "react";

const ImageToggleOnMouseOver = (props) => {
  const {primaryImg, secondaryImg, alt} = props;

  const imageRef = useRef(null);

  const mouseOverHandler = () => {
    imageRef.current.src = secondaryImg;
  }

  const mouseOutHandler = () => {
    imageRef.current.src = primaryImg;
  }

  return (
    <img 
      onMouseOver = {mouseOverHandler}
      onMouseOut={mouseOutHandler}
      src={primaryImg} alt={alt} 
      ref={imageRef}/>
  )
}

export default ImageToggleOnMouseOver;