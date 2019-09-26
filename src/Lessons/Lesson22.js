import React from 'react';
import data from '../Data/L22Data.json';
import PlayerRow from '../Helpers/PlayerHelper';
import VjezbeRow from '../Helpers/VjezbeHelper';
import Footer from '../Body/MainFooter';

// Bootstrap
import {Row, Col, Table} from 'react-bootstrap';

// Other
import '../App.scss';

function L22() {
    return (
        <React.Fragment>
        <Row>
          <Col>
            <h2 className="text-center font-weight-bold text-uppercase">MEDD MUTTESIL</h2>
            <h4 className="text-center">spojena dužina</h4>
            <hr/>
          </Col>
        </Row>

        <Row>
          <Col className="opisLekcije">
            
Kada poslije dugog vokala A ـــــَـــــ ا , Iــــــِــــ ى  , Uـــــُـــــ و   dođe <strong>hemze</strong> u <u>istoj</u> riječi, bit će medd muttesil. Traje obavezno 4-5 hareketa, npr.: { PlayerRow(data, 'row1') }
        </Col>
        </Row>

        <Row>
          <Col>
            { PlayerRow(data, 'row2') }
          </Col>
        </Row>
        <Row>
          <Col>
            { PlayerRow(data, 'row3') }
          </Col>
        </Row>

        <Row>
          <Col>
            { VjezbeRow(data, 'multirow', 'row4') }
          </Col>
        </Row>

        <h2 className="text-center">Vježbe</h2>
        <hr/>

        <Row className="text-center">
          <Col>

          { VjezbeRow(data, 'vjezba', 'znak') }
            { VjezbeRow(data, 'vjezba', 'broj6') }
          </Col>
        </Row>
        <Row className="text-center">
          <Col>

          { VjezbeRow(data, 'vjezba', 'znak') }
            { VjezbeRow(data, 'vjezba', 'broj8') }
            { VjezbeRow(data, 'vjezba', 'broj7') }
          </Col>
        </Row>
        <Row className="text-center">
          <Col>

          { VjezbeRow(data, 'vjezba', 'znak') }
            { VjezbeRow(data, 'vjezba', 'broj9') }
          </Col>
        </Row>

        <Row className="text-center">
          <Col>

          { VjezbeRow(data, 'vjezba', 'znak') }
            { VjezbeRow(data, 'vjezba', 'broj10') }
          </Col>
        </Row>
        <Row className="text-center">
          <Col>

          { VjezbeRow(data, 'vjezba', 'znak') }
          { VjezbeRow(data, 'vjezba', 'broj11') }
          </Col>
        </Row>
        <hr/>

        <Footer prev="/lekcija21" next="/lekcija1" />

        </React.Fragment>
    );
  }

  export default L22;