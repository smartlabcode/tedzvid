import React from 'react';
import data from '../Data/L10Data.json';
import PlayerRow from '../Helpers/PlayerHelper';
import VjezbeRow from '../Helpers/VjezbeHelper';
import Footer from '../Body/MainFooter';
import { Link } from 'react-router-dom';
import LekcijaMenu from '../Body/LekcijaMenu';

// Bootstrap
import { Row, Col, Container } from 'react-bootstrap';

// Other
import '../App.scss';

function L10() {
	return (
		<React.Fragment>
			<LekcijaMenu broj="10" naziv="IZHAR ŠEFEVIJJ"></LekcijaMenu>
			<Container>
			<Row>
				<Col>
					<div className="mobileTop">
						<center>
							<img src={process.env.PUBLIC_URL + '/assets/svg/Group 61.svg'} /> 
						</center>
						<h2 className="text-center font-weight-bold text-uppercase">IZHAR ŠEFEVIJJ</h2>
					</div>
					<h4 className="text-center"><strong>čisto izgovaranje harfa M (م)</strong></h4>
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

					Kada harf <strong>M</strong> sa <strong>sukunom</strong> (<span className="arapski-lekcija">مْ</span>) dođe ispred <u>bilo kojeg</u> harfa, <u>osim</u> harfova <strong>B</strong> (<span className="arapski-lekcija">ب</span>) i <strong>M (<span className="arapski-lekcija" >م</span>) </strong>, onda se harf
					<strong> M (<span className="arapski-lekcija">م</span>) </strong> izgovara <u>čisto</u>, tj. bez uklapanja, npr.:

				</Col>
			</Row>

			<Row>
				<Col>
					<br />
				</Col>
			</Row>

			<Row className="text-center">
				<Col >
					{VjezbeRow(data, 'multirow', 'word1')}
					{PlayerRow(data, 'row1')}
				</Col>
			</Row>
			<Row className="text-center">
				<Col>{VjezbeRow(data, 'multirow', 'word2')}</Col>
			</Row>
			<Row className="text-center">
				<Col>{VjezbeRow(data, 'multirow', 'word3')}</Col>
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
					<span className='tacka'>{VjezbeRow(data, 'vjezba', 'broj6')} ۞</span>
					<span className='tacka'>{VjezbeRow(data, 'vjezba', 'broj7')} ۞</span>
					<span className='tacka'>{VjezbeRow(data, 'vjezba', 'broj8')} ۞</span>
				</Col>
			</Row>
			<Row className="text-center">
				<Col className="mobile-row">
					<span className='tacka'>{VjezbeRow(data, 'vjezba', 'broj9')} ۞</span>
					<span className='tacka'>{VjezbeRow(data, 'vjezba', 'broj10')} ۞</span>
				</Col>
			</Row>
			<Row className="text-center">
				<Col className="mobile-row">
					<span className='tacka'>{VjezbeRow(data, 'vjezba', 'broj11')} ۞</span>
				</Col>
			</Row>
			<Row className="text-center">
				<Col className="mobile-row">
					<span className='tacka'>{VjezbeRow(data, 'vjezba', 'broj12')} ۞</span>
				</Col>
			</Row>
			<Row className="text-center">
				<Col className="mobile-row">
					<span className='tacka'>{VjezbeRow(data, 'vjezba', 'broj13')} ۞</span>
				</Col>
			</Row>
			<Row className="text-center">
				<Col className="mobile-row">
					<span className='tacka'>{VjezbeRow(data, 'vjezba', 'broj14')} ۞</span>
				</Col>
			</Row>
			<Footer prev="/lekcija9" next="/lekcija11" />
			</Container>
		</React.Fragment>
	);
}

export default L10;
