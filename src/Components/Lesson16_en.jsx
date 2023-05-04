import React from 'react';
import data from '../Data/L16Data.json';
import PlayerRow from '../Helpers/PlayerHelper';
import VjezbeRow from '../Helpers/VjezbeHelper';
import Footer from '../Body/MainFooter';
import LekcijaMenu from '../Body/LekcijaMenu';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { MdZoomOutMap } from 'react-icons/md';
import { IconContext } from 'react-icons';
import { useTranslation } from "react-i18next";

// Bootstrap
import { Row, Col, Table, Container } from 'react-bootstrap';

const Lesson16_en = () => {

    const { t } = useTranslation();
	const [show, setShow] = React.useState(false);
	const [showT, setShowT] = React.useState(false);
	const [showZ, setShowZ] = React.useState(false);
	const [showL, setShowL] = React.useState(false);

	const handleCloseL = () => setShowL(false);
	const handleShowL = () => setShowL(true);

	const handleCloseT = () => setShowT(false);
	const handleShowT = () => setShowT(true);

	const handleCloseZ = () => setShowZ(false);
	const handleShowZ = () => setShowZ(true);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	const { i18n } = useTranslation();
  return (
    <>
    <LekcijaMenu broj='16' naziv='IDGHAM MUTAQAARIBAYN' />
			<Container>
				<Row>
					<Col>
						<div className='mobileTop'>
							<center>
								<img
									src={process.env.PUBLIC_URL + '/assets/svg/Group 61.svg'}
									alt='Group 61'
								/>
							</center>
							<h2
								className='text-center font-weight-bold text-uppercase'
								id='lekcija'>
								16 IDGHAM MUTAQAARIBAYN
							</h2>
						</div>
						<h4 className='text-center'>
							<strong>Assimilation of letters with similar origin</strong>
						</h4>
						<hr />
					</Col>
				</Row>

				<Row>
					<Col>
						<br />
					</Col>
				</Row>
				<IconContext.Provider
					value={{ size: '30px', style: { float: 'right' } }}>
					<MdZoomOutMap className='zoomIcon' onClick={handleShowL} />
				</IconContext.Provider>

				<Row>
					<Col className='opisLekcije'>
                    When two letters close in proximity but with different characteristics stand next to each other, the first with sukoon and the second with a short vowel/haraka, the former assimilates into the latter from the same group:
					</Col>
				</Row>

				<Row>
					<Col className='opisLekcije '>
						1. When the letter <strong>Q</strong> with  <strong>sukoon</strong>{' '}
						<span className='arapski'>(قْ)</span> is followed by the letter <strong>K</strong>{' '}
						<span className='arapski'>(ك)</span> with  <strong>a short vowel/haraka</strong>:
					</Col>
				</Row>

				<Row className='text-center'>
					<Col>{PlayerRow(data, 'row1_en')}</Col>
				</Row>

				<Row>
					<Col className='opisLekcije '>
						2. When the letter <strong>L</strong> with <strong>sukoon</strong>{' '}
						<span className='arapski'>(لْ)</span> is followed by the letter <strong>R</strong>{' '}
						<span className='arapski'>(ر)</span> with <strong>a short vowel/haraka</strong>:
					</Col>
				</Row>

				<Row className='text-center'>
					<Col>{PlayerRow(data, 'row2_en')}</Col>
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
				<Modal
					show={showL}
					onHide={handleCloseL}
					backdrop='static'
					keyboard={false}>
					<Modal.Header closeButton>
						<Modal.Title>LESSON</Modal.Title>
					</Modal.Header>
					<Modal.Body className='custom-modal'>
                    <Row>
					<Col className='opisLekcije'>
                    When two letters close in proximity but with different characteristics stand next to each other, the first with sukoon and the second with a short vowel/haraka, the former assimilates into the latter from the same group:
					</Col>
				</Row>

				<Row>
					<Col className='opisLekcije '>
						1. When the letter <strong>Q</strong> with  <strong>sukoon</strong>{' '}
						<span className='arapski'>(قْ)</span> is followed by the letter <strong>K</strong>{' '}
						<span className='arapski'>(ك)</span> with  <strong>a short vowel/haraka</strong>:
					</Col>
				</Row>

				<Row className='text-center'>
					<Col>{PlayerRow(data, 'row1_en')}</Col>
				</Row>

				<Row>
					<Col className='opisLekcije '>
						2. When the letter <strong>L</strong> with <strong>sukoon</strong>{' '}
						<span className='arapski'>(لْ)</span> is followed by the letter <strong>R</strong>{' '}
						<span className='arapski'>(ر)</span> with <strong>a short vowel/haraka</strong>:
					</Col>
				</Row>

						<Row className='text-center'>
							<Col>{PlayerRow(data, 'row2_en')}</Col>
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
					</Modal.Body>
					<Modal.Footer>
						<Button variant='secondary' onClick={handleCloseL}>
							Close
						</Button>
					</Modal.Footer>
				</Modal>
				<h2 className='text-center' id='vjezba'>
					<strong>PRACTICE</strong>
				</h2>
				<hr />

				<Row>
					<Col>
						<br />
					</Col>
				</Row>
				<IconContext.Provider
					value={{ size: '30px', style: { float: 'right' } }}>
					<MdZoomOutMap className='zoomIcon' onClick={handleShow} />
				</IconContext.Provider>
				<Row className='text-center'>
					<Col className='mobile-row rtl'>
						<span className='tacka'>
							{VjezbeRow(data, 'vjezba', 'broj5')} ۞
						</span>
						{VjezbeRow(data, 'vjezba', 'broj6')}
						<span className='tacka'>
							{VjezbeRow(data, 'vjezba', 'broj7')} ۞
						</span>
					</Col>
				</Row>
				<Row className='text-center'>
					<Col className='mobile-row rtl'>
						<span className='tacka'>
							{VjezbeRow(data, 'vjezba', 'broj8')} ۞
						</span>
						<span className='tacka'>
							{VjezbeRow(data, 'vjezba', 'broj9')} ۞
						</span>
					</Col>
				</Row>
				<Row className='text-center'>
					<Col className='mobile-row'>
						<span className='tacka'>
							{VjezbeRow(data, 'vjezba', 'broj10')} ۞
						</span>
					</Col>
				</Row>

				<Row className='text-center'>
					<Col className='mobile-row rtl'>
						<span className='tacka'>
							{VjezbeRow(data, 'vjezba', 'broj11')} ۞
						</span>
						<span className='tacka'>
							{VjezbeRow(data, 'vjezba', 'broj12')} ۞
						</span>
					</Col>
				</Row>

				<Row className='text-center'>
					<Col className='mobile-row'>
						<span className='tacka'>
							{VjezbeRow(data, 'vjezba', 'broj13')} ۞
						</span>
					</Col>
				</Row>
				<Row>
					<Col>
						<hr />
						<h2 className='text-center' id='video'>
							<strong>VIDEO LECTURE</strong>
						</h2>
						<center>
							<div className='video'>
								<iframe
									width='900'
									height='506'
									src='https://www.youtube.com/embed/tbnEeTgrYXI?list=PLcdhKKk9LmetUjroRtBCCkugO_whS-cW2'
									title='YouTube video player'
									frameborder='0'
									allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
									allowFullScreen='true'
									webkitallowfullscreen='true'
									mozallowfullscreen='true'></iframe>
							</div>
						</center>
					</Col>
				</Row>
				<Modal
					show={show}
					onHide={handleClose}
					backdrop='static'
					keyboard={false}>
					<Modal.Header closeButton>
						<Modal.Title>PRACTICE</Modal.Title>
					</Modal.Header>
					<Modal.Body className='custom-modal'>
						<Row className='text-center'>
							<Col className='mobile-row rtl'>
								<span className='tacka'>
									{VjezbeRow(data, 'vjezba', 'broj5')} ۞
								</span>
								{VjezbeRow(data, 'vjezba', 'broj6')}
								<span className='tacka'>
									{VjezbeRow(data, 'vjezba', 'broj7')} ۞
								</span>
							</Col>
						</Row>
						<Row className='text-center'>
							<Col className='mobile-row rtl'>
								<span className='tacka'>
									{VjezbeRow(data, 'vjezba', 'broj8')} ۞
								</span>
								<span className='tacka'>
									{VjezbeRow(data, 'vjezba', 'broj9')} ۞
								</span>
							</Col>
						</Row>
						<Row className='text-center'>
							<Col className='mobile-row'>
								<span className='tacka'>
									{VjezbeRow(data, 'vjezba', 'broj10')} ۞
								</span>
							</Col>
						</Row>

						<Row className='text-center'>
							<Col className='mobile-row rtl'>
								<span className='tacka'>
									{VjezbeRow(data, 'vjezba', 'broj11')} ۞
								</span>
								<span className='tacka'>
									{VjezbeRow(data, 'vjezba', 'broj12')} ۞
								</span>
							</Col>
						</Row>

						<Row className='text-center'>
							<Col className='mobile-row'>
								<span className='tacka'>
									{VjezbeRow(data, 'vjezba', 'broj13')} ۞
								</span>
							</Col>
						</Row>
					</Modal.Body>
					<Modal.Footer>
						<Button variant='secondary' onClick={handleClose}>
							Close
						</Button>
					</Modal.Footer>
				</Modal>
				<Footer prev='/lekcija15' next='/lekcija17' />
			</Container>
    </>
  )
}

export default Lesson16_en