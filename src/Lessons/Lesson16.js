import React from 'react';
import data from '../Data/L16Data.json';
import PlayerRow from '../Helpers/PlayerHelper';
import VjezbeRow from '../Helpers/VjezbeHelper';
import Footer from '../Body/MainFooter';

// Bootstrap
import {Row, Col, Table} from 'react-bootstrap';

// Other
import '../App.scss';

function L16() {
    return (
        <React.Fragment>
        <Row>
          <Col>
            <h2 className="text-center font-weight-bold text-uppercase">IDGAM MUTEKARIBEJN</h2>
            <h4 className="text-center">uklapanje bliskih harfova</h4>
            <hr/>
          </Col>
        </Row>

        <Row>
          <Col className="opisLekcije">Kada dođu jedan do drugog bliski harfovi, prvi sa <bold>sukunom</bold>, a drugi sa <bold>hareketom</bold>, onda se prvi uklapa u drugi iz iste grupe:
          </Col>
        </Row>

        <Row>
          <Col className="opisLekcije my-3">
            <strong>1.</strong>	Kada poslije harfa Q sa <bold>sukunom</bold> <span class="arapski">(قْ)</span> dođe harf K  (ك) sa <bold>hareketom</bold>:
          </Col>
        </Row>
        
        <Row>
          <Col>
          { PlayerRow(data, 'row1') }
          </Col>
        </Row>

        <Row>
          <Col className="opisLekcije my-3">
            <strong>2.</strong>	Kada poslije harfa L sa sukunom (لْ) dođe harf R (ر) sa hareketom:
          </Col>
        </Row>

        <Row>
          <Col>
            { PlayerRow(data, 'row2') }
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
            { VjezbeRow(data, 'vjezba', 'broj9') }
            { VjezbeRow(data, 'vjezba', 'broj8') }
          </Col>
        </Row>
        <Row className="text-center">
          <Col>
            { VjezbeRow(data, 'vjezba', 'broj10') }
          </Col>
        </Row>

        <Row className="text-center">
          <Col>
            { VjezbeRow(data, 'vjezba', 'broj12') }
            { VjezbeRow(data, 'vjezba', 'broj11') }
          </Col>
        </Row>

        <Row className="text-center">
          <Col>
            { VjezbeRow(data, 'vjezba', 'broj13') }
          </Col>
        </Row>
        <hr/>

        <Footer prev="/lekcija15" next="/lekcija17" />

        </React.Fragment>
    );
  }

  export default L16;