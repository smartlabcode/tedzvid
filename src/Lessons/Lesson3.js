import React from 'react';
import data from '../Data/L3Data.json';
import PlayerRow from '../Helpers/PlayerHelper';
import VjezbeRow from '../Helpers/VjezbeHelper';
import Footer from '../Body/MainFooter';

// Bootstrap
import {Row, Col} from 'react-bootstrap';

// Other
import '../App.scss';

function L3() {
    return (
        <React.Fragment>
        <Row>
          <Col>
            <h2 className="text-center font-weight-bold text-uppercase">LAFZATULLAH</h2>
            <h4 className="text-center">izgovaranje riječi Allah اللّٰه</h4>
            <hr/>
          </Col>
        </Row>

        <Row>
				  <Col>
					<br />
				  </Col>
			  </Row>

        <Row>
          <Col className="opisLekcije">
            Kada prije riječi Allah اللّٰه dođe vokal E  ــــــَــــــ ili vokal U  ــــــُــــــ , riječ Allah اللّٰه se uči krupno, npr.:
          </Col>
        </Row>

        <Row>
          <Col>
            { PlayerRow(data, 'row1') }
          </Col>
        </Row>

        <Row>
          <Col>
            { VjezbeRow(data, 'broj18') }
          </Col>
        </Row>

        <Row>
          <Col className="opisLekcije">
            Kada prije riječi Allah اللّٰه dođe vokal I  ـــــــِـــــ, riječ Allah اللّٰه se uči tanko, npr.:
          </Col>
        </Row>

        <Row>
          <Col>
            { PlayerRow(data, 'row2') }
          </Col>
        </Row>

        <Row>
          <Col>
            { PlayerRow(data, 'row3') }
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

        <hr/>
        <h2 className="text-center">Vježbe</h2>
        <hr/>

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

			<Footer prev="/lekcija1" next="/lekcija3" />
		</React.Fragment>

    );
  }

  export default L3;