import React from 'react';
// Bootstrap
import { Col, Container, Row } from 'react-bootstrap';
// Other
import '../App.scss';
import LekcijaMenu from '../Body/LekcijaMenu';
import Footer from '../Body/MainFooter';
import data from '../Data/L18Data.json';
import PlayerRow from '../Helpers/PlayerHelper';
import VjezbeRow from '../Helpers/VjezbeHelper';

function L18() {
	return (
		<React.Fragment>
			<LekcijaMenu broj="18" naziv="MEDD MUTTESIL" />
			<Container>
				<Row>
					<Col>
						<div className="mobileTop">
							<center>
								<img src={process.env.PUBLIC_URL + '/assets/svg/Group 61.svg'} />
							</center>
							<h2 className="text-center font-weight-bold text-uppercase">MEDD MUTTESIL</h2>
						</div>
						<h4 className="text-center">
							<strong>spojena dužina</strong>
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
						Kada poslije <strong>dugog vokala</strong> A <span className="arapski-lekcija">ـــَــ ا</span> ,
						I <span className="arapski-lekcija">ـــِـ ى </span>, U{' '}
						<span className="arapski-lekcija">ـــُــ و</span> dođe <strong>hemze</strong> u <u>istoj</u>{' '}
						riječi, bit će medd muttesil. Traje obavezno 4-5 hareketa, npr.: {PlayerRow(data, 'row1')}
					</Col>
				</Row>

				<Row className="text-center">
					<Col>{PlayerRow(data, 'row2')}</Col>
				</Row>

				<Row className="text-center">
					<Col>{PlayerRow(data, 'row3')}</Col>
				</Row>

				<Row className="text-center">
					<Col>{VjezbeRow(data, 'multirow', 'row4')}</Col>
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
						{VjezbeRow(data, 'vjezba', 'broj6')}
					</Col>
				</Row>
				<Row className="text-center">
					<Col>
						<span className="tacka">۞</span>
						{VjezbeRow(data, 'vjezba', 'broj8')}
						{VjezbeRow(data, 'vjezba', 'broj7')}
					</Col>
				</Row>
				<Row className="text-center">
					<Col>
						<span className="tacka">۞</span>
						{VjezbeRow(data, 'vjezba', 'broj9')}
					</Col>
				</Row>

				<Row className="text-center">
					<Col>
						<span className="tacka">۞</span>
						{VjezbeRow(data, 'vjezba', 'broj10')}
					</Col>
				</Row>
				<Row className="text-center">
					<Col>
						<span className="tacka">۞</span>
						{VjezbeRow(data, 'vjezba', 'broj11')}
					</Col>
				</Row>

				<Footer prev="/lekcija17" next="/lekcija19" />
			</Container>
		</React.Fragment>
	);
}

export default L18;
