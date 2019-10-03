import React from 'react';
import data from '../Data/L15Data.json';
import PlayerRow from '../Helpers/PlayerHelper';
import VjezbeRow from '../Helpers/VjezbeHelper';
import Footer from '../Body/MainFooter';

// Bootstrap
import {Row, Col} from 'react-bootstrap';

// Other
import '../App.scss';

function L15() {
    return (
        <React.Fragment>
        <Row>
          <Col>
            <h2 className="text-center font-weight-bold text-uppercase">IDGAM MUTEDŽANISEJN</h2>
            <h4 className="text-center">Uklapanje srodnih harfova</h4>
            <hr/>
          </Col>
        </Row>

        <Row>
				<Col>
					<br />
				</Col>
			</Row>  

        <Row>
          <Col className="opisLekcije">
          Kada dođu jedan do drugog srodni harfovi od kojih je prvi sa <strong>sukunom</strong>, a drugi sa <strong>hareketom</strong>, onda se prvi uklapa u drugi iz iste grupe:
          </Col>
        </Row>

        <Row>
          <Col className="opisLekcije text-center">
            <strong>1.</strong> ط  د  ت npr.: { PlayerRow(data, 'row1') }
          </Col>
        </Row>
        
        <Row>
          <Col className="opisLekcije text-center">
            { PlayerRow(data, 'row2') }
          </Col>
        </Row>

        <Row>
          <Col className="opisLekcije text-center">
            <strong>2.</strong> ظ  ذ  ث npr.: { PlayerRow(data, 'row3') }
          </Col>
        </Row>

        <Row >
          <Col className="opisLekcije text-center">
            { PlayerRow(data, 'row4') }
          </Col>
        </Row>

        <Row >
          <Col className="opisLekcije text-center">
            <strong>3.</strong> ب  م npr.: { PlayerRow(data, 'row5') }
          </Col>
        </Row>

        <Row>
          <Col className="opisLekcije text-center">
            { PlayerRow(data, 'row6') }
          </Col>
        </Row>

        <Row>
				<Col>
					<br />
				</Col>
			</Row>

       <Row>
				<Col>
					<br />
				</Col>
			</Row>    

      <h2 className="text-center">Vježbe</h2>
        <hr/>

			<Row className="text-center">
				<Col>
					۞
          {VjezbeRow(data, 'vjezba', 'broj13')}
          ۞
          {VjezbeRow(data, 'vjezba', 'broj12')}
				</Col>
			</Row>

			<Row className="text-center">
				<Col>
					۞
					{VjezbeRow(data, 'vjezba', 'broj14')}
				</Col>
			</Row>

			<Row className="text-center">
				<Col>
          ۞
          {VjezbeRow(data, 'vjezba', 'broj16')}
          ۞
          {VjezbeRow(data, 'vjezba', 'broj15')}
				</Col>
			</Row>

			<Row className="text-center">
				<Col>
					۞
          {VjezbeRow(data, 'vjezba', 'broj17')}
				</Col>
			</Row>
      <Row className="text-center">
				<Col>
					۞
          {VjezbeRow(data, 'vjezba', 'broj18')}
				</Col>
			</Row>

        <Footer prev="/lekcija14" next="/lekcija16" />

        </React.Fragment>
    );
  }

  export default L15;