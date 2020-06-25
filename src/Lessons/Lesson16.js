import React from 'react';
import data from '../Data/L16Data.json';
import PlayerRow from '../Helpers/PlayerHelper';
import VjezbeRow from '../Helpers/VjezbeHelper';
import Footer from '../Body/MainFooter';
import { Link } from 'react-router-dom';
import LekcijaMenu from '../Body/LekcijaMenu';

// Bootstrap
import { Row, Col, Container } from 'react-bootstrap';

// Other
import '../App.scss';

function L16() {
	return (
		<React.Fragment>
			<LekcijaMenu broj="16" naziv="IDGAM MUTEKARIBEJN"></LekcijaMenu>
			<Container>
			<Row>
				<Col>
					<div className="mobileTop">
					<center>
						<img src={process.env.PUBLIC_URL + '/assets/svg/Group 61.svg'} /> 
					</center>
					<h2 className="text-center font-weight-bold text-uppercase">IDGAM MUTEKARIBEJN</h2>
					</div>
					<h4 className="text-center"><strong>uklapanje bliskih harfova</strong></h4>
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
					Kada dođu jedan do drugog <u>bliski</u> harfovi, prvi sa <strong>sukunom</strong>, a drugi sa{' '}
					<strong>hareketom</strong>, onda se prvi uklapa u drugi iz <u>iste grupe</u>:
				</Col>
			</Row>

			<Row>
				<Col className="opisLekcije my-3">
					1. Kada poslije harfa <strong>Q</strong> sa <strong>sukunom</strong> <span class="arapski">(قْ)</span>{' '}
					dođe harf <strong>K</strong> <span class="arapski">(ك)</span> sa <strong>hareketom</strong>:
				</Col>
			</Row>

			<Row className="text-center">
				<Col>{PlayerRow(data, 'row1')}</Col>
			</Row>

			<Row>
				<Col className="opisLekcije my-3">
					2.  Kada poslije harfa <strong>L</strong> sa <strong>sukunom</strong> <span class="arapski">(لْ)</span> dođe harf <strong>R</strong> <span class="arapski">(ر)</span> sa <strong>hareketom</strong>:
				</Col>
			</Row>

			<Row className="text-center">
				<Col>{PlayerRow(data, 'row2')}</Col>
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
				<Col>
				<span className='tacka'>۞</span>
					{VjezbeRow(data, 'vjezba', 'broj7')}
					{VjezbeRow(data, 'vjezba', 'broj6')}
					<span className='tacka'>۞</span>
					{VjezbeRow(data, 'vjezba', 'broj5')}
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
				<Col><span className='tacka'>۞</span>{VjezbeRow(data, 'vjezba', 'broj10')}</Col>
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
				<Col><span className='tacka'>۞</span>{VjezbeRow(data, 'vjezba', 'broj13')}</Col>
			</Row>

			<Footer prev="/lekcija15" next="/lekcija17" />
			</Container>
		</React.Fragment>
	);
}

export default L16;
