import React from 'react';
import data from '../Data/L7Data.json';
import PlayerRow from '../Helpers/PlayerHelper';
import VjezbeRow from '../Helpers/VjezbeHelper';
import Footer from '../Body/MainFooter';

// Bootstrap
import { Row, Col } from 'react-bootstrap';

// Other
import '../App.scss';

function L7() {
	return (
		<React.Fragment>
			<Row>
				<Col>
					<h2 className="text-center font-weight-bold text-uppercase">IDGAM BILA GUNNEH</h2>
					<h4 className="text-center">uklapanje bez propuštanja zraka kroz nos</h4>
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
					Kada poslije harfa N sa sukunom (نْ) ili tenvina EN ــــــًــــــ, IN ـــــٍــــــ , UN ــــــٌـــــ
					dođe harf L (ل) ili R (ر), dolazi do potpunog uklapanja harfa N (ن) u harf L (ل), odnosno, R (ر),
					tj. N (ن) se nikako ne uči, npr.:
				</Col>
			</Row>

			<Row>
				<Col>{PlayerRow(data, 'row1')}</Col>
			</Row>

			<Row>
				<Col>
					{VjezbeRow(data, 'multirow', 'word1')}
					{PlayerRow(data, 'row2')}
				</Col>
			</Row>

			<Row>
				<Col>{VjezbeRow(data, 'multirow', 'word2')}</Col>
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
					{VjezbeRow(data, 'vjezba', 'broj9')}
					۞
					{VjezbeRow(data, 'vjezba', 'broj8')}
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
					{VjezbeRow(data, 'vjezba', 'broj13')}
					۞
					{VjezbeRow(data, 'vjezba', 'broj12')}
				</Col>
			</Row>
			<Row className="text-center">
				<Col>
					۞
					{VjezbeRow(data, 'vjezba', 'broj14')}
				</Col>
			</Row>
			<Row className="text-center">
				<Col>
					۞
					{VjezbeRow(data, 'vjezba', 'broj15')}
				</Col>
			</Row>
			<Row className="text-center">
				<Col>
					۞
					{VjezbeRow(data, 'vjezba', 'broj16')}
				</Col>
			</Row>
		</React.Fragment>
	);
}

export default L7;
