import React from 'react';
// Bootstrap
import { Col, Container, Row } from 'react-bootstrap';
// Other
import '../App.scss';
import LekcijaMenu from '../Body/LekcijaMenu';
import Footer from '../Body/MainFooter';
import data from '../Data/L8Data.json';
import PlayerRow from '../Helpers/PlayerHelper';
import VjezbeRow from '../Helpers/VjezbeHelper';

function L8() {
	return (
		<React.Fragment>
			<LekcijaMenu broj="8" naziv="IKLAB" />
			<Container>
				<Row>
					<Col>
						<div className="mobileTop">
							<center>
								<img alt="demo" src={process.env.PUBLIC_URL + '/assets/svg/Group 61.svg'} />
							</center>
							<h2 className="text-center font-weight-bold text-uppercase">IKLAB</h2>
						</div>
						<h4 className="text-center">
							<strong>pretvaranje harfa N (ن) u harf M (م)</strong>
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
						Kada poslije harfa <strong>N</strong> sa <strong>sukunom</strong> (<span className="arapski-lekcija">نْ</span>)
						ili <strong>tenvina</strong> EN <span className="arapski-lekcija">ـــًـــ</span> , IN{' '}
						<span className="arapski-lekcija">ـــٍــ</span> , UN{' '}
						<span className="arapski-lekcija">ــٌــ</span> dođe harf <strong>B</strong> (<span className="arapski-lekcija">ب</span>),
						onda se harf <strong>N</strong> (<span className="arapski-lekcija">ن</span>) <u>pretvara</u> u
						harf{' '}
						<strong>
							M (<span className="arapski-lekcija">م</span>){' '}
						</strong>u trajanju od 2 hareketa:
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
						{VjezbeRow(data, 'vjezba', 'broj10')}
						<span className="tacka">۞</span>
						{VjezbeRow(data, 'vjezba', 'broj9')}
						<span className="tacka">۞</span>
						{VjezbeRow(data, 'vjezba', 'broj8')}
					</Col>
				</Row>
				<Row className="text-center">
					<Col>
						<span className="tacka">۞</span>
						{VjezbeRow(data, 'vjezba', 'broj12')}
						<span className="tacka">۞</span>
						{VjezbeRow(data, 'vjezba', 'broj11')}
					</Col>
				</Row>
				<Row className="text-center">
					<Col>
						<span className="tacka">۞</span>
						{VjezbeRow(data, 'vjezba', 'broj14')}
						<span className="tacka">۞</span>
						{VjezbeRow(data, 'vjezba', 'broj13')}
					</Col>
				</Row>
				<Row className="text-center">
					<Col>
						<span className="tacka">۞</span>
						{VjezbeRow(data, 'vjezba', 'broj16')}
						<span className="tacka">۞</span>
						{VjezbeRow(data, 'vjezba', 'broj15')}
					</Col>
				</Row>
				<Row className="text-center">
					<Col>
						<span className="tacka">۞</span>
						{VjezbeRow(data, 'vjezba', 'broj17')}
					</Col>
				</Row>{' '}
				<Row className="text-center">
					<Col>
						<span className="tacka">۞</span>
						{VjezbeRow(data, 'vjezba', 'broj18')}
					</Col>
				</Row>
				<Footer prev="/lekcija7" next="/lekcija9" />
			</Container>
		</React.Fragment>
	);
}

export default L8;
