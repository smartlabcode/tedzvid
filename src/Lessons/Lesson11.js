
import React from 'react';
import data from '../Data/L11Data.json';
import PlayerRow from '../Helpers/PlayerHelper';
import VjezbeRow from '../Helpers/VjezbeHelper';
import Footer from '../Body/MainFooter';
import Arabic from '../Letters/Arabic';

// Bootstrap
import {Row, Col} from 'react-bootstrap';

// Other
import '../App.scss';

function L11() {
    return (
        <React.Fragment>
        <Row>
          <Col>
            <h2 className="text-center font-weight-bold text-uppercase">IHFA</h2>
            <h4 className="text-center">skrivanje harfa N (ن)</h4>
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
          Kada poslije harfa <strong>N</strong> sa <strong>sukunom</strong> (<span className="arapski-lekcija" >نْ</span>) ili <strong>tenvina</strong> EN <span className="arapski-lekcija" >ـــًـــ</span> , IN <span className="arapski-lekcija">ـــٍــ</span>  , UN <span className="arapski-lekcija" >ــٌــ</span>  dođe jedan od 15 harfova: <Arabic arabic="ت ث ج د ذ ز س ش ص ض ط ظ ف ق ك" key="arL11"> ت ث ج د ذ ز س ش ص ض ط ظ ف ق ك </Arabic>, onda se harf <strong>N</strong> (<span className="arapski-lekcija" >ن</span>) uči kroz nos u trajanju od 2 hareketa, s tim  da jezik ne dotakne nepce, npr.:
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
          </Col>
        </Row>

        <Row className="text-center">
          <Col>
            { PlayerRow(data, 'row3') }
            { VjezbeRow(data, 'multirow', 'word1') }
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
          {VjezbeRow(data, 'vjezba', 'broj7')}
				</Col>
			</Row>

			<Row className="text-center">
				<Col>
        <span className='tacka'>۞</span>
          {VjezbeRow(data, 'vjezba', 'broj9')}
					<span className='tacka'>۞</span>
					{VjezbeRow(data, 'vjezba', 'broj8')}
				</Col>
			</Row>

			<Row className="text-center">
				<Col>
         
          <span className='tacka'>۞</span>
          {VjezbeRow(data, 'vjezba', 'broj11')} 
          {VjezbeRow(data, 'vjezba', 'broj10')}
				</Col>
			</Row>

		
      <Row className="text-center">
				<Col>
					<span className='tacka'>۞</span>
          {VjezbeRow(data, 'vjezba', 'broj14')}
          <span className='tacka'>۞</span>
          {VjezbeRow(data, 'vjezba', 'broj13')}
          <span className='tacka'>۞</span>
          {VjezbeRow(data, 'vjezba', 'broj12')}
				</Col>
			</Row>
      <Row className="text-center">
				<Col>
					<span className='tacka'>۞</span>
          {VjezbeRow(data, 'vjezba', 'broj16')}
          <span className='tacka'>۞</span>
					{VjezbeRow(data, 'vjezba', 'broj15')}
				</Col>
			</Row>

        <Footer prev="/lekcija10" next="/lekcija12" />

        </React.Fragment>
    );
  }

  export default L11;