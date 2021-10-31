import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from 'react-bootstrap/Card';

function AllMovies() {
    return (
        <div>
            <Container fluid style={{padding:"4%"}}>
                <Row style={{textAlign:"center"}}>
                    <Col xs={6} md={4} lg={3} style={{marginBottom:"3%"}}>
                        <Card >
                            <Card.Img variant="top" src="./premieres.jpg" />
                            <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                Doctor Movie
                            </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={6} md={4} lg={3} style={{marginBottom:"3%"}}>
                        <Card >
                            <Card.Img variant="top" src="./premieres.jpg" />
                            <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                Doctor Movie
                            </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={6} md={4} lg={3} style={{marginBottom:"3%"}}>
                        <Card >
                            <Card.Img variant="top" src="./premieres.jpg" />
                            <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                Doctor Movie
                            </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={6} md={4} lg={3} style={{marginBottom:"3%"}}>
                        <Card >
                            <Card.Img variant="top" src="./premieres.jpg" />
                            <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                Doctor Movie
                            </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={6} md={4} lg={3} style={{marginBottom:"3%"}}>
                        <Card >
                            <Card.Img variant="top" src="./premieres.jpg" />
                            <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                Doctor Movie
                            </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={6} md={4} lg={3} style={{marginBottom:"3%"}}>
                        <Card >
                            <Card.Img variant="top" src="./premieres.jpg" />
                            <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                Doctor Movie
                            </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={6} md={4} lg={3} style={{marginBottom:"3%"}}>
                        <Card >
                            <Card.Img variant="top" src="./premieres.jpg" />
                            <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                Doctor Movie
                            </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={6} md={4} lg={3} style={{marginBottom:"3%"}}>
                        <Card >
                            <Card.Img variant="top" src="./premieres.jpg" />
                            <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                Doctor Movie
                            </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                                        
                </Row>
            </Container>
        </div>
    );
}

export default AllMovies;