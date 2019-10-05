import React from 'react';
import data from '../Data/L14Data.json';
import PlayerRow from '../Helpers/PlayerHelper';
import VjezbeRow from '../Helpers/VjezbeHelper';
import Footer from '../Body/MainFooter';

// Bootstrap
import { Row, Col } from 'react-bootstrap';

// Other
import '../App.scss';

function L14_2() {
	return (
		<React.Fragment>
			<Row>
				<Col className="opisLekcije">Harf R (ر) se uči tanko u sljedećim situacijama:</Col>
			</Row>

			<Row>
				<Col className="opisLekcije">
					<strong>1.</strong> kada je harf R sa vokalom I ( {PlayerRow(data, 'row9')} ), npr.:{' '}
					{PlayerRow(data, 'row8')}
				</Col>
			</Row>

			<Row>
				<Col className="opisLekcije">
					<strong>2.</strong> kada je harf R sa sukunom, a prije njeg harf sa vokalom I (ــــِـــ رْ), npr.:<br />
					{PlayerRow(data, 'row10')}
				</Col>
			</Row>

			<Row>
				<Col className="opisLekcije">
					<strong>3.</strong> kada je harf R sa sukunom, prije njeg harf sa sukunom, a prije toga harf sa
					vokalom I (رْ ــــِـــ ــــْـــ), npr.:
					{PlayerRow(data, 'row11')}
				</Col>
			</Row>

			<Row>
				<Col className="opisLekcije">
					<strong>4.</strong> 4. kada je harf R sa sukunom, a prije njeg harf J također sa sukunom, a prije
					toga harf sa vokalom E (ــــَـــ يْـــرْ), npr.: {PlayerRow(data, 'row12')}
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
					{VjezbeRow(data, 'vjezba', 'broj29')}
					<span className='tacka'>۞</span>
					{VjezbeRow(data, 'vjezba', 'broj28')}
				</Col>
			</Row>
			<Row className="text-center">
				<Col>
					<span className='tacka'>۞</span>
					{VjezbeRow(data, 'vjezba', 'broj31')}
					<span className='tacka'>۞</span>
					{VjezbeRow(data, 'vjezba', 'broj30')}
				</Col>
			</Row>
			<Row className="text-center">
				<Col>
					<span className='tacka'>۞</span>
					{VjezbeRow(data, 'vjezba', 'broj33')}
					<span className='tacka'>۞</span>
					{VjezbeRow(data, 'vjezba', 'broj32')}
				</Col>
			</Row>
			<Row className="text-center">
				<Col>
					<span className='tacka'>۞</span>
					{VjezbeRow(data, 'vjezba', 'broj35')}
					<span className='tacka'>۞</span>
					{VjezbeRow(data, 'vjezba', 'broj34')}
				</Col>
			</Row>
			<Row className="text-center">
				<Col>
					<span className='tacka'>۞</span>
					{VjezbeRow(data, 'vjezba', 'broj38')}
					<span className='tacka'>۞</span>
					{VjezbeRow(data, 'vjezba', 'broj37')}
					<span className='tacka'>۞</span>
					{VjezbeRow(data, 'vjezba', 'broj36')}
				</Col>
			</Row>

			<Row className="text-center">
				<Col>
					<span className='tacka'>۞</span>
					{VjezbeRow(data, 'vjezba', 'broj39')}
				</Col>
			</Row>

			<Footer prev="/lekcija14" next="/lekcija15" />
		</React.Fragment>
	);
}

export default L14_2;
