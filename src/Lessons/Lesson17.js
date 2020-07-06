import React from 'react';
import data from '../Data/L17Data.json';
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

function L17() {
	React.useEffect(() => {
		scrollToHash();
	}, []);
	return (
		<React.Fragment>
			<LekcijaMenu broj="17" naziv="MEDD TABIJJ"></LekcijaMenu>
			<Container>
			<Row>
				<Col>
				<div className="mobileTop">
					<center>
						<img src={process.env.PUBLIC_URL + '/assets/svg/Group 61.svg'} /> 
					</center>
					<h2 className="text-center font-weight-bold text-uppercase" id="lekcija">MEDD TABIJJ</h2>
					</div>
					<h4 className="text-center font-weight-bold">obična dužina</h4>
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
					Kada poslije <strong>dugog vokala </strong>A  <span className="arapski-lekcija">ـــَــ ا</span> , I <span className="arapski-lekcija">ـــِـ ى </span>, U <span className="arapski-lekcija">ـــُــ و</span> nema ni{' '}
					<strong>hemzeta</strong> ni <strong>sukuna,</strong>bit će medd tabijj.Traje 2 haraketa, npr.:{PlayerRow(data, 'row1')}
				</Col>
			</Row>

			<Row>
				<Col className="text-center">{PlayerRow(data, 'row2')}</Col>
			</Row>

			<Row>
				<Col className="text-center">{PlayerRow(data, 'row3')}</Col>
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
					<span className='tacka'>{VjezbeRow(data, 'vjezba', 'broj11')} ۞</span>
					<span className='tacka'>{VjezbeRow(data, 'vjezba', 'broj12')} ۞</span>
				</Col>
			</Row>

			<Row className="text-center">
				<Col className="mobile-row">
					<span className='tacka'>{VjezbeRow(data, 'vjezba', 'broj13')} ۞</span>
					<span className='tacka'>{VjezbeRow(data, 'vjezba', 'broj14')} ۞</span>
				</Col>
			</Row>

			<Row className="text-center">
				<Col><span className='tacka'>۞</span>{VjezbeRow(data, 'vjezba', 'broj15')}</Col>
			</Row>

			<Row className="text-center">
				<Col className="mobile-row">
					{VjezbeRow(data, 'vjezba', 'broj16')}
					<span className='tacka'>{VjezbeRow(data, 'vjezba', 'broj17')} ۞</span>
				</Col>
			</Row>

			<Row className="text-center">
				<Col className="mobile-row">
					<span className='tacka'>{VjezbeRow(data, 'vjezba', 'broj18')} ۞</span>
					<span className='tacka'>{VjezbeRow(data, 'vjezba', 'broj19')} ۞</span>
				</Col>
			</Row>

			<Footer prev="/lekcija16" next="/lekcija18" />
			</Container>
		</React.Fragment>
	);
}

export default L17;
