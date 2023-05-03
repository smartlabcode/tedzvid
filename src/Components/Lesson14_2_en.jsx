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
import Arabic from "../Letters/Arabic";
// Bootstrap
import { Row, Col, Table, Container } from 'react-bootstrap';

const Lesson14_2_en = () => {

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
    <LekcijaMenu broj='14.2' naziv='HUKMURRA' />
			<Container id='lekcija'>
				<IconContext.Provider
					value={{ size: '30px', style: { float: 'right' } }}>
					<MdZoomOutMap className='zoomIcon' onClick={handleShowL} />
				</IconContext.Provider>
				<Row>
					<Col className='opisLekcije'>
						The letter<strong> R </strong>
						<span className='arapski-lekcija'>(ر)</span> is recited <u>non-emphatically</u> y in the following situations:
					</Col>
				</Row>

				<Row>
					<Col className='opisLekcije'>
						<strong>1.</strong> When the letter<strong> R </strong>appears with the{' '}
						<strong>vowel</strong> I ( {PlayerRow(data, 'row9')} ), as in:{' '}
						<br />
						{PlayerRow(data, 'row8')}
					</Col>
				</Row>

				<Row>
					<Col className='opisLekcije'>
						<strong>2.</strong> When the letter<strong> R </strong>has{' '}
						<strong>sukoon</strong>, and is preceded by the letter with the{' '}
						<strong>vowel</strong> I (
						<span className='arapski-lekcija' style={{ color: 'red' }}>
							ــــِـــ رْ{' '}
						</span>
						), as in:
						<br />
						{PlayerRow(data, 'row10')}
					</Col>
				</Row>

				<Row>
					<Col className='opisLekcije'>
						<strong>3.</strong> When the letter<strong> R </strong>has{' '}
						<strong>sukoon</strong>, and is preceded by the{' '}
						<strong>letter with sukoon</strong>, which is in turn preceded by the letter with the{' '}
						<strong>vowel</strong> I (
						<span className='arapski-lekcija' style={{ color: 'red' }}>
							{' '}
							ــِـ ــْـ رْ{' '}
						</span>
						), as in:
						<br />
						{PlayerRow(data, 'row11')}
					</Col>
				</Row>

				<Row>
					<Col className='opisLekcije'>
						<strong>4.</strong> When the letter<strong> R </strong>has{' '}
						<strong>sukoon</strong>, and is preceded by the letter <strong>J</strong>{' '}
						with <strong>sukoon</strong>, which is in turn preceded by a letter with the{' '}
						<strong>vowel</strong> E (
						<span className='arapski-lekcija' style={{ color: 'red' }}>
							{' '}
							ــــَـــ يْـــرْ{' '}
						</span>
						), as in: {PlayerRow(data, 'row12')}
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
						The letter<strong> R </strong>
						<span className='arapski-lekcija'>(ر)</span> is recited <u>non-emphatically</u> y in the following situations:
					</Col>
				</Row>

				<Row>
					<Col className='opisLekcije'>
						<strong>1.</strong> When the letter<strong> R </strong>appears with the{' '}
						<strong>vowel</strong> I ( {PlayerRow(data, 'row9')} ), as in:{' '}
						<br />
						{PlayerRow(data, 'row8')}
					</Col>
				</Row>

				<Row>
					<Col className='opisLekcije'>
						<strong>2.</strong> When the letter<strong> R </strong>has{' '}
						<strong>sukoon</strong>, and is preceded by the letter with the{' '}
						<strong>vowel</strong> I (
						<span className='arapski-lekcija' style={{ color: 'red' }}>
							ــــِـــ رْ{' '}
						</span>
						), as in:
						<br />
						{PlayerRow(data, 'row10')}
					</Col>
				</Row>

				<Row>
					<Col className='opisLekcije'>
						<strong>3.</strong> When the letter<strong> R </strong>has{' '}
						<strong>sukoon</strong>, and is preceded by the{' '}
						<strong>letter with sukoon</strong>, which is in turn preceded by the letter with the{' '}
						<strong>vowel</strong> I (
						<span className='arapski-lekcija' style={{ color: 'red' }}>
							{' '}
							ــِـ ــْـ رْ{' '}
						</span>
						), as in:
						<br />
						{PlayerRow(data, 'row11')}
					</Col>
				</Row>

				<Row>
					<Col className='opisLekcije'>
						<strong>4.</strong> When the letter<strong> R </strong>has{' '}
						<strong>sukoon</strong>, and is preceded by the letter <strong>J</strong>{' '}
						with <strong>sukoon</strong>, which is in turn preceded by a letter with the{' '}
						<strong>vowel</strong> E (
						<span className='arapski-lekcija' style={{ color: 'red' }}>
							{' '}
							ــــَـــ يْـــرْ{' '}
						</span>
						), as in: {PlayerRow(data, 'row12')}
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
							{VjezbeRow(data, 'vjezba', 'broj28')} ۞
						</span>
						<span className='tacka'>
							{VjezbeRow(data, 'vjezba', 'broj29')} ۞
						</span>
					</Col>
				</Row>
				<Row className='text-center'>
					<Col className='mobile-row'>
						<span className='tacka'>
							{VjezbeRow(data, 'vjezba', 'broj30')} ۞
						</span>
						<span className='tacka'>
							{VjezbeRow(data, 'vjezba', 'broj31')} ۞
						</span>
					</Col>
				</Row>
				<Row className='text-center'>
					<Col className='mobile-row'>
						<span className='tacka'>
							{VjezbeRow(data, 'vjezba', 'broj32')} ۞
						</span>
						<span className='tacka'>
							{VjezbeRow(data, 'vjezba', 'broj33')} ۞
						</span>
					</Col>
				</Row>
				<Row className='text-center'>
					<Col className='mobile-row'>
						<span className='tacka'>
							{VjezbeRow(data, 'vjezba', 'broj34')} ۞
						</span>
						<span className='tacka'>
							{VjezbeRow(data, 'vjezba', 'broj35')} ۞
						</span>
					</Col>
				</Row>
				<Row className='text-center'>
					<Col className='mobile-row'>
						<span className='tacka'>
							{VjezbeRow(data, 'vjezba', 'broj36')} ۞
						</span>
						<span className='tacka'>
							{VjezbeRow(data, 'vjezba', 'broj37')} ۞
						</span>
						<span className='tacka'>
							{VjezbeRow(data, 'vjezba', 'broj38')} ۞
						</span>
					</Col>
				</Row>

				<Row className='text-center'>
					<Col className='mobile-row'>
						<span className='tacka'>
							{VjezbeRow(data, 'vjezba', 'broj39')} ۞
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
									{VjezbeRow(data, 'vjezba', 'broj28')} ۞
								</span>
								<span className='tacka'>
									{VjezbeRow(data, 'vjezba', 'broj29')} ۞
								</span>
							</Col>
						</Row>
						<Row className='text-center'>
							<Col className='mobile-row'>
								<span className='tacka'>
									{VjezbeRow(data, 'vjezba', 'broj30')} ۞
								</span>
								<span className='tacka'>
									{VjezbeRow(data, 'vjezba', 'broj31')} ۞
								</span>
							</Col>
						</Row>
						<Row className='text-center'>
							<Col className='mobile-row'>
								<span className='tacka'>
									{VjezbeRow(data, 'vjezba', 'broj32')} ۞
								</span>
								<span className='tacka'>
									{VjezbeRow(data, 'vjezba', 'broj33')} ۞
								</span>
							</Col>
						</Row>
						<Row className='text-center'>
							<Col className='mobile-row'>
								<span className='tacka'>
									{VjezbeRow(data, 'vjezba', 'broj34')} ۞
								</span>
								<span className='tacka'>
									{VjezbeRow(data, 'vjezba', 'broj35')} ۞
								</span>
							</Col>
						</Row>
						<Row className='text-center'>
							<Col className='mobile-row'>
								<span className='tacka'>
									{VjezbeRow(data, 'vjezba', 'broj36')} ۞
								</span>
								<span className='tacka'>
									{VjezbeRow(data, 'vjezba', 'broj37')} ۞
								</span>
								<span className='tacka'>
									{VjezbeRow(data, 'vjezba', 'broj38')} ۞
								</span>
							</Col>
						</Row>

						<Row className='text-center'>
							<Col className='mobile-row'>
								<span className='tacka'>
									{VjezbeRow(data, 'vjezba', 'broj39')} ۞
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
				<Footer prev='/lekcija14' next='/lekcija15' />
			</Container>
    </>
  )
}

export default Lesson14_2_en