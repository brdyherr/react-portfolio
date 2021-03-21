import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Footer() {

    return(
        <footer className="mt-5">
            <Container>
                <Row className="border-top justify-content-md-center">
                    <Col sm><a href="https://github.com/brdyherr/react-portfolio">GitHub</a></Col>
                    <Col sm><a href="https://www.linkedin.com/in/braudy-herrera-5855261a/">Linkedin</a></Col>
                    <Col sm><a href="https://stackoverflow.com/users/15447418/braudy-herrera?tab=profile">stackoverflow</a></Col>
                </Row>
            </Container>
        </footer>
    );

}

export default Footer;