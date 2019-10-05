import React from 'react';
import data from '../Data/L22Data.json';
import PlayerRow from '../Helpers/PlayerHelper';
import VjezbeRow from '../Helpers/VjezbeHelper';
import Footer from '../Body/MainFooter';

// Bootstrap
import { Row, Col } from 'react-bootstrap';

// Other
import '../App.scss';

function L22() {
	return (
		<React.Fragment>
			<Row>
				<Col>
					<h2 className="text-center font-weight-bold text-uppercase">MEDD LIN</h2>
					<h4 className="text-center font-weight-bold ">poluvokalna dužina</h4>
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
					Kada harfovi <strong>V</strong> ili <strong>J</strong> budu sa <strong>sukunom <span className="arapski-lekcija" style={{fontSize:"1.4em"}}>(يْ / وْ)</span></strong>,
					prije njih <strong>kratki vokal</strong> E <span className="arapski-lekcija">ـــَـــ </span> a poslije njih harf sa{' '}
					<strong>sukunom</strong>, bit će medd lin, npr.:
				</Col>
			</Row>

			<Row className="text-center">
				<Col>
					<span class="arapski">( ـــَــ وْ ـــْــ )</span> {PlayerRow(data, 'row1lijevi')}
					<span class="arapski">(  ـــَــ يْ ـــْــ ) </span> {PlayerRow(data, 'row1desni')}
				</Col>
			</Row>

			<Row>
				<Col>
					<br />
				</Col>
			</Row>

			<Row>
				<Col  className="opisLekcije">
					Ta dužina na harfu <strong>V</strong> <span className="arapski-lekcija"> (و)</span> ili <strong>J</strong> <span className="arapski-lekcija"> (ى)</span> traje 2-4-6 hareketa.
				</Col>
			</Row>

			<Row>
				<Col>
					<br />
				</Col>
			</Row>

			<Row className="text-center">
				<Col>{PlayerRow(data, 'row2')}</Col>
			</Row>

			<Row className="text-center">
				<Col>{PlayerRow(data, 'row3')}</Col>
			</Row>

			<Row className="text-center">
				<Col>{PlayerRow(data, 'row4')}</Col>
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
			<hr />
			<h2 className="text-center"><strong>VJEŽBA</strong></h2>
			

			<Row className="text-center">
				<Col> 	
					<span className='tacka'><span className='tacka'>۞</span></span>
					{VjezbeRow(data, 'vjezba', 'broj9')}
					<span className='tacka'><span className='tacka'>۞</span></span>
					{VjezbeRow(data, 'vjezba', 'broj8')}
				</Col>
			</Row>

			<Row className="text-center">
				<Col>
					<span className='tacka'><span className='tacka'>۞</span></span>
					{VjezbeRow(data, 'vjezba', 'broj11')}
					<span className='tacka'><span className='tacka'>۞</span></span>
					{VjezbeRow(data, 'vjezba', 'broj10')}
				</Col>
			</Row>

			<Row className="text-center">
				<Col>
					<span className='tacka'><span className='tacka'>۞</span></span>
					{VjezbeRow(data, 'vjezba', 'broj13')}
					<span className='tacka'><span className='tacka'>۞</span></span>
					{VjezbeRow(data, 'vjezba', 'broj12')}
				</Col>
			</Row>

			<Row className="text-center">
				<Col>
				<span className='tacka'><span className='tacka'>۞</span></span>
					{VjezbeRow(data, 'vjezba', 'broj15')}
					<span className='tacka'><span className='tacka'>۞</span></span>
					{VjezbeRow(data, 'vjezba', 'broj14')}
				</Col>
			</Row>

	

			<Footer prev="/lekcija21" next="/lekcija1" />
		</React.Fragment>
	);
}

export default L22;
