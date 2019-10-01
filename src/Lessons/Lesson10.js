import React from 'react';
import data from '../Data/L10Data.json';
import PlayerRow from '../Helpers/PlayerHelper';
import VjezbeRow from '../Helpers/VjezbeHelper';
import Footer from '../Body/MainFooter';

// Bootstrap
import { Row, Col } from 'react-bootstrap';

// Other
import '../App.scss';

function L10() {
	return (
		<React.Fragment>
			<Row>
				<Col>
					<h2 className="text-center font-weight-bold text-uppercase">IZHAR ŠEFEVIJJ</h2>
					<h4 className="text-center">čisto izgovaranje harfa M (م)</h4>
					<hr />
				</Col>
			</Row>
			<Row>
				<Col className="opisLekcije">
					Kada harf M sa sukunom (مْ) dođe ispred bilo kojeg harfa, osim harfova B (ب) i M (م), onda se harf M
					(م) izgovara čisto, tj. bez uklapanja, npr.:
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
			<h2 className="text-center">Vježbe</h2>
			<hr />
			<Row className="text-center">
				<Col>
					۞
					{VjezbeRow(data, 'vjezba', 'broj8')}
					۞
					{VjezbeRow(data, 'vjezba', 'broj7')}
					۞
					{VjezbeRow(data, 'vjezba', 'broj6')}
				</Col>
			</Row>
			<Row className="text-center">
				<Col>
					۞
					{VjezbeRow(data, 'vjezba', 'broj10')}
					۞
					{VjezbeRow(data, 'vjezba', 'broj9')}
				</Col>
			</Row>
			<Row className="text-center">
				<Col>
					۞
					{VjezbeRow(data, 'vjezba', 'broj11')}
				</Col>
			</Row>
			<Row className="text-center">
				<Col>
					۞
					{VjezbeRow(data, 'vjezba', 'broj14')}
					۞
					{VjezbeRow(data, 'vjezba', 'broj12')}
				</Col>
			</Row>
			<Row className="text-center">
				<Col>
					۞
					{VjezbeRow(data, 'vjezba', 'broj13')}
				</Col>
			</Row>
			<Footer prev="/lekcija9" next="/lekcija11" />
		</React.Fragment>
	);
}

export default L10;
