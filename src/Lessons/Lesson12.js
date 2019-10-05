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
					Kada poslije harfa <strong>M</strong> sa <strong>sukunom</strong> (<span className="arapski-lekcija" >مْ</span>) dođe harf <strong>B</strong> (<span className="arapski-lekcija">ب</span>), produžava se izgovor harfa <strong>M</strong> (<span className="arapski-lekcija" >م</span>) u trajanju od
					2 hareketa, npr.:
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
					<span className='tacka'>۞</span>
					{VjezbeRow(data, 'vjezba', 'broj8')}
					<span className='tacka'>۞</span>
					{VjezbeRow(data, 'vjezba', 'broj7')}
				</Col>
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
				<Col>
					<span className='tacka'>۞</span>
					{VjezbeRow(data, 'vjezba', 'broj11')}
				</Col>
			</Row>
			<Row className="text-center">
				<Col>
					<span className='tacka'>۞</span>
					{VjezbeRow(data, 'vjezba', 'broj12')}
				</Col>
			</Row>
			<Row className="text-center">
				<Col>
					<span className='tacka'>۞</span>
					{VjezbeRow(data, 'vjezba', 'broj14')} <span className='tacka'>۞</span>
					{VjezbeRow(data, 'vjezba', 'broj13')}
				</Col>
			</Row>
			<Row className="text-center">
				<Col>
					<span className='tacka'>۞</span>
					{VjezbeRow(data, 'vjezba', 'broj15')}
				</Col>
			</Row>
			<Footer prev="/lekcija11" next="/lekcija13" />
		</React.Fragment>
	);
}

export default L12;
