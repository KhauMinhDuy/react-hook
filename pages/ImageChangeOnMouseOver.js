
const ImageChangeOnMouseOver = (props) => {

  return (
    <div>
      <ImageToogleOnMouseOver 
        primaryImg="/static/speakers/bw/Speaker-187.jpg" 
        secondaryImg="/static/speakers/Speaker-187.jpg"
        alt="" />
      &nbsp;&nbsp;&nbsp;
      <ImageToogleOnMouseOver 
        primaryImg="/static/speakers/bw/Speaker-1124.jpg" 
        secondaryImg="/static/speakers/Speaker-1124.jpg"
        alt="" />
    </div>
  )
}

export default ImageChangeOnMouseOver;