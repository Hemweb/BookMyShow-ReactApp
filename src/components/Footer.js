import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

function Footer() {
    return (
        <div style={{backgroundColor:"black", color:"white"}}>
            <Container>
                <Row style={{padding:"3%"}}>
                    <Col xs={2}>Col 1</Col>
                    <Col xs={4}>Col 1</Col>
                    <Col xs={6} style={{display:"flex", flexDirection:"row-reverse"}}>
                    <Button style={{background:"rgb(236,94,113)", border:"none"}}>Contact Today!</Button>
                    </Col>
                </Row>
                <Row style={{textAlign:"center" ,padding:"3%"}}>
                    <Col>Col 1</Col>
                    <Col>Col 1</Col>
                    <Col>Col 1</Col>
                </Row>
            </Container>
        </div>
    ); 
}

export default Footer;