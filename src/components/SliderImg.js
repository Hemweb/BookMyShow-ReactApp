import Carousel from 'react-bootstrap/Carousel';
function SliderImg() {
  return (
    <div style={{marginBottom:"2%", padding:"2%"}}>
        <Carousel interval={2000} variant="white">
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="./slide1.jpg"
              alt="First slide"
            />
            
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="./slide2.jpg"
              alt="Second slide"
            />

            
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="./slide3.jpg"
              alt="Third slide"
            />

            
          </Carousel.Item>
        </Carousel>
    </div>
  );
}

export default SliderImg;
