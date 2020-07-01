import React from 'react';
// Bootstrap
import { Col, Container, Row } from 'react-bootstrap';
// Other
import '../App.scss';
import LekcijaMenu from '../Body/LekcijaMenu';
import Footer from '../Body/MainFooter';
import data from '../Data/L2Data.json';
import PlayerRow from '../Helpers/PlayerHelper';
import VjezbeRow from '../Helpers/VjezbeHelper';

function L2() {
	return (
		<React.Fragment>
			<LekcijaMenu broj="2" naziv="Damir" />
			<Container>
				<Row>
					<Col>
						<div className="mobileTop">
							<center>
								<img src={process.env.PUBLIC_URL + '/assets/svg/Group 61.svg'} />
							</center>

							<h2 className="text-center font-weight-bold text-uppercase">Damir</h2>
						</div>
						<h4 className="text-center">
							<strong>izgovaranje zamjenice HU (هُ)</strong>
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
						Kada prije zamjenice{' '}
						<strong>
							HU (<span className="arapski-lekcija "> هُ</span>)
						</strong>{' '}
						dođe <strong>dugi vokal </strong>A <span className="arapski-lekcija">ـــَــ ا</span> , I{' '}
						<span className="arapski-lekcija">ـــِـ ى </span>, U{' '}
						<span className="arapski-lekcija">ـــُــ و</span> ili
						<strong>
							{' '}
							sukun <span className="arapski-lekcija">ــــْـــ</span>
						</strong>{' '}
						, zamjenica{' '}
						<strong>
							HU (<span className="arapski-lekcija">هُ</span>)
						</strong>{' '}
						se uči <u>kratko</u>:
					</Col>
				</Row>

				<Row className="text-center">
					<Col>{PlayerRow(data, 'row1')}</Col>
				</Row>

				<Row className="text-center">
					<Col>{PlayerRow(data, 'row2')}</Col>
				</Row>

				<Row>
					<Col className="opisLekcije">
						Kada prije zamjenice{' '}
						<strong>
							HU (<span className="arapski-lekcija">هُ</span>)
						</strong>{' '}
						dođe
						<strong> kratki vokal</strong> E <span className="arapski-lekcija">ــــَـــ</span> , I{' '}
						<strong>
							<span className="arapski-lekcija">ــــِــ </span>
						</strong>
						ili U{' '}
						<strong>
							<span className="arapski-lekcija">ــــُـــ</span>
						</strong>
						, zamjenica{' '}
						<strong>
							HU (<span className="arapski-lekcija">هُ</span>)
						</strong>{' '}
						se uči <u>dugo</u>:
					</Col>
				</Row>

				<Row className="text-center">
					<Col>{PlayerRow(data, 'row3')}</Col>
				</Row>

				<Row className="text-center">
					<Col>{PlayerRow(data, 'row4')}</Col>
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
					<Col className="mobile-row">
						<span className="tacka">۞</span>
						{VjezbeRow(data, 'vjezba', 'broj13')}
						<span className="tacka">۞</span>
						{VjezbeRow(data, 'vjezba', 'broj12')}
						<span className="tacka">۞</span>
						{VjezbeRow(data, 'vjezba', 'broj11')}
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
					<Col>
						<span className="tacka">۞</span>
						{VjezbeRow(data, 'vjezba', 'broj21')}
						<span className="tacka">۞</span>
						{VjezbeRow(data, 'vjezba', 'broj20')}
					</Col>
				</Row>
				<Row className="text-center">
					<Col>
						<span className="tacka">۞</span>
						{VjezbeRow(data, 'vjezba', 'broj22')}
					</Col>
				</Row>

				<Footer prev="/lekcija1" next="/lekcija3" />
			</Container>
		</React.Fragment>
	);
}

export default L2;
