import React from 'react';
import data from '../Data/L9Data.json';
import PlayerRow from '../Helpers/PlayerHelper';
import VjezbeRow from '../Helpers/VjezbeHelper';
import Footer from '../Body/MainFooter';
import Arabic from '../Letters/Arabic';

// Bootstrap
import {Row, Col} from 'react-bootstrap';

// Other
import '../App.scss';

function L9() {
    return (
        <React.Fragment>
        <Row>
          <Col>
            <h2 className="text-center font-weight-bold text-uppercase">IZHAR HALKIJJ</h2>
            <h4 className="text-center"><strong>čisto izgovaranje harfa N (ن) ili tenvina</strong></h4>
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

          Kada poslije harfa <strong>N</strong> sa <strong>sukunom</strong> (<span className="arapski-lekcija" >نْ</span>) ili <strong>tenvina</strong> EN <span className="arapski-lekcija" >ـــًـــ</span> , IN <span className="arapski-lekcija">ـــٍــ</span>  , UN <span className="arapski-lekcija" >ــٌــ</span> dođe jedan od šest grlenih harfova:<span className="arapski-lekcija" style={{color:"red"}} >   أ</span><span className="arapski-lekcija" style={{color:"red"}} >   ع</span><span className="arapski-lekcija" style={{color:"red"}} >   ح</span><span className="arapski-lekcija" style={{color:"red"}} >   غ</span><span className="arapski-lekcija" style={{color:"red"}} >   خ</span><span className="arapski-lekcija" style={{color:"red"}} >   ه</span>         onda se harf <strong>N</strong> (<span className="arapski-lekcija">ن</span>) izgovara <u>čisto</u>, tj. bez uklapanja, npr.:

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
            { VjezbeRow(data, 'multirow', 'word1') }
          </Col>
        </Row>

        <Row>
          <Col className="opisLekcije">
          <strong>IZHAR MUTLAK</strong> – kada poslije harfa <strong>N</strong> sa sukunom (<span className="arapski-lekcija">نْ</span>) <u>u istoj riječi</u> dođu harf <strong>V</strong> (<span className="arapski-lekcija">و</span>) ili <strong>J</strong> (<span className="arapski-lekcija">ي</span>), harf <strong>N</strong> (<span className="arapski-lekcija">ن</span>) se izgovara <u>čisto</u>, tj. bez uklapanja, npr.:
          </Col>
        </Row>

        <Row className="text-center">
          <Col>
            { PlayerRow(data, 'row3') }
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
        <Row>
				<Col>
					<br />
				</Col>
			</Row>

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
					{VjezbeRow(data, 'vjezba', 'broj12')}
					<span className='tacka'>۞</span>
					{VjezbeRow(data, 'vjezba', 'broj11')}
				</Col>
			</Row>

			<Row className="text-center">
				<Col>
          <span className='tacka'>۞</span>
          {VjezbeRow(data, 'vjezba', 'broj15')}
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
				</Col>
			</Row>
      <Row className="text-center">
				<Col>
					<span className='tacka'>۞</span>
          {VjezbeRow(data, 'vjezba', 'broj20')}
          <span className='tacka'>۞</span>
          {VjezbeRow(data, 'vjezba', 'broj19')}
          <span className='tacka'>۞</span>
          {VjezbeRow(data, 'vjezba', 'broj18')}
				</Col>
			</Row>
      <Row className="text-center">
				<Col>
					<span className='tacka'>۞</span>
          {VjezbeRow(data, 'vjezba', 'broj22')}
          <span className='tacka'>۞</span>
					{VjezbeRow(data, 'vjezba', 'broj21')}
				</Col>
			</Row>

        

        <Footer prev="/lekcija8" next="/lekcija10" />

        </React.Fragment>
    );
  }

  export default L9;