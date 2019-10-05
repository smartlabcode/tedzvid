import React from 'react';
import data from '../Data/L4Data.json';
import PlayerRow from '../Helpers/PlayerHelper';
import VjezbeRow from '../Helpers/VjezbeHelper';
import Footer from '../Body/MainFooter';

// Bootstrap
import { Row, Col } from 'react-bootstrap';

// Other
import '../App.scss';

function L4() {
	return (
		<React.Fragment>
			<Row>
				<Col>
					<h2 className="text-center font-weight-bold text-uppercase">IDGAM MISLEJN</h2>
					<h4 className="text-center">uklapanje istih harfova</h4>
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
					Kada poslije bilo kojeg harfa sa <strong>sukunom <span className="arapski-lekcija">ــــــْــــــ</span></strong>  dođe isti harf sa <strong>hareketom</strong>, dolazi do
					potpunog uklapanja, tj. prvi harf se ne uči, a drugi se uči sa <strong>tešdidom</strong>, npr.:
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
	
			<h2 className="text-center"><strong>VJEŽBA</strong></h2>
			<hr />

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
					{VjezbeRow(data, 'vjezba', 'broj13')}
					۞
					{VjezbeRow(data, 'vjezba', 'broj12')}
				</Col>
			</Row>

			<Row className="text-center">
				<Col>
					۞
					{VjezbeRow(data, 'vjezba', 'broj15')}
					۞
					{VjezbeRow(data, 'vjezba', 'broj14')}
				</Col>
			</Row>

			<Row className="text-center">
				<Col>
					۞
					{VjezbeRow(data, 'vjezba', 'broj17')}
					۞
					{VjezbeRow(data, 'vjezba', 'broj16')}
				</Col>
			</Row>
			<Row className="text-center">
				<Col>
					۞
					{VjezbeRow(data, 'vjezba', 'broj19')}
					۞
					{VjezbeRow(data, 'vjezba', 'broj18')}
				</Col>
			</Row>
			<Row className="text-center">
				<Col />
			</Row>

			<Footer prev="/lekcija3" next="/lekcija5" />
		</React.Fragment>
	);
}

export default L4;
