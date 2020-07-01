import React from 'react';
// Bootstrap
import { Col, Container, Row } from 'react-bootstrap';
// Other
import '../App.scss';
import LekcijaMenu from '../Body/LekcijaMenu';
import Footer from '../Body/MainFooter';
import data from '../Data/L4Data.json';
import PlayerRow from '../Helpers/PlayerHelper';
import VjezbeRow from '../Helpers/VjezbeHelper';

function L4() {
	return (
		<React.Fragment>
			<LekcijaMenu broj="4" naziv="IDGAM MISLEJN" />
			<Container>
				<Row>
					<Col>
						<div className="mobileTop">
							<center>
								<img alt="demo" src={process.env.PUBLIC_URL + '/assets/svg/Group 61.svg'} />
							</center>
							<h2 className="text-center font-weight-bold text-uppercase">IDGAM MISLEJN</h2>
						</div>
						<h4 className="text-center">
							<strong>uklapanje istih harfova</strong>
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
						Kada poslije bilo kojeg harfa sa{' '}
						<strong>
							sukunom <span className="arapski-lekcija">ـــْــ</span>
						</strong>{' '}
						dođe <u>isti</u> harf sa <strong>hareketom</strong>, dolazi do <u>potpunog</u> uklapanja, tj.
						prvi harf se ne uči, a drugi se uči sa <strong>tešdidom</strong>, npr.:
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
						{VjezbeRow(data, 'vjezba', 'broj11')}
						<span className="tacka">۞</span>
						{VjezbeRow(data, 'vjezba', 'broj10')}
					</Col>
				</Row>

				<Row className="text-center">
					<Col>
						<span className="tacka">۞</span>
						{VjezbeRow(data, 'vjezba', 'broj13')}
						<span className="tacka">۞</span>
						{VjezbeRow(data, 'vjezba', 'broj12')}
					</Col>
				</Row>

				<Row className="text-center">
					<Col>
						<span className="tacka">۞</span>
						{VjezbeRow(data, 'vjezba', 'broj15')}
						<span className="tacka">۞</span>
						{VjezbeRow(data, 'vjezba', 'broj14')}
					</Col>
				</Row>

				<Row className="text-center">
					<Col>
						<span className="tacka">۞</span>
						{VjezbeRow(data, 'vjezba', 'broj17')}
						<span className="tacka">۞</span>
						{VjezbeRow(data, 'vjezba', 'broj16')}
					</Col>
				</Row>
				<Row className="text-center">
					<Col>
						<span className="tacka">۞</span>
						{VjezbeRow(data, 'vjezba', 'broj19')}
						<span className="tacka">۞</span>
						{VjezbeRow(data, 'vjezba', 'broj18')}
					</Col>
				</Row>
				<Row className="text-center">
					<Col />
				</Row>

				<Footer prev="/lekcija3" next="/lekcija5" />
			</Container>
		</React.Fragment>
	);
}

export default L4;
