import React from 'react';
import data from '../Data/L6Data.json';
import Footer from '../Body/MainFooter';
import VjezbeRow from '../Helpers/VjezbeHelper';
import PlayerRow from '../Helpers/PlayerHelper';
import { Link } from 'react-router-dom';
import LekcijaMenu from '../Body/LekcijaMenu';

// Bootstrap
import { Row, Col, Container } from 'react-bootstrap';

// Other
import '../App.scss';
import Arabic from '../Letters/Arabic';
import Player from '../Player/Player';

function L6() {
	const r1 = data.row1.map((dat) => {
		return (
			<span key={'key' + dat.id}>
				<Player url={dat.url} key={'p' + dat.id}>
					<Arabic arabic={dat.highlight} key={'a' + dat.id}>
						{dat.word}
					</Arabic>
				</Player>{' '}
				{dat.after === 'break' ? <br /> : dat.after}
			</span>
		);
	});

	const r2 = data.row2.map((dat) => {
		return (
			<span key={'key' + dat.id}>
				<Player url={dat.url} key={'p' + dat.id}>
					<Arabic arabic={dat.highlight} key={'a' + dat.id}>
						{dat.word}
					</Arabic>
				</Player>{' '}
				{dat.after === 'break' ? <br /> : dat.after}
			</span>
		);
	});

	const r3 = data.row3.map((dat, ind) => {
		return (
			<Arabic arabic={dat.highlight} key={'a' + dat.id}>
				{dat.word}
			</Arabic>
		);
	});

	return (
		<React.Fragment>
			<LekcijaMenu broj="6" naziv="IDGAM MEAL-GUNNEH"></LekcijaMenu>
			<Container>
			<Row>
				<Col>
					<div className="mobileTop">
						<center>
							<img src={process.env.PUBLIC_URL + '/assets/svg/Group 61.svg'} /> 
						</center>
						<h2 className="text-center font-weight-bold text-uppercase">IDGAM MEAL-GUNNEH</h2>
					</div>
					<h4 className="text-center"><strong>uklapanje sa propuštanjem zraka kroz nos</strong></h4>
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
				Kada poslije harfa <strong>N</strong> sa <strong>sukunom</strong> (<span className="arapski-lekcija" >نْ</span>) ili <strong>tenvina</strong> EN <span className="arapski-lekcija" >ـــًـــ</span> , IN <span className="arapski-lekcija">ـــٍــ</span>  , UN <span className="arapski-lekcija" >ــٌــ</span> dođe jedan od četiri harfa: <span className="arapski-lekcija" style={{color:"red"}}>ي م ن و</span> (sadržana u riječi <strong>jemnu</strong> –
					<span className="arapski-lekcija" >يَمْنُو</span>), dolazi do uklapanja harfa <strong>N</strong>(<span className="arapski-lekcija">ن</span>) u jedan 
			 od spomenuta četiri harfa, propuštajući zrak kroz
					nos u trajanju od 2 hareketa, npr.:</Col></Row>

			<Row>
				<Col>
					<br />
				</Col>
			</Row>

			<Row className="text-center">
				<Col>{PlayerRow(data, 'row1')}</Col>
			</Row>

			<Row className="text-center">
				<Col>{PlayerRow(data, 'row2')}</Col>
			</Row>

			<Row className="text-center">
				<Col>
					<span key={'key' + data.row3[0].id}>
						<Player url={data.row3[0].url} key={'p' + data.row3[0].id}>
							{r3}
						</Player>
					</span>{' '}
					{data.row3[0].after}
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
			<Row>
				<Col>
					<br />
				</Col>
			</Row>

		
			<Row className="text-center">
				<Col className="mobile-row">
					<span className='tacka'>۞</span>
					{VjezbeRow(data, 'vjezba', 'broj8')}
				</Col>
			</Row>
			<Row className="text-center">
				<Col className="mobile-row">
					<span className='tacka'>۞</span>
					{VjezbeRow(data, 'vjezba', 'broj9')}
					</Col>
			</Row>
			<Row className="text-center">
				<Col className="mobile-row">
					<span className='tacka'>۞</span>
					{VjezbeRow(data, 'vjezba', 'broj10')}
				</Col>
			</Row>

			<Row className="text-center">
				<Col className="mobile-row">
					<span className='tacka'>۞</span>
					{VjezbeRow(data, 'vjezba', 'broj12')}
					<span className='tacka'>۞</span>
					{VjezbeRow(data, 'vjezba', 'broj11')}
				</Col>
			</Row>

			<Row className="text-center">
				<Col className="mobile-row">
					<span className='tacka'>۞</span>
					{VjezbeRow(data, 'vjezba', 'broj14')}
					<span className='tacka'>۞</span>
					{VjezbeRow(data, 'vjezba', 'broj13')}
				</Col>
			</Row>

			<Footer prev="/lekcija5" next="/lekcija7" />
			</Container>
		</React.Fragment>
	);
}

export default L6;
