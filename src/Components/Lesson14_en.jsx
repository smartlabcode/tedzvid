import React from 'react';
import data from '../Data/L14Data.json';
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

const Lesson14_en = () => {

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
    <LekcijaMenu broj='14' naziv='HUKMURRA' />
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
								14 HUKMURRA
							</h2>
						</div>
						<h4 className='text-center'>
							<strong>
                            Pronunciation of the letter R <span className='arapski-lekcija'>(ر)</span>
							</strong>
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
                    The letter<strong> R </strong>
						<span className='arapski-lekcija'>(ر)</span> is recited <u>emphatically</u> in the following situations:
					</Col>
				</Row>

				<Row>
					<Col className='opisLekcije'>
						<strong>1.</strong> When the letter<strong> R </strong>appears with the{' '}
						<strong>vowel</strong> E ( {PlayerRow(data, 'row1')}) or{' '}
						<strong>vowel </strong> U ( {PlayerRow(data, 'row2')}), as in:{' '}
						<br />
						{PlayerRow(data, 'row3')}
					</Col>
				</Row>

				<Row>
					<Col className='opisLekcije'>
						<strong>2.</strong> When the letter<strong> R </strong>has{' '}
						<strong>sukoon</strong>, and is preceded by the{' '}
						<strong>vowel </strong> E (
						<span className='arapski-lekcija' style={{ color: 'red' }}>
							{' '}
							ــَـ رْ{' '}
						</span>
						) or U (
						<span className='arapski-lekcija' style={{ color: 'red' }}>
							ــُـ رْ
						</span>
						), as in:
						<br />
						{PlayerRow(data, 'row4')}
					</Col>
				</Row>

				<Row>
					<Col className='opisLekcije'>
						<strong>3.</strong> When the letter
						<strong>
							<strong> R </strong>
						</strong>
						has <strong>sukoon</strong>, and is preceded by the{' '}
						<strong>letter with sukoon,</strong>, which is in turn preceded by the letter with the{' '}
						<strong>vowel</strong> E (
						<span className='arapski-lekcija' style={{ color: 'red' }}>
							{' '}
							ــَـ ــْـ رْ{' '}
						</span>
						) or U (
						<span className='arapski-lekcija' style={{ color: 'red' }}>
							{' '}
							ــُـ ــْـ رْ{' '}
						</span>
						), as in:
						<br /> {PlayerRow(data, 'row5')}
					</Col>
				</Row>

				<Row>
					<Col className='opisLekcije'>
						<strong>4.</strong> When the letter<strong> R </strong>has {' '}
						<strong>sukoon</strong> (
						<span className='arapski-lekcija' style={{ color: 'red' }}>
							رْ
						</span>
						), and is preceded by the sound with unstable vowel I/kesra, as in: <br />
						{PlayerRow(data, 'row6')}
					</Col>
				</Row>

				<Row>
					<Col className='opisLekcije'>
						<strong>5.</strong> When the letter<strong> R </strong>has{' '}
						<strong>sukoon</strong> (
						<span className='arapski-lekcija' style={{ color: 'red' }}>
							رْ
						</span>
						), and is followed by a heavy letter, for example:
						<br /> {PlayerRow(data, 'row7')}
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
						<Modal.Title>LEKCIJA</Modal.Title>
					</Modal.Header>
					<Modal.Body className='custom-modal'>
						<Row>
					<Col className='opisLekcije'>
                    The letter<strong> R </strong>
						<span className='arapski-lekcija'>(ر)</span> is recited <u>emphatically</u> in the following situations:
					</Col>
				</Row>

				<Row>
					<Col className='opisLekcije'>
						<strong>1.</strong> When the letter<strong> R </strong>appears with the{' '}
						<strong>vowel</strong> E ( {PlayerRow(data, 'row1')}) or{' '}
						<strong>vowel </strong> U ( {PlayerRow(data, 'row2')}), as in:{' '}
						<br />
						{PlayerRow(data, 'row3')}
					</Col>
				</Row>

				<Row>
					<Col className='opisLekcije'>
						<strong>2.</strong> When the letter<strong> R </strong>has{' '}
						<strong>sukoon</strong>, and is preceded by the{' '}
						<strong>vowel </strong> E (
						<span className='arapski-lekcija' style={{ color: 'red' }}>
							{' '}
							ــَـ رْ{' '}
						</span>
						) or U (
						<span className='arapski-lekcija' style={{ color: 'red' }}>
							ــُـ رْ
						</span>
						), as in:
						<br />
						{PlayerRow(data, 'row4')}
					</Col>
				</Row>

				<Row>
					<Col className='opisLekcije'>
						<strong>3.</strong> When the letter
						<strong>
							<strong> R </strong>
						</strong>
						has <strong>sukoon</strong>, and is preceded by the{' '}
						<strong>letter with sukoon,</strong>, which is in turn preceded by the letter with the{' '}
						<strong>vowel</strong> E (
						<span className='arapski-lekcija' style={{ color: 'red' }}>
							{' '}
							ــَـ ــْـ رْ{' '}
						</span>
						) or U (
						<span className='arapski-lekcija' style={{ color: 'red' }}>
							{' '}
							ــُـ ــْـ رْ{' '}
						</span>
						), as in:
						<br /> {PlayerRow(data, 'row5')}
					</Col>
				</Row>

				<Row>
					<Col className='opisLekcije'>
						<strong>4.</strong> When the letter<strong> R </strong>has {' '}
						<strong>sukoon</strong> (
						<span className='arapski-lekcija' style={{ color: 'red' }}>
							رْ
						</span>
						), and is preceded by the sound with unstable vowel I/kesra, as in: <br />
						{PlayerRow(data, 'row6')}
					</Col>
				</Row>

				<Row>
					<Col className='opisLekcije'>
						<strong>5.</strong> When the letter<strong> R </strong>has{' '}
						<strong>sukoon</strong> (
						<span className='arapski-lekcija' style={{ color: 'red' }}>
							رْ
						</span>
						), and is followed by a heavy letter, for example:
						<br /> {PlayerRow(data, 'row7')}
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
							{VjezbeRow(data, 'vjezba', 'broj12')} ۞
						</span>
						<span className='tacka'>
							{VjezbeRow(data, 'vjezba', 'broj13')} ۞
						</span>
						<span className='tacka'>
							{VjezbeRow(data, 'vjezba', 'broj14')} ۞
						</span>
					</Col>
				</Row>
				<Row className='text-center'>
					<Col className='mobile-row'>
						<span className='tacka'>
							{VjezbeRow(data, 'vjezba', 'broj15')} ۞
						</span>
						<span className='tacka'>
							{VjezbeRow(data, 'vjezba', 'broj16')} ۞
						</span>
					</Col>
				</Row>
				<Row className='text-center'>
					<Col className='mobile-row'>
						<span className='tacka'>
							{VjezbeRow(data, 'vjezba', 'broj17')} ۞
						</span>
						<span className='tacka'>
							{VjezbeRow(data, 'vjezba', 'broj18')} ۞
						</span>
					</Col>
				</Row>
				<Row className='text-center'>
					<Col className='mobile-row'>
						<span className='tacka'>
							{VjezbeRow(data, 'vjezba', 'broj19')} ۞
						</span>
						<span className='tacka'>
							{VjezbeRow(data, 'vjezba', 'broj20')} ۞
						</span>
					</Col>
				</Row>
				<Row className='text-center'>
					<Col className='mobile-row'>
						<span className='tacka'>
							{VjezbeRow(data, 'vjezba', 'broj21')} ۞
						</span>
						<span className='tacka'>
							{VjezbeRow(data, 'vjezba', 'broj22')} ۞
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
									src='https://www.youtube.com/embed/rOcWxXFJ_CE?list=PLcdhKKk9LmetUjroRtBCCkugO_whS-cW2'
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
									{VjezbeRow(data, 'vjezba', 'broj12')} ۞
								</span>
								<span className='tacka'>
									{VjezbeRow(data, 'vjezba', 'broj13')} ۞
								</span>
								<span className='tacka'>
									{VjezbeRow(data, 'vjezba', 'broj14')} ۞
								</span>
							</Col>
						</Row>
						<Row className='text-center'>
							<Col className='mobile-row'>
								<span className='tacka'>
									{VjezbeRow(data, 'vjezba', 'broj15')} ۞
								</span>
								<span className='tacka'>
									{VjezbeRow(data, 'vjezba', 'broj16')} ۞
								</span>
							</Col>
						</Row>
						<Row className='text-center'>
							<Col className='mobile-row'>
								<span className='tacka'>
									{VjezbeRow(data, 'vjezba', 'broj17')} ۞
								</span>
								<span className='tacka'>
									{VjezbeRow(data, 'vjezba', 'broj18')} ۞
								</span>
							</Col>
						</Row>
						<Row className='text-center'>
							<Col className='mobile-row'>
								<span className='tacka'>
									{VjezbeRow(data, 'vjezba', 'broj19')} ۞
								</span>
								<span className='tacka'>
									{VjezbeRow(data, 'vjezba', 'broj20')} ۞
								</span>
							</Col>
						</Row>
						<Row className='text-center'>
							<Col className='mobile-row'>
								<span className='tacka'>
									{VjezbeRow(data, 'vjezba', 'broj21')} ۞
								</span>
								<span className='tacka'>
									{VjezbeRow(data, 'vjezba', 'broj22')} ۞
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
				<Footer prev='/lekcija13' next='/lekcija14_2' />
			</Container>
    </>
  )
}

export default Lesson14_en