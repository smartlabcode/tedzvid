
import React from 'react';
import data from '../Data/L11Data.json';
import PlayerRow from '../Helpers/PlayerHelper';
import VjezbeRow from '../Helpers/VjezbeHelper';
import Footer from '../Body/MainFooter';
import Arabic from '../Letters/Arabic';
import { Link } from 'react-router-dom';
import LekcijaMenu from '../Body/LekcijaMenu';

// Bootstrap
import { Row, Col, Container } from 'react-bootstrap';

// Other
import '../App.scss';

function L11() {
    return (
        <React.Fragment>    
        <LekcijaMenu broj="11" naziv="IHFA"></LekcijaMenu>
        <Container>
        <Row>
          <Col>
            <div className="mobileTop">
              <center>
                <img src={process.env.PUBLIC_URL + '/assets/svg/Group 61.svg'} /> 
              </center>
              <h2 className="text-center font-weight-bold text-uppercase">IHFA</h2>
            </div>
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
				<Col className="mobile-row">
					<span className='tacka'>{VjezbeRow(data, 'vjezba', 'broj7')} ۞</span>
				</Col>
			</Row>

			<Row className="text-center">
				<Col className="mobile-row">
          <span className='tacka'>{VjezbeRow(data, 'vjezba', 'broj8')} ۞</span>
          <span className='tacka'>{VjezbeRow(data, 'vjezba', 'broj9')} ۞</span>
				</Col>
			</Row>

			<Row className="text-center">
				<Col className="mobile-row">
        <span className='tacka'>{VjezbeRow(data, 'vjezba', 'broj10')} ۞</span>
          <span className='tacka'>{VjezbeRow(data, 'vjezba', 'broj11')} ۞</span>
				</Col>
			</Row>

		
      <Row className="text-center">
				<Col className="mobile-row">
          <span className='tacka'>{VjezbeRow(data, 'vjezba', 'broj12')} ۞</span>
          <span className='tacka'>{VjezbeRow(data, 'vjezba', 'broj13')} ۞</span>
					<span className='tacka'>{VjezbeRow(data, 'vjezba', 'broj14')} ۞</span>
				</Col>
			</Row>
      <Row className="text-center">
				<Col className="mobile-row">
          <span className='tacka'>{VjezbeRow(data, 'vjezba', 'broj15')} ۞</span>
					<span className='tacka'>{VjezbeRow(data, 'vjezba', 'broj16')} ۞</span>
				</Col>
			</Row>

        <Footer prev="/lekcija10" next="/lekcija12" />
        </Container>
        </React.Fragment>
    );
  }

  export default L11;