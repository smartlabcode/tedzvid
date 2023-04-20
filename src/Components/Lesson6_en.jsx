import React from "react";
import data from "../Data/L6Data.json";
import Footer from "../Body/MainFooter";
import VjezbeRow from "../Helpers/VjezbeHelper";
import PlayerRow from "../Helpers/PlayerHelper";
import LekcijaMenu from "../Body/LekcijaMenu";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { MdZoomOutMap } from "react-icons/md";
import { IconContext } from "react-icons";

import { useTranslation } from "react-i18next";

// Bootstrap
import { Row, Col, Container } from "react-bootstrap";


// Other
import "../App.scss";
import Arabic from "../Letters/Arabic";
import Player from "../Player/Player";

  const r3 = data.row3.map((dat, ind) => {
    return (
      <Arabic arabic={dat.highlight} key={"a" + dat.id}>
        {dat.word}
      </Arabic>
    );
  });

const Lesson6_bs = () => {

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
    <LekcijaMenu broj='6' naziv='IDGHAM WITH GHUNNAH' />
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
								6 IDGHAM WITH GHUNNAH
							</h2>
						</div>
						<h4 className='text-center'>
							<strong>Assimilation with the airflow through the nose</strong>
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
						When the letter <strong>N</strong> with <strong>sukoon</strong> (
						<span className='arapski-lekcija'>نْ</span>) or nunation/{' '}
						<strong>tanwin</strong> EN{' '}
						<span className='arapski-lekcija'>ـــًـــ</span> , IN{' '}
						<span className='arapski-lekcija'>ـــٍــ</span> , UN{' '}
						<span className='arapski-lekcija'>ــٌــ</span> is followed by one of the four letters: &nbsp;
						<span
							className='arapski-lekcija'
							style={{ color: 'red', fontSize: '3rem', whiteSpace: 'nowrap' }}>
							و ن م ي
						</span>{' '}
						(contained in the word <strong>jemnu</strong> –
						<span className='arapski-lekcija'>يَمْنُو</span>), the letter <strong>N</strong>(
						<span className='arapski-lekcija'>ن</span>) assimilates into one of the aforementioned letters, with the airflow through the nose lasting 2 counts, for example:

					</Col>
				</Row>

				<Row>
					<Col>
						<br />
					</Col>
				</Row>

				<Row className='text-center reorder'>
					<Col>{PlayerRow(data, 'row1_en')}</Col>
				</Row>

				<Row className='text-center reorder-basic rtl'>
					<Col>{PlayerRow(data, 'row2')}</Col>
				</Row>

				<Row className='text-center reorder-basic '>
					<Col>
						<span key={'key' + data.row3[2].id}>
							<Player url={data.row3[2].url} key={'p' + data.row3[2].id}>
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
						When the letter <strong>N</strong> with <strong>sukoon</strong> (
						<span className='arapski-lekcija'>نْ</span>) or nunation/{' '}
						<strong>tanwin</strong> EN{' '}
						<span className='arapski-lekcija'>ـــًـــ</span> , IN{' '}
						<span className='arapski-lekcija'>ـــٍــ</span> , UN{' '}
						<span className='arapski-lekcija'>ــٌــ</span> is followed by one of the four letters: &nbsp;
						<span
							className='arapski-lekcija'
							style={{ color: 'red', fontSize: '3rem', whiteSpace: 'nowrap' }}>
							و ن م ي
						</span>{' '}
						(contained in the word <strong>jemnu</strong> –
						<span className='arapski-lekcija'>يَمْنُو</span>), the letter <strong>N</strong>(
						<span className='arapski-lekcija'>ن</span>) assimilates into one of the aforementioned letters, with the airflow through the nose lasting 2 counts, for example:

					</Col>
						</Row>

						<Row>
							<Col>
								<br />
							</Col>
						</Row>

						<Row className='text-center reorder'>
							<Col>{PlayerRow(data, 'row1_en')}</Col>
						</Row>

						<Row className='text-center reorder-basic rtl'>
							<Col>{PlayerRow(data, 'row2')}</Col>
						</Row>

						<Row className='text-center '>
							<Col>
								<span key={'key' + data.row3[2].id}>
									<Player url={data.row3[2].url} key={'p' + data.row3[2].id}>
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

				<Row className='text-center '>
					<Col className='mobile-row'>
						<span className='tacka'>
							{VjezbeRow(data, 'vjezba', 'broj8')} ۞{' '}
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
						<span className='tacka'>
							{VjezbeRow(data, 'vjezba', 'broj12')} ۞
						</span>
					</Col>
				</Row>

				<Row className='text-center'>
					<Col className='mobile-row'>
						<span className='tacka'>
							{VjezbeRow(data, 'vjezba', 'broj14')} ۞
						</span>
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
									src='https://www.youtube.com/embed/S8O9w4ZnD0A?list=PLcdhKKk9LmetUjroRtBCCkugO_whS-cW2'
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
									{VjezbeRow(data, 'vjezba', 'broj11')} ۞{' '}
								</span>
								<span className='tacka'>
									{VjezbeRow(data, 'vjezba', 'broj12')} ۞{' '}
								</span>
							</Col>
						</Row>

						<Row className='text-center'>
							<Col className='mobile-row'>
								<span className='tacka'>
									{VjezbeRow(data, 'vjezba', 'broj14')} ۞
								</span>
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
				<Footer prev='/lekcija5' next='/lekcija7' />
			</Container>
    </>
  )
}

export default Lesson6_bs