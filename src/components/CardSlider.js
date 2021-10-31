import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
function CardSlider() {
  return (
    <div style={{marginBottom:"5%", backgroundColor:"#0000", padding:"2%"}}>
        <Carousel interval={7000} indicators={false}>
            <Carousel.Item>
                <CardGroup style={{display:"flex", gap:"30px", justifyContent:"space-around"}}>
                    <Card className="bg-dark text-white" style={{height:"300px", width:"300px", borderRadius:"5%"}}>
                        <Card.Img src="./card.png" style={{width:"100%", borderRadius:"5%"}} alt="Card image" />
                        <Card.ImgOverlay>
                            <Card.Title>Card title</Card.Title>
                            
                        </Card.ImgOverlay>
                    </Card>
                    <Card className="bg-dark text-white" style={{height:"300px", width:"300px", borderRadius:"5%"}}>
                        <Card.Img src="./card.png" style={{width:"100%", borderRadius:"5%"}} alt="Card image" />
                        <Card.ImgOverlay>
                            <Card.Title>Card title</Card.Title>
                            
                        </Card.ImgOverlay>
                    </Card>
                
                    <Card className="bg-dark text-white" style={{height:"300px", width:"300px", borderRadius:"5%"}}>
                        <Card.Img src="./card.png" style={{width:"100%", borderRadius:"5%"}} alt="Card image" />
                        <Card.ImgOverlay>
                            <Card.Title>Card title</Card.Title>
                            
                        </Card.ImgOverlay>
                    </Card>

                    <Card className="bg-dark text-white" style={{height:"300px", width:"300px", borderRadius:"5%"}}>
                        <Card.Img src="./card.png" style={{width:"100%", borderRadius:"5%"}} alt="Card image" />
                        <Card.ImgOverlay>
                            <Card.Title>Card title</Card.Title>
                            
                        </Card.ImgOverlay>
                    </Card>
                </CardGroup>
            </Carousel.Item>

            <Carousel.Item>
                <CardGroup style={{display:"flex", gap:"30px", justifyContent:"space-around"}}>
                    <Card className="bg-dark text-white" style={{height:"300px", width:"300px", borderRadius:"5%"}}>
                        <Card.Img src="./card.png" style={{width:"100%", borderRadius:"5%"}} alt="Card image" />
                        <Card.ImgOverlay>
                            <Card.Title>Card title</Card.Title>
                            
                        </Card.ImgOverlay>
                    </Card>
                    <Card className="bg-dark text-white" style={{height:"300px", width:"300px", borderRadius:"5%"}}>
                        <Card.Img src="./card.png" style={{width:"100%", borderRadius:"5%"}} alt="Card image" />
                        <Card.ImgOverlay>
                            <Card.Title>Card title</Card.Title>
                            
                        </Card.ImgOverlay>
                    </Card>
                
                    <Card className="bg-dark text-white" style={{height:"300px", width:"300px", borderRadius:"5%"}}>
                        <Card.Img src="./card.png" style={{width:"100%", borderRadius:"5%"}} alt="Card image" />
                        <Card.ImgOverlay>
                            <Card.Title>Card title</Card.Title>
                            
                        </Card.ImgOverlay>
                    </Card>

                    <Card className="bg-dark text-white" style={{height:"300px", width:"300px", borderRadius:"5%"}}>
                        <Card.Img src="./card.png" style={{width:"100%", borderRadius:"5%"}} alt="Card image" />
                        <Card.ImgOverlay>
                            <Card.Title>Card title</Card.Title>
                            
                        </Card.ImgOverlay>
                    </Card>
                </CardGroup>
            </Carousel.Item>
        </Carousel>
    </div>
  );
}

export default CardSlider;
