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
            <h4 className="text-center">čisto izgovaranje harfa N (ن) ili tenvina</h4>
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
          Kada poslije harfa <strong>N</strong> sa <strong>sukunom</strong> (<span className="arapski-lekcija">نْ</span>) ili <strong>tenvina</strong>  EN <span className="arapski-lekcija" style={{ fontSize: '2em' }}>ــــــًــــــ</span> , IN <span className="arapski-lekcija" style={{ fontSize: '2em' }}>ـــــٍــــــ</span>, UN <span className="arapski-lekcija" style={{ fontSize: '2em' }}>ــــــٌـــــ</span> dođe jedan od šest grlenih harfova:<Arabic arabic="ه خ  غ  ح  ع أ" key="a01"> ه خ  غ  ح  ع أ</Arabic>, onda se harf <strong>N</strong> (<span className="arapski-lekcija">ن</span>) izgovara čisto, tj. bez uklapanja, npr.:
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
          <strong>IZHAR MUTLAK</strong> – kada poslije harfa <strong>N</strong> sa sukunom (<span className="arapski-lekcija">نْ</span>) u istoj riječi dođu harf <strong>V</strong> (<span className="arapski-lekcija">و</span>) ili <strong>J</strong> (<span className="arapski-lekcija">ي</span>), harf <strong>N</strong> (<span className="arapski-lekcija">ن</span>) se izgovara čisto, tj. bez uklapanja, npr.:
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

        <h2 className="text-center">Vježbe</h2>
        <hr/>

			<Row className="text-center">
				<Col>
					۞
          {VjezbeRow(data, 'vjezba', 'broj10')}
          ۞
					{VjezbeRow(data, 'vjezba', 'broj9')}
				</Col>
			</Row>

			<Row className="text-center">
				<Col>
					۞
					{VjezbeRow(data, 'vjezba', 'broj12')}
					۞
					{VjezbeRow(data, 'vjezba', 'broj11')}
				</Col>
			</Row>

			<Row className="text-center">
				<Col>
          ۞
          {VjezbeRow(data, 'vjezba', 'broj15')}
					۞
          {VjezbeRow(data, 'vjezba', 'broj14')}
          ۞
          {VjezbeRow(data, 'vjezba', 'broj13')}
				</Col>
			</Row>

			<Row className="text-center">
				<Col>
					۞
          {VjezbeRow(data, 'vjezba', 'broj17')}
          ۞
          {VjezbeRow(data, 'vjezba', 'broj16')}
				</Col>
			</Row>
      <Row className="text-center">
				<Col>
					۞
          {VjezbeRow(data, 'vjezba', 'broj20')}
          ۞
          {VjezbeRow(data, 'vjezba', 'broj19')}
          ۞
          {VjezbeRow(data, 'vjezba', 'broj18')}
				</Col>
			</Row>
      <Row className="text-center">
				<Col>
					۞
          {VjezbeRow(data, 'vjezba', 'broj22')}
          ۞
					{VjezbeRow(data, 'vjezba', 'broj21')}
				</Col>
			</Row>

        

        <Footer prev="/lekcija8" next="/lekcija10" />

        </React.Fragment>
    );
  }

  export default L9;