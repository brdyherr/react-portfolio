import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Hero(props) {

    return(
        <Jumbotron>
            <Container>
                <Row>
                    <Col md='auto'>
                        { props.title && <h1>{props.title}</h1> }
                    </Col>
                </Row>
            </Container> 
        </Jumbotron>
    );
}

export default Hero;