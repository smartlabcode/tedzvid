import React, { useState } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import First from '../Body/HomeFirst';


function Home() {
    const [otherpage, pageClick] = useState(false);

    const pageClickHandler = () => {
        return pageClick(!otherpage);
    }

    return <React.Fragment>
            { !otherpage ? <First start={0} stop={6} /> : <First start={6} stop={11}/> } 
        <Row className="homearea mt-4">
            <Col className="text-right">
                <Button onClick={pageClickHandler} variant="light" size="md" block>
                    { !otherpage ? "Lekcije od 13 do 22" : "Lekcije od 1 do 12" }
                </Button>
            </Col>
        </Row>

    </React.Fragment>
}

export default Home;