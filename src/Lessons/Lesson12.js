import React from 'react';
import data from '../Data/L12Data.json';
import PlayerRow from '../Helpers/PlayerHelper';
import VjezbeRow from '../Helpers/VjezbeHelper';
import Footer from '../Body/MainFooter';

// Bootstrap
import { Row, Col } from 'react-bootstrap';

// Other
import '../App.scss';

function L12() {
	return (
		<React.Fragment>
			<Row>
				<Col>
					<h2 className="text-center font-weight-bold text-uppercase">IHFA ŠEFEVIJJ</h2>
					<h4 className="text-center">skrivanje harfa M (م)</h4>
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
					Kada poslije harfa M sa sukunom (مْ) dođe harf B (ب), produžava se izgovor harfa M (م) u trajanju od
					2 hareketa, npr.:
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

			<h2 className="text-center">Vježbe</h2>
			<hr />
			<Row className="text-center">
				<Col>
					۞
					{VjezbeRow(data, 'vjezba', 'broj8')}
					۞
					{VjezbeRow(data, 'vjezba', 'broj7')}
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
					{VjezbeRow(data, 'vjezba', 'broj12')}
				</Col>
			</Row>
			<Row className="text-center">
				<Col>
					۞
					{VjezbeRow(data, 'vjezba', 'broj14')} ۞
					{VjezbeRow(data, 'vjezba', 'broj13')}
				</Col>
			</Row>
			<Row className="text-center">
				<Col>
					۞
					{VjezbeRow(data, 'vjezba', 'broj15')}
				</Col>
			</Row>
			<Footer prev="/lekcija11" next="/lekcija13" />
		</React.Fragment>
	);
}

export default L12;
