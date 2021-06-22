import { useEffect, useRef, useState } from "react";


const ImageToggleOnScroll = (props) => {
  const {primaryImg, secondaryImg} = props;

  const [inView, setInView] = useState(false);

  const imageRef = useRef(null);

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    }
  },[]);

  const isInView = () => {
    const rect = imageRef.current.getBoundingClientRect();
    return rect.top >= 0 && rect.bottom <= window.innerHeight;
  }

  const scrollHandler = () => {
    setInView(isInView());
  }


  return (
    <img

      src={inView ? secondaryImg : primaryImg} 
      alt=""
      ref={imageRef} 
    />
  )
}

export default ImageToggleOnScroll;