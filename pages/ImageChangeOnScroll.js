import React, { useEffect, useState } from "react";
import ImageToggleOnScroll from "../src/ImageToggleOnScroll";

const ImageChangeOnScroll = (props) => {

  const [currentSpeakerId, setCurrentSpeakerId] = useState(0);
  const [mouseOverCounting, setMouseOverCounting] = useState(0);

  const mouseOverHandler = (speakerId) => {
    setMouseOverCounting(mouseOverCounting + 1);
    setCurrentSpeakerId(speakerId);
  }

  useEffect(() => {
    window.document.title = `Speaker Id: ${currentSpeakerId}`;
    console.log(`useEffect: setting tiitle to ${currentSpeakerId}`);
  },[currentSpeakerId]);

  return (
    <div>
      <span>Mouse Over Count: {mouseOverCounting}</span>
      {[1124, 187, 823, 1269, 1530].map((speakerId) => {
        return (
          <div key={speakerId}
            onMouseOver={() => mouseOverHandler(speakerId)}
          >
            <ImageToggleOnScroll 
              primaryImg={`/static/speakers/bw/Speaker-${speakerId}.jpg`}
              secondaryImg={`/static/speakers/Speaker-${speakerId}.jpg`}
            />
          </div>
        )
      })}
    </div>
  )
}

export default ImageChangeOnScroll;