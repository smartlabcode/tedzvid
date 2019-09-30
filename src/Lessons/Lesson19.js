import React from 'react';
import data from '../Data/L19Data.json';
import PlayerRow from '../Helpers/PlayerHelper';
import VjezbeRow from '../Helpers/VjezbeHelper';
import Footer from '../Body/MainFooter';

// Bootstrap
import {Row, Col, Table} from 'react-bootstrap';

// Other
import '../App.scss';

function L19() {
    return (
        <React.Fragment>
        <Row>
          <Col>
            <h2 className="text-center font-weight-bold text-uppercase">MEDD MUNFESIL-</h2>
            <h4 className="text-center">rastavljena dužina</h4>
          </Col>
        </Row>

        <Row>
          <Col>
          <br></br>
          </Col>
        </Row>

        <Row>
          <Col className="opisLekcije">
          Kada poslije <strong>dugog vokala</strong> A ـــــَـــــ ا , Iــــــِــــ ى  , Uـــــُـــــ و   dođe <strong>hemze</strong> ili <strong>elif</strong> na početku sljedeće riječi, bit će medd munfesil. Traje 4-5 hareketa,npr.: { PlayerRow(data, 'row1') }
          </Col>
        </Row>

        <Row className="text-center">
        <pre>                  </pre>„turska štampa“<pre>        </pre>„medinska štampa“       
        </Row>

        <Row className="text-center">
          <Col>
          { VjezbeRow(data, 'rows', 'row2lijevi') } { VjezbeRow(data, 'rows', 'row2desni') }
          </Col>
        </Row>
        <Row className="text-center">
        <Col>
          { VjezbeRow(data, 'rows', 'row3lijevi') } { VjezbeRow(data, 'rows', 'row3desni') }
          </Col>
        </Row>
        <Row className="text-center">
        <Col>
          { VjezbeRow(data, 'rows', 'row4lijevi') } { VjezbeRow(data, 'rows', 'row4desni') }
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
          { VjezbeRow(data, 'vjezba', 'broj7') }
          { VjezbeRow(data, 'vjezba', 'broj6') }
          { VjezbeRow(data, 'vjezba', 'broj5') }
          </Col>
        </Row>
        
        <Row className="text-center">
          <Col>
            { VjezbeRow(data, 'vjezba', 'broj8') }
          </Col>
        </Row>

        <Row className="text-center">
          <Col>
          { VjezbeRow(data, 'vjezba', 'broj10') }
          { VjezbeRow(data, 'vjezba', 'broj9') }
          </Col>
        </Row>

        <Row className="text-center">
          <Col>
          { VjezbeRow(data, 'vjezba', 'broj11') }
          </Col>
        </Row>
        
        <Row className="text-center">
          <Col>
          { VjezbeRow(data, 'vjezba', 'broj13') }
          { VjezbeRow(data, 'vjezba', 'broj12') }
          </Col>
        </Row>
        <hr/>

        <Footer prev="/lekcija18" next="/lekcija20" />

        </React.Fragment>
    );
  }

  export default L19;