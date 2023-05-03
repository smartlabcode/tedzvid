import React from 'react';
import data from '../Data/L15Data.json';
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

const Lesson15_en = () => {

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
    <LekcijaMenu broj='15' naziv='IDGHAM MUTAJAANISAYN' />
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
								15 IDGHAM MUTAJAANISAYN
							</h2>
						</div>
						<h4 className='text-center'>
							<strong>Assimilation of letters of the same origin</strong>
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
                    When the letters of the same origin stand next to each other, the first letter with {' '}
						<strong>sukoon</strong>, and the second with <strong>a short vowel/haraka</strong>,
						then the former assimilates into the latter one from the same group: <u></u>:
					</Col>
				</Row>

				<Row>
					<Col className='opisLekcije text-left'>
						<strong className=''>1.</strong>
						<span className='arapski-lekcija'> ط د ت </span> as in:{' '}
						{PlayerRow(data, 'row1')}
					</Col>
				</Row>

				<Row className='text-center  rtl'>
					<Col className='opisLekcije text-center'>
						{PlayerRow(data, 'row2')}
					</Col>
				</Row>

				<Row>
					<Col className='opisLekcije text-left'>
						<strong>2.</strong> <span className='arapski-lekcija'> ظ ذ ث </span>{' '}
						as in: {PlayerRow(data, 'row3')}
					</Col>
				</Row>

				<Row className='text-center  rtl'>
					<Col className='opisLekcije text-center'>
						{PlayerRow(data, 'row4')}
					</Col>
				</Row>

				<Row>
					<Col className='opisLekcije text-left'>
						<strong>3.</strong> <span className='arapski-lekcija'> ب م </span>{' '}
						as in: {PlayerRow(data, 'row5')}
					</Col>
				</Row>

				<Row>
					<Col className='opisLekcije text-center'>
						{PlayerRow(data, 'row6')}
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
                    When the letters of the same origin stand next to each other, the first letter with {' '}
						<strong>sukoon</strong>, and the second with <strong>a short vowel/haraka</strong>,
						then the former assimilates into the latter one from the same group: <u></u>:
					</Col>
						</Row>

						<Row>
							<Col className='opisLekcije text-left'>
								<strong className=''>1.</strong>
								<span className='arapski-lekcija'> ط د ت </span> as in:{' '}
								{PlayerRow(data, 'row1')}
							</Col>
						</Row>

						<Row className='text-center  rtl'>
							<Col className='opisLekcije text-center'>
								{PlayerRow(data, 'row2')}
							</Col>
						</Row>

						<Row>
							<Col className='opisLekcije text-left'>
								<strong>2.</strong>{' '}
								<span className='arapski-lekcija'> ظ ذ ث </span> as in:{' '}
								{PlayerRow(data, 'row3')}
							</Col>
						</Row>

						<Row className='text-center  rtl'>
							<Col className='opisLekcije text-center'>
								{PlayerRow(data, 'row4')}
							</Col>
						</Row>

						<Row>
							<Col className='opisLekcije text-left'>
								<strong>3.</strong>{' '}
								<span className='arapski-lekcija'> ب م </span> as in:{' '}
								{PlayerRow(data, 'row5')}
							</Col>
						</Row>

						<Row>
							<Col className='opisLekcije text-center'>
								{PlayerRow(data, 'row6')}
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
					<Col className='mobile-row'>
						<span className='tacka'>
							{VjezbeRow(data, 'vjezba', 'broj13')} ۞
						</span>
						<span className='tacka'>
							{VjezbeRow(data, 'vjezba', 'broj12')} ۞
						</span>
					</Col>
				</Row>

				<Row className='text-center'>
					<Col className='mobile-row'>
						<span className='tacka'>
							{VjezbeRow(data, 'vjezba', 'broj14')}۞
						</span>
					</Col>
				</Row>

				<Row className='text-center'>
					<Col className='mobile-row'>
						<span className='tacka'>
							{VjezbeRow(data, 'vjezba', 'broj16')} ۞
						</span>
						<span className='tacka'>
							{VjezbeRow(data, 'vjezba', 'broj15')} ۞
						</span>
					</Col>
				</Row>

				<Row className='text-center'>
					<Col className='mobile-row'>
						<span className='tacka'>
							{VjezbeRow(data, 'vjezba', 'broj17')} ۞
						</span>
					</Col>
				</Row>
				<Row className='text-center'>
					<Col className='mobile-row'>
						<span className='tacka'>
							{VjezbeRow(data, 'vjezba', 'broj18')} ۞
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
									src='https://www.youtube.com/embed/Q3ACHoWzWN0?list=PLcdhKKk9LmetUjroRtBCCkugO_whS-cW2'
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
							<Col className='mobile-row'>
								<span className='tacka'>
									{VjezbeRow(data, 'vjezba', 'broj13')} ۞
								</span>
								<span className='tacka'>
									{VjezbeRow(data, 'vjezba', 'broj12')} ۞
								</span>
							</Col>
						</Row>

						<Row className='text-center'>
							<Col>
								<span className='tacka'>
									۞{VjezbeRow(data, 'vjezba', 'broj14')}{' '}
								</span>
							</Col>
						</Row>

						<Row className='text-center'>
							<Col className='mobile-row'>
								<span className='tacka'>
									{VjezbeRow(data, 'vjezba', 'broj16')} ۞
								</span>
								<span className='tacka'>
									{VjezbeRow(data, 'vjezba', 'broj15')} ۞
								</span>
							</Col>
						</Row>

						<Row className='text-center'>
							<Col className='mobile-row'>
								<span className='tacka'>
									{VjezbeRow(data, 'vjezba', 'broj17')} ۞
								</span>
							</Col>
						</Row>
						<Row className='text-center'>
							<Col className='mobile-row'>
								<span className='tacka'>
									{VjezbeRow(data, 'vjezba', 'broj18')} ۞
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
				<Footer prev='/lekcija14' next='/lekcija16' />
			</Container>
    </>
  )
}

export default Lesson15_en