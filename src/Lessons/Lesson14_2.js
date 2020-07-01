import React from 'react';
// Bootstrap
import { Col, Container, Row } from 'react-bootstrap';
// Other
import '../App.scss';
import LekcijaMenu from '../Body/LekcijaMenu';
import Footer from '../Body/MainFooter';
import data from '../Data/L14Data.json';
import PlayerRow from '../Helpers/PlayerHelper';
import VjezbeRow from '../Helpers/VjezbeHelper';

function L14_2() {
	return (
		<React.Fragment>
			<LekcijaMenu broj="14.2" naziv="HUKMURRA" />
			<Container>
				<Row>
					<Col className="opisLekcije">
						Harf<strong> R </strong>
						<span className="arapski-lekcija">(ر)</span> se uči <u>tanko</u> u sljedećim situacijama:
					</Col>
				</Row>

				<Row>
					<Col className="opisLekcije">
						<strong>1.</strong> kada je harf<strong> R </strong>sa <strong>vokalom</strong> I ({' '}
						{PlayerRow(data, 'row9')} ), npr.: {PlayerRow(data, 'row8')}
					</Col>
				</Row>

				<Row>
					<Col className="opisLekcije">
						<strong>2.</strong> kada je harf<strong> R </strong>sa <strong>sukunom</strong>, a prije njeg
						harf sa <strong>vokalom</strong> I (<span className="arapski-lekcija" style={{ color: 'red' }}>
							ــــِـــ رْ{' '}
						</span>), npr.:<br />
						{PlayerRow(data, 'row10')}
					</Col>
				</Row>

				<Row>
					<Col className="opisLekcije">
						<strong>3.</strong> kada je harf<strong> R </strong>sa <strong>sukunom</strong>, prije njeg harf
						sa <strong>sukunom</strong>, a prije toga harf sa
						<strong>vokalom</strong> I (<span className="arapski-lekcija" style={{ color: 'red' }}>
							{' '}
							ــِـ ــْـ رْ{' '}
						</span>), npr.:
						{PlayerRow(data, 'row11')}
					</Col>
				</Row>

				<Row>
					<Col className="opisLekcije">
						<strong>4.</strong> kada je harf<strong> R </strong>sa <strong>sukunom</strong>, a prije njeg
						harf <strong>J</strong> također sa <strong>sukunom</strong>, a prije toga harf sa{' '}
						<strong>vokalom</strong> E (<span className="arapski-lekcija" style={{ color: 'red' }}>
							{' '}
							ــــَـــ يْـــرْ{' '}
						</span>), npr.: {PlayerRow(data, 'row12')}
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
						{VjezbeRow(data, 'vjezba', 'broj29')}
						<span className="tacka">۞</span>
						{VjezbeRow(data, 'vjezba', 'broj28')}
					</Col>
				</Row>
				<Row className="text-center">
					<Col>
						<span className="tacka">۞</span>
						{VjezbeRow(data, 'vjezba', 'broj31')}
						<span className="tacka">۞</span>
						{VjezbeRow(data, 'vjezba', 'broj30')}
					</Col>
				</Row>
				<Row className="text-center">
					<Col>
						<span className="tacka">۞</span>
						{VjezbeRow(data, 'vjezba', 'broj33')}
						<span className="tacka">۞</span>
						{VjezbeRow(data, 'vjezba', 'broj32')}
					</Col>
				</Row>
				<Row className="text-center">
					<Col>
						<span className="tacka">۞</span>
						{VjezbeRow(data, 'vjezba', 'broj35')}
						<span className="tacka">۞</span>
						{VjezbeRow(data, 'vjezba', 'broj34')}
					</Col>
				</Row>
				<Row className="text-center">
					<Col>
						<span className="tacka">۞</span>
						{VjezbeRow(data, 'vjezba', 'broj38')}
						<span className="tacka">۞</span>
						{VjezbeRow(data, 'vjezba', 'broj37')}
						<span className="tacka">۞</span>
						{VjezbeRow(data, 'vjezba', 'broj36')}
					</Col>
				</Row>

				<Row className="text-center">
					<Col>
						<span className="tacka">۞</span>
						{VjezbeRow(data, 'vjezba', 'broj39')}
					</Col>
				</Row>

				<Footer prev="/lekcija14" next="/lekcija15" />
			</Container>
		</React.Fragment>
	);
}

export default L14_2;
