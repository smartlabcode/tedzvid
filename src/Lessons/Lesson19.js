import React from 'react';
import data from '../Data/L19Data.json';
import PlayerRow from '../Helpers/PlayerHelper';
import VjezbeRow from '../Helpers/VjezbeHelper';
import Footer from '../Body/MainFooter';

// Bootstrap
import { Row, Col } from 'react-bootstrap';

// Other
import '../App.scss';

function L19() {
	return (
		<React.Fragment>
			<Row>
				<Col>
					<h2 className="text-center font-weight-bold text-uppercase">MEDD MUNFESIL-</h2>
					<h4 className="text-center">rastavljena dužina</h4>
				</Col>
			</Row>

			<Row>
				<Col>
					<br />
				</Col>
			</Row>

			<Row>
				<Col className="opisLekcije text-center">
					Kada poslije <strong>dugog vokala</strong> A  <span className="arapski-lekcija">ـــَــ ا</span> , Iـــِـ ى , U <span className="arapski-lekcija">ـــُــ و</span> dođe{' '}
					<strong>hemze</strong> ili <strong>elif</strong> na početku sljedeće riječi, bit će medd munfesil.
					Traje 4-5 hareketa,npr.:{PlayerRow(data, 'row1')}
				</Col>
			</Row>

			<Row className="opisLekcije text-center">
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

			<h2 className="text-center"><strong>VJEŽBA</strong></h2>
			<hr />

			<Row className="text-center">
				<Col>
				<span className='tacka'>۞</span>
					{VjezbeRow(data, 'vjezba', 'broj7')}
				<span className='tacka'>۞</span>
					{VjezbeRow(data, 'vjezba', 'broj6')}
				<span className='tacka'>۞</span>
					{VjezbeRow(data, 'vjezba', 'broj5')}
				</Col>
			</Row>

			<Row className="text-center">
				<Col><span className='tacka'>۞</span>{VjezbeRow(data, 'vjezba', 'broj8')}</Col>
			</Row>

			<Row className="text-center">
				<Col>
				<span className='tacka'>۞</span>
					{VjezbeRow(data, 'vjezba', 'broj10')}
				<span className='tacka'>۞</span>
					{VjezbeRow(data, 'vjezba', 'broj9')}
				</Col>
			</Row>

			<Row className="text-center">
				<Col><span className='tacka'>۞</span>{VjezbeRow(data, 'vjezba', 'broj11')}</Col>
			</Row>

			<Row className="text-center">
				<Col>
				<span className='tacka'>۞</span>
					{VjezbeRow(data, 'vjezba', 'broj13')}
				<span className='tacka'>۞</span>
					{VjezbeRow(data, 'vjezba', 'broj12')}
				</Col>
			</Row>
			<hr />

			<Footer prev="/lekcija18" next="/lekcija20" />
		</React.Fragment>
	);
}

export default L19;
