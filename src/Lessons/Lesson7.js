import React from 'react';
import data from '../Data/L7Data.json';
import PlayerRow from '../Helpers/PlayerHelper';
import VjezbeRow from '../Helpers/VjezbeHelper';
import Footer from '../Body/MainFooter';
import { Link } from 'react-router-dom';
import LekcijaMenu from '../Body/LekcijaMenu';

// Bootstrap
import { Row, Col, Container } from 'react-bootstrap';

// Other
import '../App.scss';

function L7() {
	return (
		<React.Fragment>
			<LekcijaMenu broj="7" naziv="IDGAM BILA GUNNEH"></LekcijaMenu>
			<Container>
			<Row>
				<Col>
					<div className="mobileTop">
						<center>
							<img src={process.env.PUBLIC_URL + '/assets/svg/Group 61.svg'} /> 
						</center>
						<h2 className="text-center font-weight-bold text-uppercase">IDGAM BILA GUNNEH</h2>
					</div>
					<h4 className="text-center"><strong>uklapanje bez propuštanja zraka kroz nos</strong></h4>
					<hr />
				</Col>
			</Row>
			<Row>
				<Col>
					<br />
				</Col>
			</Row>
			<Row>
				<Col className="opisLekcije">
				Kada poslije harfa <strong>N</strong> sa <strong>sukunom</strong> (<span className="arapski-lekcija" >نْ</span>) ili <strong>tenvina</strong> EN <span className="arapski-lekcija" >ـــًـــ</span> , IN <span className="arapski-lekcija">ـــٍــ</span>  , UN <span className="arapski-lekcija" >ــٌــ</span> dođe
					harf <strong>L</strong> <span className="arapski-lekcija">(ل) </span>ili <strong>R</strong>{' '}
					<span className="arapski-lekcija">(ر)</span>, dolazi do <u>potpunog</u> uklapanja harfa <strong>N </strong><span className="arapski-lekcija"> (ن)</span>{' '}
					u harf <strong>L</strong> <span className="arapski-lekcija">(ل)</span>, odnosno, <strong>R</strong>{' '}
					<span className="arapski-lekcija">(ر)</span>, tj. <strong>N</strong> <span className="arapski-lekcija">(ن)</span>se
					nikako ne uči, npr.:
				</Col>
			</Row>
			<Row>
				<Col>
					<br />
				</Col>
			</Row>
			<Row className="text-center">
				<Col>{PlayerRow(data, 'row1')}</Col>
			</Row>
			<Row className="text-center">
				<Col>
					{VjezbeRow(data, 'multirow', 'word1')}
					{PlayerRow(data, 'row2')}
				</Col>
			</Row>
			<Row className="text-center">
				<Col>{VjezbeRow(data, 'multirow', 'word2')}</Col>
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
			<hr />
			<Row>
				<Col>
					<br />
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
				</Col>
			</Row>
			<Row className="text-center">
				<Col className="mobile-row">
					<span className='tacka'>{VjezbeRow(data, 'vjezba', 'broj14')} ۞</span>
				</Col>
			</Row>
			<Row className="text-center">
				<Col className="mobile-row">
					<span className='tacka'>{VjezbeRow(data, 'vjezba', 'broj15')} ۞</span>
				</Col>
			</Row>
			<Row className="text-center">
				<Col className="mobile-row">
					<span className='tacka'>{VjezbeRow(data, 'vjezba', 'broj16')} ۞</span>
				</Col>
			</Row>{' '}
			<Footer prev="/lekcija6" next="/lekcija8" />
			</Container>
		</React.Fragment>
	);
}

export default L7;
