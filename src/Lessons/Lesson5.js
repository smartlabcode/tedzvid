import React from 'react';
import data from '../Data/L5Data.json';
import PlayerRow from '../Helpers/PlayerHelper';
import VjezbeRow from '../Helpers/VjezbeHelper';
import Footer from '../Body/MainFooter';
import { Link } from 'react-router-dom';
import LekcijaMenu from '../Body/LekcijaMenu';

// Bootstrap
import { Row, Col, Container } from 'react-bootstrap';

// Other
import '../App.scss';

function scrollToHash() {
	/* Obtain hash from current location (and trim off leading #) */
	const id = window.location.hash.substr(1);

	if (id) {
		/* Find matching element by id */
		const anchor = document.getElementById(id);

		if (anchor) {
			/* Scroll to that element if present */
			anchor.scrollIntoView();
		}
	}
}

function L5() {
	React.useEffect(() => {
		scrollToHash();
	}, []);
	return (
		<React.Fragment>
			<LekcijaMenu broj="5" naziv="IDGAM MISLEJN MEAL-GUNNEH"></LekcijaMenu>
			
		<Container>
			<Row>
				<Col>
				<div className="mobileTop">
						<center>
							<img src={process.env.PUBLIC_URL + '/assets/svg/Group 61.svg'} /> 
						</center>
						<h2 className="text-center font-weight-bold text-uppercase" id="lekcija">IDGAM MISLEJN MEAL-GUNNEH</h2>
					</div>
					<h4 className="text-center"><strong>uklapanje istih harfova sa propuštanjem zraka kroz nos</strong></h4>
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
					Kada poslije harfa <strong>M</strong> <span className="arapski-lekcija">(م)</span> sa <strong>sukunom</strong> dođe harf <strong>M</strong>
					<span className="arapski-lekcija" > (م) </span>sa <strong>hareketom</strong>, dolazi do <u>uklapanja</u> harfa <strong>M</strong>
					<span className="arapski-lekcija" > (م)</span> sa <strong>sukunom</strong> u harf <strong>M</strong>
					<span className="arapski-lekcija" > (م)</span> sa <strong>hareketom</strong>, uz propuštanje zraka kroz nos u trajanju
					od 2 hareketa, npr.:
				</Col>
			</Row>

			<Row className="text-center">
				<Col>{PlayerRow(data, 'row1')}</Col>
			</Row>

			<Row className="text-center">
				<Col>{PlayerRow(data, 'row2')}</Col>
			</Row>

			<Row className="text-center">
				<Col>{PlayerRow(data, 'row3')}</Col>
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

			<h2 className="text-center" id="vjezba"><strong>VJEŽBA</strong></h2>
			<hr />
			<Row>
				<Col>
					<br />
				</Col>
			</Row>

			<Row className="text-center">
				<Col className="mobile-row">
					<span className='tacka'>{VjezbeRow(data, 'vjezba', 'broj8')} ۞</span>
				</Col>
			</Row>

			<Row className="text-center">
				<Col className="mobile-row">
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
			<Row className="text-center">
				<Col className="mobile-row">
					<span className='tacka'>{VjezbeRow(data, 'vjezba', 'broj17')} ۞</span>
				</Col>
			</Row>

			<Footer prev="/lekcija4" next="/lekcija6" />
			</Container>
		</React.Fragment>
	);
}

export default L5;
