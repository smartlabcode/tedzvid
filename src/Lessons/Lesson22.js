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
            <h2 className="text-center font-weight-bold text-uppercase">MEDD LIN</h2>
            <h4 className="text-center">poluvokalna dužina</h4>
            <hr/>
          </Col>
        </Row>

        <Row>
          <Col>
          <br></br>
          </Col>
        </Row> 

        <Row>
          <Col className="opisLekcije">
              Kada harfovi <strong>V</strong> ili <strong>J</strong> budu sa <strong>sukunom (يْ/وْ)</strong>, prije njih <strong>kratki vokal</strong> E ـــــَـــــ , a poslije njih harf sa <strong>sukunom</strong>, bit će medd lin, npr.:
          </Col>
        </Row>

        <Row className="text-center">
          <Col>
          { PlayerRow(data, 'row1lijevi') }{ PlayerRow(data, 'row1desni') }
          </Col>
        </Row>

        <Row>
          <Col>
          <br></br>
          </Col>
        </Row> 

        <Row >
          <Col>
             Ta dužina na harfu <strong>V</strong> (و) ili <strong>J</strong> (ى) traje  2-4-6 hareketa.
          </Col>
        </Row>

        <Row>
          <Col>
          <br></br>
          </Col>
        </Row> 

        <Row className="text-center">
          <Col>
          { PlayerRow(data, 'row2') }
          </Col>
        </Row>

        <Row className="text-center">
          <Col>
            { PlayerRow(data, 'row3') }
          </Col>
        </Row>

        <Row className="text-center">
          <Col>
            { PlayerRow(data, 'row4') }
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
            { VjezbeRow(data, 'vjezba', 'broj9') }
            { VjezbeRow(data, 'vjezba', 'broj8') }
          </Col>
        </Row>

        <Row className="text-center">
          <Col>
            { VjezbeRow(data, 'vjezba', 'broj11') }
            { VjezbeRow(data, 'vjezba', 'broj10') }
          </Col>
        </Row>

        <Row className="text-center">
          <Col>
            { VjezbeRow(data, 'vjezba', 'broj13') }
            { VjezbeRow(data, 'vjezba', 'broj12') }
          </Col>
        </Row>

        <Row className="text-center">
          <Col>          
            { VjezbeRow(data, 'vjezba', 'broj14') }
            { VjezbeRow(data, 'vjezba', 'broj15') }
          </Col>
        </Row>
      
        <hr/>

        <Footer prev="/lekcija21" next="/lekcija1" />

        </React.Fragment>
    );
  }

  export default L22;