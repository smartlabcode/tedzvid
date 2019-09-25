import React from 'react';
import { Row, Col, Card, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import data from '../Data/lessons.json';


function HomeFirst() {
    let lekcije = data['lekcije']
   
   return  (<React.Fragment> 
   
   {lekcije.map(
        (lekcija,index)=>{
            let number = index*2+1;
            return (<Row className="homearea mt-4">
                <Col>
                    <Link to={"/lekcija"+number} style={{ color: 'inherit' }}><Card>
                        <Card.Body>
                            <Card.Title>{lekcija[0].title} <Badge className="imelekcije" variant="light">Lekcija {number}</Badge></Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">{lekcija[0].subtitle}</Card.Subtitle>
                        </Card.Body>
                    </Card></Link>
                </Col>
                
                <Col>
                    <Link to={"/lekcija"+number+1} style={{ color: 'inherit' }}><Card>
                        <Card.Body>
                            <Card.Title>{lekcija[1].title} <Badge className="imelekcije" variant="light">Lekcija {number+1}</Badge></Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">{lekcija[1].subtitle}</Card.Subtitle>
                        </Card.Body>
                    </Card></Link>
                </Col>
            </Row>)
          
            }
            )}
            </React.Fragment>)

      

}

export default HomeFirst;