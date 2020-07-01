import React from 'react';
// Bootstrap
import { Col, Container, Row } from 'react-bootstrap';
// Other
import '../App.scss';
import LekcijaMenu from '../Body/LekcijaMenu';
import Footer from '../Body/MainFooter';
import data from '../Data/L19Data.json';
import PlayerRow from '../Helpers/PlayerHelper';
import VjezbeRow from '../Helpers/VjezbeHelper';

function L19() {
	return (
		<React.Fragment>
			<LekcijaMenu broj="19" naziv="MEDD MUNFESIL" />
			<Container>
				<Row>
					<Col>
						<div className="mobileTop">
							<center>
								<img alt="demo" src={process.env.PUBLIC_URL + '/assets/svg/Group 61.svg'} />
							</center>
							<h2 className="text-center font-weight-bold text-uppercase">MEDD MUNFESIL</h2>
						</div>
						<h4 className="text-center">
							<strong>rastavljena dužina</strong>
						</h4>
					</Col>
				</Row>
				<hr />

				<Row>
					<Col>
						<br />
					</Col>
				</Row>

				<Row>
					<Col className="opisLekcije text-center">
						Kada poslije <strong>dugog vokala</strong> A <span className="arapski-lekcija">ـــَــ ا</span> ,
						I <span className="arapski-lekcija"> ـــِـ ى</span> , U{' '}
						<span className="arapski-lekcija" style={{ lineHeight: '1.8em' }}>
							ـــُــ و
						</span>{' '}
						dođe <strong>hemze</strong> ili <strong>elif</strong> <u>na početku sljedeće</u> riječi , bit će
						medd munfesil. Traje 4-5 hareketa,npr.:<span style={{ lineHeight: '1.5em' }}>
							{PlayerRow(data, 'row1')}
						</span>
					</Col>
				</Row>

				<Row>
					<Col>
						<br />
					</Col>
				</Row>

				<Row className="opisLekcije">
					<pre> </pre>„turska štampa“<pre> </pre>„medinska štampa“
				</Row>

				<Row className="text-center">
					<Col>
						{VjezbeRow(data, 'rows', 'row2lijevi')} {VjezbeRow(data, 'rows', 'row2desni')}
					</Col>
				</Row>
				<Row className="text-center">
					<Col>
						{VjezbeRow(data, 'rows', 'row3lijevi')} {VjezbeRow(data, 'rows', 'row3desni')}
					</Col>
				</Row>
				<Row className="text-center">
					<Col>
						{VjezbeRow(data, 'rows', 'row4lijevi')} {VjezbeRow(data, 'rows', 'row4desni')}
					</Col>
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
						{VjezbeRow(data, 'vjezba', 'broj7')}
						<span className="tacka">۞</span>
						{VjezbeRow(data, 'vjezba', 'broj6')}
						<span className="tacka">۞</span>
						{VjezbeRow(data, 'vjezba', 'broj5')}
					</Col>
				</Row>

				<Row className="text-center">
					<Col>
						<span className="tacka">۞</span>
						{VjezbeRow(data, 'vjezba', 'broj8')}
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
						{VjezbeRow(data, 'vjezba', 'broj13')}
						<span className="tacka">۞</span>
						{VjezbeRow(data, 'vjezba', 'broj12')}
					</Col>
				</Row>

				<Footer prev="/lekcija18" next="/lekcija20" />
			</Container>
		</React.Fragment>
	);
}

export default L19;
