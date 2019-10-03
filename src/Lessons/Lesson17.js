import React from 'react';
import data from '../Data/L17Data.json';
import PlayerRow from '../Helpers/PlayerHelper';
import VjezbeRow from '../Helpers/VjezbeHelper';
import Footer from '../Body/MainFooter';

// Bootstrap
import {Row, Col, Table} from 'react-bootstrap';

// Other
import '../App.scss';

function L17() {
    return (
        <React.Fragment>
        <Row>
          <Col>
            <h2 className="text-center font-weight-bold text-uppercase">MEDD TABIJJ - obična dužina</h2>
            <h4 className="text-center"></h4>
            <hr/>
          </Col>
        </Row>

        <Row>
          <Col>
          <br></br>
          </Col>
        </Row> 

        <Row>
          <Col className="opisLekcije" >Kada poslije <strong>dugog vokala </strong>A ـــــَـــــ ا , Iــــــِــــ ى  , Uـــــُـــــ و   nema ni <strong>hemzeta</strong> ni <strong>sukuna,</strong>bit će medd tabijj.Traje 2 haraketa, npr.:{ PlayerRow(data, 'row1') } 
          </Col>
        </Row>

        <Row>
          <Col className="text-center">
          { PlayerRow(data, 'row2') } 
          </Col>
        </Row>
        
        <Row>
          <Col className="text-center">
          { PlayerRow(data, 'row3') } 
          </Col>
        </Row>

        <Row>
          <Col>
          <br></br>
          </Col>
        </Row>

        <Row>
          <Col>
            <br></br>
          </Col>
        </Row>

        <h2 className="text-center">Vježbe</h2>
        <hr/>

        <Row className="text-center">
          <Col>
            { VjezbeRow(data, 'vjezba', 'broj12') }
            { VjezbeRow(data, 'vjezba', 'broj11') }
          </Col>
        </Row>

        <Row className="text-center">
          <Col>
            { VjezbeRow(data, 'vjezba', 'broj14') }
            { VjezbeRow(data, 'vjezba', 'broj13') }
          </Col>
        </Row>

        <Row className="text-center">
          <Col>
            { VjezbeRow(data, 'vjezba', 'broj15') }
          </Col>
        </Row>

        <Row className="text-center">
          <Col>
            { VjezbeRow(data, 'vjezba', 'broj17') }
            { VjezbeRow(data, 'vjezba', 'broj16') }
          </Col>
        </Row>

        <Row className="text-center">
          <Col>
            { VjezbeRow(data, 'vjezba', 'broj19') }
            { VjezbeRow(data, 'vjezba', 'broj18') }
          </Col>
        </Row>

        <hr/>

        <Footer prev="/lekcija16" next="/lekcija18" />

        </React.Fragment>
    );
  }

  export default L17;