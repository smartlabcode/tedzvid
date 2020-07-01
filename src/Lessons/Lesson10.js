import React from 'react';
// Bootstrap
import { Col, Container, Row } from 'react-bootstrap';
// Other
import '../App.scss';
import LekcijaMenu from '../Body/LekcijaMenu';
import Footer from '../Body/MainFooter';
import data from '../Data/L10Data.json';
import PlayerRow from '../Helpers/PlayerHelper';
import VjezbeRow from '../Helpers/VjezbeHelper';

function L10() {
	return (
		<React.Fragment>
			<LekcijaMenu broj="10" naziv="IZHAR ŠEFEVIJJ" />
			<Container>
				<Row>
					<Col>
						<div className="mobileTop">
							<center>
								<img alt="demo" src={process.env.PUBLIC_URL + '/assets/svg/Group 61.svg'} />
							</center>
							<h2 className="text-center font-weight-bold text-uppercase">IZHAR ŠEFEVIJJ</h2>
						</div>
						<h4 className="text-center">
							<strong>čisto izgovaranje harfa M (م)</strong>
						</h4>
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
						Kada harf <strong>M</strong> sa <strong>sukunom</strong> (<span className="arapski-lekcija">مْ</span>)
						dođe ispred <u>bilo kojeg</u> harfa, <u>osim</u> harfova <strong>B</strong> (<span className="arapski-lekcija">ب</span>)
						i{' '}
						<strong>
							M (<span className="arapski-lekcija">م</span>){' '}
						</strong>, onda se harf
						<strong>
							{' '}
							M (<span className="arapski-lekcija">م</span>){' '}
						</strong>{' '}
						izgovara <u>čisto</u>, tj. bez uklapanja, npr.:
					</Col>
				</Row>

				<Row>
					<Col>
						<br />
					</Col>
				</Row>

				<Row className="text-center">
					<Col>
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

				<h2 className="text-center">
					<strong>VJEŽBA</strong>
				</h2>
				<hr />
				<Row>
					<Col>
						<br />
					</Col>
				</Row>
				<Row className="text-center">
					<Col>
						<span className="tacka">۞</span>
						{VjezbeRow(data, 'vjezba', 'broj8')}
						<span className="tacka">۞</span>
						{VjezbeRow(data, 'vjezba', 'broj7')}
						<span className="tacka">۞</span>
						{VjezbeRow(data, 'vjezba', 'broj6')}
					</Col>
				</Row>
				<Row className="text-center">
					<Col>
						<span className="tacka">۞</span>
						{VjezbeRow(data, 'vjezba', 'broj10')}
						<span className="tacka">۞</span>
						{VjezbeRow(data, 'vjezba', 'broj9')}
					</Col>
				</Row>
				<Row className="text-center">
					<Col>
						<span className="tacka">۞</span>
						{VjezbeRow(data, 'vjezba', 'broj11')}
					</Col>
				</Row>
				<Row className="text-center">
					<Col>
						<span className="tacka">۞</span>
						{VjezbeRow(data, 'vjezba', 'broj12')}
					</Col>
				</Row>
				<Row className="text-center">
					<Col>
						<span className="tacka">۞</span>
						{VjezbeRow(data, 'vjezba', 'broj13')}
					</Col>
				</Row>
				<Row className="text-center">
					<Col>
						<span className="tacka">۞</span>
						{VjezbeRow(data, 'vjezba', 'broj14')}
					</Col>
				</Row>
				<Footer prev="/lekcija9" next="/lekcija11" />
			</Container>
		</React.Fragment>
	);
}

export default L10;
