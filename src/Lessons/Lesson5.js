import React from 'react';
import data from '../Data/L5Data.json';
import PlayerRow from '../Helpers/PlayerHelper';
import VjezbeRow from '../Helpers/VjezbeHelper';
import Footer from '../Body/MainFooter';

// Bootstrap
import { Row, Col } from 'react-bootstrap';

// Other
import '../App.scss';

function L5() {
	return (
		<React.Fragment>
			<Row>
				<Col>
					<h2 className="text-center font-weight-bold text-uppercase">IDGAM MISLEJN MEAL-GUNNEH</h2>
					<h4 className="text-center">uklapanje istih harfova sa propuštanjem zraka kroz nos</h4>
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
					Kada poslije harfa <strong>M</strong> <span className="arapski-lekcija" style={{ fontSize: '2em' }}>(م)</span> sa <strong>sukunom</strong> dođe harf <strong>M</strong>
					<span className="arapski-lekcija" style={{ fontSize: '2em' }}> (م) </span>sa <strong>hareketom</strong>, dolazi do uklapanja harfa <strong>M</strong>
					<span className="arapski-lekcija" style={{ fontSize: '2em' }}> (م)</span> sa <strong>sukunom</strong> u harf <strong>M</strong>
					<span className="arapski-lekcija" style={{ fontSize: '2em' }}> (م)</span> sa <strong>hareketom</strong>, uz propuštanje zraka kroz nos u trajanju
					od 2 hareketa, npr.:
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

			<h2 className="text-center"><strong>VJEŽBA</strong></h2>
			<hr />

			<Row className="text-center">
				<Col>
					۞
					{VjezbeRow(data, 'vjezba', 'broj8')}
				</Col>
			</Row>

			<Row className="text-center">
				<Col>
					۞
					{VjezbeRow(data, 'vjezba', 'broj9')}
				</Col>
			</Row>

			<Row className="text-center">
				<Col>
					۞
					{VjezbeRow(data, 'vjezba', 'broj11')}
					۞
					{VjezbeRow(data, 'vjezba', 'broj10')}
				</Col>
			</Row>

			<Row className="text-center">
				<Col>
					۞
					{VjezbeRow(data, 'vjezba', 'broj14')}
					۞
					{VjezbeRow(data, 'vjezba', 'broj13')}
					۞
					{VjezbeRow(data, 'vjezba', 'broj12')}
				</Col>
			</Row>
			<Row className="text-center">
				<Col>
					۞
					{VjezbeRow(data, 'vjezba', 'broj16')}
					۞
					{VjezbeRow(data, 'vjezba', 'broj15')}
				</Col>
			</Row>
			<Row className="text-center">
				<Col>
					۞
					{VjezbeRow(data, 'vjezba', 'broj17')}
				</Col>
			</Row>

			<Footer prev="/lekcija4" next="/lekcija6" />
		</React.Fragment>
	);
}

export default L5;
