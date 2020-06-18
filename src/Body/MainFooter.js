import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Button } from 'react-bootstrap';

function Footer(props) { 
    return <footer className="mainfooter"><Row>
        <Col className="text-left">
            <Link to={props.prev} className="text-white">
                <Button variant="success" block>
                    Prethodna lekcija
                </Button>
            </Link>
            </Col>
            <Col className="text-left">
            <Link to="/" className="text-white">
                <Button variant="secondary" block>
                Na početak
                </Button>
            </Link> 
            </Col>
            <Col className="text-right">
            <Link to={props.next} className="text-white">
                <Button variant="success" block>
                    Sljedeća lekcija
                </Button>
            </Link>
        </Col>
    </Row></footer>;
}

export default Footer;