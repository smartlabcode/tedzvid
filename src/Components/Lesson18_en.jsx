import React from 'react';
import data from '../Data/L18Data.json';
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

const Lesson18_en = () => {

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
    <LekcijaMenu broj='18' naziv='AL-MADD AL-MUTTASIL' />
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
								18 AL-MADD AL-MUTTASIL
							</h2>
						</div>
						<h4 className='text-center'>
							<strong>Connected extension</strong>
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
                    When <strong>the long vowel</strong> A{' '}
						<span className='arapski-lekcija'>ـــَــ ا</span> , I{' '}
						<span className='arapski-lekcija'>ـــِـ ى </span>, U{' '}
						<span className='arapski-lekcija'>ـــُــ و</span>  is followed by{' '}
						<strong>a hamzah</strong><u></u> within the same word, al-madd al-muttasil occurs. The reciter must extend the word for 4 to 5 counts, as in: {PlayerRow(data, 'row1')}
					</Col>
				</Row>

				<Row className='text-center'>
					<Col>{PlayerRow(data, 'row2')}</Col>
				</Row>

				<Row className='text-center reorder-basic rtl'>
					<Col>{PlayerRow(data, 'row3')}</Col>
				</Row>

				<Row className='text-center'>
					<Col>{VjezbeRow(data, 'multirow', 'row4')}</Col>
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
                    When <strong>the long vowel</strong> A{' '}
						<span className='arapski-lekcija'>ـــَــ ا</span> , I{' '}
						<span className='arapski-lekcija'>ـــِـ ى </span>, U{' '}
						<span className='arapski-lekcija'>ـــُــ و</span>  is followed by{' '}
						<strong>a hamzah</strong><u></u> within the same word, al-madd al-muttasil occurs. The reciter must extend the word for 4 to 5 counts, as in: {PlayerRow(data, 'row1')}
					</Col>
						</Row>

						<Row className='text-center'>
							<Col>{PlayerRow(data, 'row2')}</Col>
						</Row>

						<Row className='text-center rtl'>
							<Col>{PlayerRow(data, 'row3')}</Col>
						</Row>

						<Row className='text-center'>
							<Col>{VjezbeRow(data, 'multirow', 'row4')}</Col>
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
				<Row className='text-center rtl'>
					<Col>
						<span className='tacka'>{VjezbeRow(data, 'vjezba', 'broj6')} </span>
						<span className='tacka'>۞ </span>
					</Col>
				</Row>
				<Row className='text-center'>
					<Col className='mobile-row'>
						{VjezbeRow(data, 'vjezba', 'broj7')}
						<span className='tacka'>
							{VjezbeRow(data, 'vjezba', 'broj8')} ۞
						</span>
					</Col>
				</Row>
				<Row className='text-center'>
					<Col className='mobile-row'>
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
					<Col className='mobile-row'>
						<span className='tacka'>
							{VjezbeRow(data, 'vjezba', 'broj11')} ۞
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
									src='https://www.youtube.com/embed/0c6JsyBRUtQ?list=PLcdhKKk9LmetUjroRtBCCkugO_whS-cW2'
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
						<Row className='text-center rtl'>
							<Col>
								<span className='tacka'>
									{VjezbeRow(data, 'vjezba', 'broj6')}{' '}
								</span>
								<span className='tacka'>۞ </span>
							</Col>
						</Row>
						<Row className='text-center'>
							<Col className='mobile-row'>
								{VjezbeRow(data, 'vjezba', 'broj7')}
								<span className='tacka'>
									{VjezbeRow(data, 'vjezba', 'broj8')} ۞
								</span>
							</Col>
						</Row>
						<Row className='text-center'>
							<Col className='mobile-row'>
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
							<Col className='mobile-row'>
								<span className='tacka'>
									{VjezbeRow(data, 'vjezba', 'broj11')} ۞
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

				<Footer prev='/lekcija17' next='/lekcija19' />
			</Container>
    </>
  )
}

export default Lesson18_en