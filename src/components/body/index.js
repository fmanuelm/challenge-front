import { useContext } from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { UserContext } from "../../UserContext";

export default function Body() {
    const {text, setText} = useContext(UserContext); // Declara Los hooks que manejan el estado
    return (
        <Container className="mt-5 pt-5">
            <Row>
                <Col xs={6} md={{ span: 6, offset: 3 }}>
                    <Card>
                        <Card.Body>
                            <Form>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Control type="text" placeholder="First Text" onChange={()=>null} value={text}/>
                                </Form.Group>

                                <Form.Group controlId="formBasicPassword">
                                    <Form.Control type="text" placeholder="Second Text" onChange={()=>null} value={text}/>
                                </Form.Group>

                                <Form.Group controlId="formBasicPassword">
                                     <Form.Control type="text" placeholder="First Text" onChange={()=>null} value={text}/>
                                </Form.Group>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}