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
					Kada poslije harfa N sa sukunom <span className="arapski-lekcija">(نْ)</span> ili tenvina EN<span className="arapski-lekcija"> ــــــًــــــ</span>,
					IN<span className="arapski-lekcija" /> ـــــٍــــــ , UN<span className="arapski-lekcija"> ــــــٌـــــ</span>dođe
					harf L <span className="arapski-lekcija">(ل) </span>ili R{' '}
					<span className="arapski-lekcija">(ر)</span>, dolazi do potpunog uklapanja harfa N<span className="arapski-lekcija"> (ن)</span>{' '}
					u harf L <span className="arapski-lekcija">(ل)</span>, odnosno, R{' '}
					<span className="arapski-lekcija">(ر)</span>, tj. N <span className="arapski-lekcija">(ن)</span>se
					nikako ne uči, npr.:
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
				<Col>
					{VjezbeRow(data, 'multirow', 'word1')}
					{PlayerRow(data, 'row2')}
				</Col>
			</Row>
			<Row className="text-center">
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
			</Row>{' '}
			<Footer prev="/lekcija6" next="/lekcija8" />
		</React.Fragment>
	);
}

export default L7;
