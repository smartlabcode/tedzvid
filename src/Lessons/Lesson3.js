import React from 'react';
import data from '../Data/L3Data.json';
import PlayerRow from '../Helpers/PlayerHelper';
import VjezbeRow from '../Helpers/VjezbeHelper';
import Footer from '../Body/MainFooter';

// Bootstrap
import { Row, Col } from 'react-bootstrap';

// Other
import '../App.scss';

function L3() {
	return (
		<React.Fragment>
			<Row>
				<Col>
					<h2 className="text-center font-weight-bold text-uppercase">LAFZATULLAH</h2>
					<h4 className="text-center">
						izgovaranje riječi Allah <span className="arapski-lekcija"> اللّٰه </span>
					</h4>
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
					Kada prije riječi Allah<span className="arapski-lekcija" style={{ fontSize: '2em' }}>
						{' '}
						اللّٰه{' '}
					</span>dođe <strong>vokal</strong> E{' '}
					<span className="arapski-lekcija" style={{ fontSize: '2.2em' }}>
						{' '}
						ــــــَــــــ{' '}
					</span>ili <strong>vokal</strong> U<span className="arapski-lekcija" style={{ fontSize: '2.2em' }}>
						ــــــُــــــ{' '}
					</span>, riječ Allah
					<span className="arapski-lekcija" style={{ fontSize: '2em' }}>
						اللّٰه{' '}
					</span>se uči <u>krupno</u>, npr.:
					{PlayerRow(data, 'row1')}
				</Col>
			</Row>

			<Row className="text-center">
				<Col>{VjezbeRow(data, 'multirow', 'row2')}</Col>
			</Row>

			<Row>
				<Col className="opisLekcije">
					Kada prije riječi Allah<span className="arapski-lekcija" style={{ fontSize: '2em' }}>
						{' '}
						اللّٰه
					</span>{' '}
					dođe <strong>vokal</strong> I<span className="arapski-lekcija" style={{ fontSize: '2.2em' }}>
						{' '}
						ـــــــِـــــ
					</span>, riječ Allah<span className="arapski-lekcija" style={{ fontSize: '2em' }}>
						{' '}
						اللّٰه
					</span>{' '}
					se uči <u>tanko</u>, npr.:
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
					{VjezbeRow(data, 'vjezba', 'broj15')}
					۞
					{VjezbeRow(data, 'vjezba', 'broj14')}
				</Col>
			</Row>
			<Row className="text-center">
				<Col>
					۞
					{VjezbeRow(data, 'vjezba', 'broj17')}
					۞
					{VjezbeRow(data, 'vjezba', 'broj16')}
				</Col>
			</Row>

			<Footer prev="/lekcija1" next="/lekcija4" />
		</React.Fragment>
	);
}

export default L3;
