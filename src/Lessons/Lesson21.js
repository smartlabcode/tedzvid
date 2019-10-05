import React from 'react';
import data from '../Data/L21Data.json';
import PlayerRow from '../Helpers/PlayerHelper';
import VjezbeRow from '../Helpers/VjezbeHelper';
import Footer from '../Body/MainFooter';

// Bootstrap
import { Row, Col } from 'react-bootstrap';

// Other
import '../App.scss';

function L21() {
	return (
		<React.Fragment>
			<Row>
				<Col>
					<h2 className="text-center font-weight-bold text-uppercase">MEDD ARID</h2>
					<h4 className="text-center font-weight-bold">nestalna dužina</h4>
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
					Kada poslije <strong>dugog vokala</strong> A  <span className="arapski-lekcija">ـــَــ ا</span> , I  <span className="arapski-lekcija"> ـــِـ ى </span>, U{' '}
					<strong>  <span className="arapski-lekcija">ـــُــ و</span></strong> dođe <strong>nestalni sukun</strong>, bit će medd arid. Traje 2-4-6
					hareketa.
				</Col>
			</Row>

			<Row>
				<Col>
					<br />
				</Col>
			</Row>

			<Row>
				<Col className="text-center">{PlayerRow(data, 'row1')}</Col>
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

			<Row className="text-center">
				<Col>
				<span className='tacka'>۞</span>
					{VjezbeRow(data, 'vjezba', 'broj7')}
					<span className='tacka'>۞</span>
					{VjezbeRow(data, 'vjezba', 'broj6')}
				</Col>
			</Row>

			<Row className="text-center">
				<Col>
				<span className='tacka'>۞</span>
					{VjezbeRow(data, 'vjezba', 'broj10')}
					<span className='tacka'>۞</span>
					{VjezbeRow(data, 'vjezba', 'broj9')}
					<span className='tacka'>۞</span>
					{VjezbeRow(data, 'vjezba', 'broj8')}
				</Col>
			</Row>

			<Row className="text-center">
				<Col>
				<span className='tacka'>۞</span>
					{VjezbeRow(data, 'vjezba', 'broj13')}
					<span className='tacka'>۞</span>
					{VjezbeRow(data, 'vjezba', 'broj12')}
					<span className='tacka'>۞</span>
					{VjezbeRow(data, 'vjezba', 'broj11')}
				</Col>
			</Row>

			<Row className="text-center">
				<Col>
				<span className='tacka'>۞</span>
					{VjezbeRow(data, 'vjezba', 'broj15')}
					<span className='tacka'>۞</span>
					{VjezbeRow(data, 'vjezba', 'broj14')}
				</Col>
			</Row>

			<Row className="text-center">
				<Col>
				<span className='tacka'>۞</span>
					{VjezbeRow(data, 'vjezba', 'broj17')}
					<span className='tacka'>۞</span>
					{VjezbeRow(data, 'vjezba', 'broj16')}
				</Col>
			</Row>

			<hr />

			<Footer prev="/lekcija20" next="/lekcija22" />
		</React.Fragment>
	);
}

export default L21;
