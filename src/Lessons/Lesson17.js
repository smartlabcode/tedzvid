import React from 'react';
import data from '../Data/L17Data.json';
import PlayerRow from '../Helpers/PlayerHelper';
import VjezbeRow from '../Helpers/VjezbeHelper';
import Footer from '../Body/MainFooter';

// Bootstrap
import { Row, Col } from 'react-bootstrap';

// Other
import '../App.scss';

function L17() {
	return (
		<React.Fragment>
			<Row>
				<Col>
					<h2 className="text-center font-weight-bold text-uppercase">MEDD TABIJJ</h2>
					<h4 className="text-center font-weight-bold">obična dužina</h4>
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
					Kada poslije <strong>dugog vokala </strong>A  <span className="arapski-lekcija">ـــَــ ا</span> , I <span className="arapski-lekcija">ـــِـ ى </span>, U <span className="arapski-lekcija">ـــُــ و</span> nema ni{' '}
					<strong>hemzeta</strong> ni <strong>sukuna,</strong>bit će medd tabijj.Traje 2 haraketa, npr.:{PlayerRow(data, 'row1')}
				</Col>
			</Row>

			<Row>
				<Col className="text-center">{PlayerRow(data, 'row2')}</Col>
			</Row>

			<Row>
				<Col className="text-center">{PlayerRow(data, 'row3')}</Col>
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

			<Row>
				<Col>
					<br />
				</Col>
			</Row>

			<Row className="text-center">
				<Col>
				<span className='tacka'>۞</span>
					{VjezbeRow(data, 'vjezba', 'broj12')}
					<span className='tacka'>۞</span>
					{VjezbeRow(data, 'vjezba', 'broj11')}
				</Col>
			</Row>

			<Row className="text-center">
				<Col>
				<span className='tacka'>۞</span>
					{VjezbeRow(data, 'vjezba', 'broj14')}
					<span className='tacka'>۞</span>
					{VjezbeRow(data, 'vjezba', 'broj13')}
				</Col>
			</Row>

			<Row className="text-center">
				<Col><span className='tacka'>۞</span>{VjezbeRow(data, 'vjezba', 'broj15')}</Col>
			</Row>

			<Row className="text-center">
				<Col>
				<span className='tacka'>۞</span>
					{VjezbeRow(data, 'vjezba', 'broj17')}
					{VjezbeRow(data, 'vjezba', 'broj16')}
				</Col>
			</Row>

			<Row className="text-center">
				<Col>
				<span className='tacka'>۞</span>
					{VjezbeRow(data, 'vjezba', 'broj19')}
					<span className='tacka'>۞</span>
					{VjezbeRow(data, 'vjezba', 'broj18')}
				</Col>
			</Row>

			<Footer prev="/lekcija16" next="/lekcija18" />
		</React.Fragment>
	);
}

export default L17;
