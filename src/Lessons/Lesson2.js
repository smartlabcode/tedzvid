import React from 'react';
import data from '../Data/L2Data.json';
import PlayerRow from '../Helpers/PlayerHelper';
import VjezbeRow from '../Helpers/VjezbeHelper';
import Footer from '../Body/MainFooter';

// Bootstrap
import { Row, Col } from 'react-bootstrap';

// Other
import '../App.scss';

function L2() {
	return (
		<React.Fragment>
			<Row>
				<Col>
					<h2 className="text-center font-weight-bold text-uppercase">Damir</h2>
					<h4 className="text-center">izgovaranje zamjenice HU (هُ)</h4>
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
					Kada prije zamjenice <strong>HU (<span className="arapski-lekcija "> هُ</span>)</strong> dođe <strong>dugi vokal A</strong> <span className="arapski-lekcija"> <span className="arapski-lekcija">ـــَــ ا</span></span>  , I<span className="arapski-lekcija">ـــِـ ى</span> , U <strong><span className="arapski-lekcija " style={{ fontSize: '2.5em' }}> <span className="arapski-lekcija">ـــُــ و</span></span></strong> ili
					<strong> sukun <span className="arapski-lekcija">ــــــْــــــ</span></strong>  , zamjenica <strong>HU (<span className="arapski-lekcija">هُ</span>)</strong> se uči kratko:
				</Col>
			</Row>

			<Row className="text-center">
				<Col>{PlayerRow(data, 'row1')}</Col>
			</Row>

			<Row className="text-center">
				<Col>{PlayerRow(data, 'row2')}</Col>
			</Row>

			<Row>
				<Col className="opisLekcije">
					Kada prije zamjenice <strong>HU (<span className="arapski-lekcija">هُ</span>)</strong> dođe  
					<strong> kratki vokal</strong> E<span className="arapski-lekcija">ــــَـــ</span>  , I <strong><span className="arapski-lekcija">ــــِــ </span></strong>  
					 ili U <strong><span className="arapski-lekcija" style={{ fontSize: '2.5em' }}>ــــُـــ</span></strong> 
					, zamjenica <strong>HU (<span className="arapski-lekcija">هُ</span>)</strong> se uči dugo:
				</Col>
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
	

			<hr />
			<h2 className="text-center"><strong>VJEŽBA</strong></h2>
			<hr />

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

			<Row className="text-center">
				<Col>
					<span className='tacka'>۞</span>
					{VjezbeRow(data, 'vjezba', 'broj19')}
					<span className='tacka'>۞</span>
					{VjezbeRow(data, 'vjezba', 'broj18')}
				</Col>
			</Row>
			<Row className="text-center">
				<Col>
					<span className='tacka'>۞</span>
					{VjezbeRow(data, 'vjezba', 'broj21')}
					<span className='tacka'>۞</span>
					{VjezbeRow(data, 'vjezba', 'broj20')}
				</Col>
			</Row>
			<Row className="text-center">
				<Col>
					<span className='tacka'>۞</span>
					{VjezbeRow(data, 'vjezba', 'broj22')}
				</Col>
			</Row>

			<Footer prev="/lekcija1" next="/lekcija3" />
		</React.Fragment>
	);
}

export default L2;
