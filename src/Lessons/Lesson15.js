import React from 'react';
import data from '../Data/L15Data.json';
import PlayerRow from '../Helpers/PlayerHelper';
import VjezbeRow from '../Helpers/VjezbeHelper';
import Footer from '../Body/MainFooter';
import { Link } from 'react-router-dom';
import LekcijaMenu from '../Body/LekcijaMenu';

// Bootstrap
import { Row, Col, Container } from 'react-bootstrap';

// Other
import '../App.scss';

function L15() {
    return (
        <React.Fragment>
          <LekcijaMenu broj="15" naziv="IDGAM MUTEDŽANISEJN"></LekcijaMenu>
          <Container>
        <Row>
          <Col>
            <div className="mobileTop">
              <center>
                <img src={process.env.PUBLIC_URL + '/assets/svg/Group 61.svg'} /> 
              </center>
              <h2 className="text-center font-weight-bold text-uppercase">IDGAM MUTEDŽANISEJN</h2>
            </div>
            <h4 className="text-center"><strong>Uklapanje srodnih harfova</strong></h4>
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
          Kada dođu jedan do drugog <u>srodni</u> harfovi od kojih je prvi sa <strong>sukunom</strong>, a drugi sa <strong>hareketom</strong>, onda se prvi uklapa u drugi iz <u>iste grupe</u>:
          </Col>
        </Row>

        <Row>
          
          <Col className="opisLekcije text-left">
          <strong className="">1.</strong>
             <span className="arapski-lekcija">  ط  د  ت  </span> npr.: { PlayerRow(data, 'row1') }
          </Col>
        </Row>
        
        <Row>
          <Col className="opisLekcije text-center">
            { PlayerRow(data, 'row2') }
          </Col>
        </Row>

        <Row>
          <Col className="opisLekcije text-left">
            <strong>2.</strong> <span className="arapski-lekcija">  ظ  ذ  ث </span> npr.: { PlayerRow(data, 'row3') }
          </Col>
        </Row>

        <Row >
          <Col className="opisLekcije text-center">
            { PlayerRow(data, 'row4') }
          </Col>
        </Row>

        <Row >
          <Col className="opisLekcije text-left">
            <strong>3.</strong> <span className="arapski-lekcija"> ب  م </span> npr.: { PlayerRow(data, 'row5') }
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

      <h2 className="text-center"><strong>VJEŽBA</strong></h2>
        <hr/>

        <Row>
				<Col>
					<br />
				</Col>
			</Row> 

			<Row className="text-center">
				<Col className="mobile-row">
					<span className='tacka'>۞</span>
          {VjezbeRow(data, 'vjezba', 'broj13')}
          <span className='tacka'>۞</span>
          {VjezbeRow(data, 'vjezba', 'broj12')}
				</Col>
			</Row>

			<Row className="text-center">
				<Col>
					<span className='tacka'>۞</span>
					{VjezbeRow(data, 'vjezba', 'broj14')}
				</Col>
			</Row>

			<Row className="text-center">
				<Col className="mobile-row">
          <span className='tacka'>۞</span>
          {VjezbeRow(data, 'vjezba', 'broj16')}
          <span className='tacka'>۞</span>
          {VjezbeRow(data, 'vjezba', 'broj15')}
				</Col>
			</Row>

			<Row className="text-center">
				<Col className="mobile-row">
					<span className='tacka'>۞</span>
          {VjezbeRow(data, 'vjezba', 'broj17')}
				</Col>
			</Row>
      <Row className="text-center">
				<Col className="mobile-row">
					<span className='tacka'>۞</span>
          {VjezbeRow(data, 'vjezba', 'broj18')}
				</Col>
			</Row>

        <Footer prev="/lekcija14" next="/lekcija16" />
        </Container>
        </React.Fragment>
    );
  }

  export default L15;