import React from 'react';
import data from '../Data/L14Data.json';
import PlayerRow from '../Helpers/PlayerHelper';
import VjezbeRow from '../Helpers/VjezbeHelper';
import Footer from '../Body/MainFooter';

// Bootstrap
import { Row, Col } from 'react-bootstrap';

// Other
import '../App.scss';

function L14() {
	return (
		<React.Fragment>
			<Row>
				<Col>
					<h2 className="text-center font-weight-bold text-uppercase">HUKMURRA</h2>
					<h4 className="text-center"><strong>izgovor harfa R <span className="arapski-lekcija">(ر)</span></strong></h4>
					<hr />
				</Col>
			</Row>

            <Row>
				<Col>
					<br />
				</Col>
			</Row>

			<Row>
				<Col className="opisLekcije">Harf<strong> R </strong><span className="arapski-lekcija">(ر)</span>	 se uči <u>krupno</u> u sljedećim situacijama:</Col>
			</Row>

			<Row>
				<Col className="opisLekcije text-center">
					<strong>1.</strong> kada je harf<strong> R </strong>sa <strong>vokalom</strong> E ( {PlayerRow(data, 'row1')}) ili <strong>vokalom</strong> U ({' '}
					{PlayerRow(data, 'row2')}), npr.:{PlayerRow(data, 'row3')}
				</Col>
			</Row>

			<Row>
				<Col className="opisLekcije">
					<strong>2.</strong> kada je harf<strong> R </strong>sa <strong>sukunom</strong>, a prije njeg harf sa <strong>vokalom</strong> E (<span className="arapski-lekcija" style={{color:"red"}}> ــَـ رْ </span>) ili U
					(<span className="arapski-lekcija" style={{color:"red"}}>ــُـ رْ</span>), npr.:
					{PlayerRow(data, 'row4')}
				</Col>
			</Row>

			<Row>
				<Col className="opisLekcije">
					<strong>3.</strong> kada je harf<strong><strong> R </strong></strong>sa <strong>sukunom</strong>, prije njeg harf sa <strong>sukunom</strong>, a prije toga harf sa
					<strong>vokalom</strong> E (<span className="arapski-lekcija" style={{color:"red"}}> ــَـ ــْـ رْ  </span>) ili U (<span className="arapski-lekcija" style={{color:"red"}}> ــُـ ــْـ رْ   </span>), npr.: {PlayerRow(data, 'row5')}
				</Col>
			</Row>

			<Row>
				<Col className="opisLekcije">
					<strong>4.</strong> kada je harf<strong> R </strong>sa <strong>sukunom</strong> (<span className="arapski-lekcija" style={{color:"red"}}>رْ</span>), a prije njeg glas sa nestalnom kesrom, npr.:{' '}
					{PlayerRow(data, 'row6')}
				</Col>
			</Row>

			<Row>
				<Col className="opisLekcije">
					<strong>5.</strong> kada je harf<strong> R </strong>sa <strong>sukunom</strong> (<span className="arapski-lekcija" style={{color:"red"}}>رْ</span>), a poslije njeg jedan od krupnih harfova, npr.:{' '}
					{PlayerRow(data, 'row7')}
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
					{VjezbeRow(data, 'vjezba', 'broj14')}
					<span className='tacka'>۞</span>
					{VjezbeRow(data, 'vjezba', 'broj13')}
					<span className='tacka'>۞</span>
					{VjezbeRow(data, 'vjezba', 'broj12')}
				</Col>
			</Row>
			<Row className="text-center">
				<Col>
					<span className='tacka'>۞</span>
					{VjezbeRow(data, 'vjezba', 'broj16')}
					<span className='tacka'>۞</span>
					{VjezbeRow(data, 'vjezba', 'broj15')}
				</Col>
			</Row>
			<Row className="text-center">
				<Col>
					<span className='tacka'>۞</span>
					{VjezbeRow(data, 'vjezba', 'broj18')}
					<span className='tacka'>۞</span>
					{VjezbeRow(data, 'vjezba', 'broj17')}
				</Col>
			</Row>
			<Row className="text-center">
				<Col>
					<span className='tacka'>۞</span>
					{VjezbeRow(data, 'vjezba', 'broj20')}
					<span className='tacka'>۞</span>
					{VjezbeRow(data, 'vjezba', 'broj19')}
				</Col>
			</Row>
			<Row className="text-center">
				<Col>
					<span className='tacka'>۞</span>
					{VjezbeRow(data, 'vjezba', 'broj22')}
					<span className='tacka'>۞</span>
					{VjezbeRow(data, 'vjezba', 'broj21')}
				</Col>
			</Row>

			<Footer prev="/lekcija13" next="/lekcija14_2" />
		</React.Fragment>
	);
}

export default L14;
