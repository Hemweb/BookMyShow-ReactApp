import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from 'react-bootstrap/Card';
import { useParams } from "react-router";
import axios from "axios";
import {useState, useEffect} from 'react';

function SingleMovFetch() {
    const {movid} = useParams();
    console.log(movid);
    const [singledata, setSingleData] = useState([]);

    useEffect(async () => {
        try {
            const response = await axios.get(`https://bms-backend-app1.herokuapp.com/movie/${movid}`);
            console.log(response);
            setSingleData([response.data]);
        } catch (error) {
            console.error(error);
        }
    }, []);
    return (
        <div>
            <Container fluid style={{padding:"4%"}}>
                <Row style={{textAlign:"center"}}>
                    {singledata.map( (mov) => {
                            return(
                                <Col xs={6} md={4} lg={3} style={{marginBottom:"3%"}}>
                                    <Card >
                                        <Card.Img variant="top" src={mov.imageurl} />
                                        <Card.Body>
                                        <Card.Title>{mov.title}</Card.Title>
                                        <Card.Text>
                                            {mov.actor}
                                        </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            );
                    })}           
                </Row>
            </Container>
        </div>
    );
}

export default SingleMovFetch;