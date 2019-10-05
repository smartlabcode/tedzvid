import React from 'react';
import data from '../Data/L13Data.json';
import PlayerRow from '../Helpers/PlayerHelper';
import VjezbeRow from '../Helpers/VjezbeHelper';
import Footer from '../Body/MainFooter';
import Arabic from '../Letters/Arabic';

// Bootstrap
import {Row, Col} from 'react-bootstrap';

// Other
import '../App.scss';

function L13() {
    return (
        <React.Fragment>
        <Row>
          <Col>
            <h2 className="text-center font-weight-bold text-uppercase">KALKALA</h2>
            <h4 className="text-center">odskakanje harfova</h4>
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
          Kada sa <strong>sukunom</strong> (<span className="arapski-lekcija" style={{ fontSize: '1.7em' }}>ـــْـــ</span>) dođe jedan od pet harfova: <Arabic key="ar1l13" arabic="د ج ب ط ق">د ج ب ط ق</Arabic> (sadržanih u izrazu <strong>kutbu džeddin</strong> - <span className="arapski-lekcija" style={{ fontSize: '2.35em' }}>قُطْبُ جَدٍّ</span> ), dolazi do odskakanja navedenih harfova, npr.:
          </Col>
        </Row>

              
      <Row>
				<Col>
					<br />
				</Col>
			</Row>

        <Row className="text-center">
          <Col>
            { PlayerRow(data, 'row1') }
          </Col>
        </Row>

        <Row className="text-center">
          <Col>
            { PlayerRow(data, 'row2') }
            { VjezbeRow(data, 'multirow', 'row2') }
          </Col>
        </Row>

        <Row className="text-center">
          <Col>
            { VjezbeRow(data, 'multirow', 'row3') }
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

      <h2 className="text-center"><strong>VJEŽBA</strong></h2>
        <hr/>

			<Row className="text-center">
				<Col>
					<span className='tacka'>۞</span>
          {VjezbeRow(data, 'vjezba', 'broj10')}
          <span className='tacka'>۞</span>
          {VjezbeRow(data, 'vjezba', 'broj9')}
				</Col>
			</Row>

			<Row className="text-center">
				<Col>
					<span className='tacka'>۞</span>
					{VjezbeRow(data, 'vjezba', 'broj11')}
				</Col>
			</Row>

			<Row className="text-center">
				<Col>
          <span className='tacka'>۞</span>
          {VjezbeRow(data, 'vjezba', 'broj12')}
				</Col>
			</Row>

			<Row className="text-center">
				<Col>
					<span className='tacka'>۞</span>
          {VjezbeRow(data, 'vjezba', 'broj14')}
          <span className='tacka'>۞</span>
          {VjezbeRow(data, 'vjezba', 'broj13')}
				</Col>
			</Row>
      <Row className="text-center">
				<Col>
					<span className='tacka'>۞</span>
          {VjezbeRow(data, 'vjezba', 'broj17')}
          <span className='tacka'>۞</span>
          {VjezbeRow(data, 'vjezba', 'broj16')}
          <span className='tacka'>۞</span>
          {VjezbeRow(data, 'vjezba', 'broj15')}
				</Col>
			</Row>

        <Footer prev="/lekcija12" next="/lekcija14" />

        </React.Fragment>
    );
  }

  export default L13;