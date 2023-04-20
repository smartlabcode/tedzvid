import React from 'react';
import data from '../Data/L1Data.json';
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

const Lesson1_bs = () => {

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
    <LekcijaMenu broj='1' naziv='WAQF' />
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

							<h2 className='text-center font-weight-bold text-uppercase'>
								1 WAQF
							</h2>
						</div>

						<h4 className='text-center' id='lekcija'>
							<strong>WAQF – stopping during the recitation of the Qur&#39;an</strong>
						</h4>
						<hr />
					</Col>
				</Row>
				<IconContext.Provider
					value={{ size: '30px', style: { float: 'right' } }}>
					<MdZoomOutMap className='zoomIcon' onClick={handleShowL} />
				</IconContext.Provider>

				<Row>
					<Col className='opisLekcije'>
						During the recitation of the Qur&#39;an, the reader can stop in the following
						situations: at the end of the verse, if there is a stopping sign and when he is out
						of breath. It can be done the following way:
					</Col>
				</Row>
				<Row>
					<Col className='opisLekcije my-3'>
						<strong>1.</strong> When the word (at which he stops) ends {' '}
						<strong>in the short vowel</strong> E{' '}
						<span className='arapski-lekcija '> ــــَـــ</span> , I{' '}
						<span className='arapski-lekcija '> ــــِــ</span> , U{' '}
						<span className='arapski-lekcija '> ــــُـــ </span>or{' '}
						<strong>nunation/tanwin</strong> IN{' '}
						<span className='arapski-lekcija '> ــــٍــ </span> , UN{' '}
						<span className='arapski-lekcija'> ـــٌـــ</span> , he will stop as if the word ends in <strong>sukoon</strong>{' '}
						<span className='arapski-lekcija '> ــــْـــ</span> , for example:
					</Col>
				</Row>
				<Row className='text-center reorder'>
					<Col>{PlayerRow(data, 'row1_en')}</Col>
				</Row>
				<Row>
					<Col className='opisLekcije my-3'>
						<strong>2.</strong> When the word ends in <strong>tanwin</strong> EN{' '}
						<span className='arapski-lekcija '> ــــًــ</span> , he will stop as if it ends in <strong>the long vowel</strong> A{' '}
						<span className='arapski-lekcija '> ـــَـــ ا </span> , for example:
					</Col>
				</Row>
				<Row className='text-center reorder'>
					<Col>{PlayerRow(data, 'row2_en')}</Col>
				</Row>
				<Row>
					<Col className='opisLekcije my-3'>
						<strong>3.</strong> When the word ends in{' '}
						<strong>the long vowel</strong> A{' '}
						<span className='arapski-lekcija'> ــــَـــ ا </span> ,{' '}
						<strong>the long vowel </strong> I{' '}
						<span className='arapski-lekcija'>ـــِــ ى</span> ili{' '}
						<strong>the long vowel </strong> U{' '}
						<span className='arapski-lekcija'>ـــُــ و</span> , he will stop without making any change, for example:
					</Col>
				</Row>
				<Row className='text-center '>
					<Col>
						{VjezbeRow(data, 'row3', 'broj1')}
						{VjezbeRow(data, 'row3', 'broj2')}
						{VjezbeRow(data, 'row3', 'broj3')}
						{VjezbeRow(data, 'row3', 'broj4')}
						{VjezbeRow(data, 'row3', 'broj5')}
					</Col>
				</Row>
				<Row>
					<Col className='opisLekcije my-3'>
						<strong>4.</strong> ⦁	When the word ends in round <strong>T</strong>{' '}
						<span className='arapski-lekcija'>(ة/ـة)</span> , he will stop as if the letter <strong>H </strong>
						<span className='arapski-lekcija'>(ه)</span> , were written regardless of which vowel or tanwin is written on it, for example:
					</Col>
				</Row>
				<Row className='text-center reorder'>
					<Col>{PlayerRow(data, 'row4_en')}</Col>
				</Row>
				<Row>
					<Col className='opisLekcije my-3' id='tabela'>
						<IconContext.Provider
							value={{ size: '30px', style: { float: 'right' } }}>
							<MdZoomOutMap className='zoomIcon' onClick={handleShowT} />
						</IconContext.Provider>
						<h3>TABULAR OVERVIEW:</h3>
						<Table
							className='tabela-opis text-center'
							bordered
							hover
							responsive>
							<thead className='text-danger text-uppercase'>
								<tr>
									<th>WHEN THE WORD ENDS IN</th>
									<th>WE SHOULD STOP</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										E <span className='arapski-lekcija '>ــــَـــ</span> , I{' '}
										<span className='arapski-lekcija '> ــــِــ</span> , U{' '}
										<span className='arapski-lekcija'> ــــُـــ</span> , IN{' '}
										<span className='arapski-lekcija'> ـــٍـــ </span> , UN{' '}
										<span className='arapski-lekcija'> ـــٌــ</span>
									</td>
									<td>
										as if it ends in {' '}
										<span className='arapski-lekcija '> ـــْــ</span>
									</td>
								</tr>
								<tr>
									<td>
										EN <span className='arapski-lekcija '> ـــًــ</span>
									</td>
									<td>
										as if it ends in long A
										<br />
										<span className='arapski-lekcija'> ــَــ ا</span>
									</td>
								</tr>
								<tr>
									<td>
										long A <span className='arapski-lekcija'>ـــَــ ا</span> ,
										long I <span className='arapski lekcija'>ـــِـ ى</span> ,
										long U <span className='arapski-lekcija'>ـــُــ و</span>
									</td>
									<td>without any change</td>
								</tr>
								<tr>
									<td>
										round T <span className='arapski-lekcija'> (ة/ـة)</span>
									</td>
									<td>
										as if it ends in H <span className='arapski-lekcija'> (ه)</span>
									</td>
								</tr>
							</tbody>
						</Table>
					</Col>
				</Row>
				<Modal
					show={showT}
					onHide={handleCloseT}
					backdrop='static'
					keyboard={false}>
					<Modal.Header closeButton>
						<Modal.Title>TABULAR OVERVIEW:</Modal.Title>
					</Modal.Header>
					<Modal.Body className='custom-modal'>
						<Table
							className='tabela-opis text-center'
							bordered
							hover
							responsive>
							<thead className='text-danger text-uppercase'>
								<tr>
									<th>WHEN THE WORD ENDS IN</th>
									<th>WE SHOULD STOP</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										E <span className='arapski-lekcija '>ــــَـــ</span> , I{' '}
										<span className='arapski-lekcija '> ــــِــ</span> , U{' '}
										<span className='arapski-lekcija'> ــــُـــ</span> , IN{' '}
										<span className='arapski-lekcija'> ـــٍـــ </span> , UN{' '}
										<span className='arapski-lekcija'> ـــٌــ</span>
									</td>
									<td>
										as if it ends in {' '}
										<span className='arapski-lekcija '> ـــْــ</span>
									</td>
								</tr>
								<tr>
									<td>
										EN <span className='arapski-lekcija '> ـــًــ</span>
									</td>
									<td>
										as if it ends in long A
										<br />
										<span className='arapski-lekcija'> ــَــ ا</span>
									</td>
								</tr>
								<tr>
									<td>
										long A <span className='arapski-lekcija'>ـــَــ ا</span> ,
										long I <span className='arapski lekcija'>ـــِـ ى</span> ,
										long U <span className='arapski-lekcija'>ـــُــ و</span>
									</td>
									<td>without any change</td>
								</tr>
								<tr>
									<td>
										round T <span className='arapski-lekcija'> (ة/ـة)</span>
									</td>
									<td>
										as if it ends in H <span className='arapski-lekcija'> (ه)</span>
									</td>
								</tr>
							</tbody>
						</Table>
					</Modal.Body>
					<Modal.Footer>
						<Button variant='secondary' onClick={handleCloseT}>
							Close
						</Button>
					</Modal.Footer>
				</Modal>
				<Row>
					<Col className='opisLekcije my-3' id='znakovi'>
						<IconContext.Provider
							value={{ size: '30px', style: { float: 'right' } }}>
							<MdZoomOutMap className='zoomIcon' onClick={handleShowZ} />
						</IconContext.Provider>
						<h3>
							<strong>STOPPING SINGS</strong>
						</h3>
						<br />
						<p>
							Some <strong>signs</strong> are placed above some words in the Qur'an and they mark whether the reader must or must not stop at that word, whether it is better to stop or to continue reading. Those signs are:
						</p>
						<br />
						<Table
							className='tabela-opis text-center'
							bordered
							hover
							responsive>
							<thead className='text-uppercase'>
								<tr>
									<th className='text-danger'>MUST STOP</th>
									<th>IT IS BETTER TO STOP</th>
									<th>IT IS BETTER TO CONTINUE</th>
									<th className='text-danger'>MUSTN'T STOP</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<span className='arapski-lekcija'>م</span>
									</td>
									<td>
										<span className='arapski-lekcija'> قف ؛ قلي ؛ ج ؛ ط</span>
									</td>
									<td>
										<span className='arapski-lekcija'> صلي ؛ ق ؛ ص ؛ ز</span>
									</td>
									<td>
										<span className='arapski-lekcija'> لا</span>
									</td>
								</tr>
							</tbody>
						</Table>

						<br />

						<Table
							className='tabela-opis text-center'
							bordered
							hover
							responsive>
							<thead className='text-uppercase'>
								<tr>
									<th>THE SAKT</th>
									<th>THREE DOTS</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<span className='arapski-lekcija'> سكتة ؛ س</span>
										<br />
										Pause without taking a new breath when reciting.
									</td>
									<td>
										<span className='arapski-lekcija'> رَيْبَۚۛ ف۪يهِۚۛ </span>
										<br />
										If the reciter stops at the first sign, then he must continue without stopping at the second sign.
									</td>
								</tr>
							</tbody>
						</Table>

						<br />

						<p>
							<strong>NOTE</strong>: The sign{' '}
							<span className='arapski-lekcija'> قصر</span> below the word indicates that the vowel under which it is written is <u>short</u> , and{' '}
							<span className='arapski-lekcija'> مد </span>is a sign that the vowel is recited as a <u>long</u> vowel.
						</p>
					</Col>
				</Row>
				<Modal
					show={showZ}
					onHide={handleCloseZ}
					backdrop='static'
					keyboard={false}>
					<Modal.Header closeButton>
						<Modal.Title>STOPPING SINGS:</Modal.Title>
					</Modal.Header>
					<Modal.Body className='custom-modal'>
						<p>
							Some <strong>signs</strong> are placed above some words in the Qur'an and they mark whether
							the reader must or must not stop at that word, whether it is better to stop or to
							continue reading. Those signs are:

						</p>
						<br />
						<Table
							className='tabela-opis text-center'
							bordered
							hover
							responsive>
							<thead className='text-uppercase'>
								<tr>
									<th className='text-danger'>MUST STOP</th>
									<th>IT IS BETTER TO STOP</th>
									<th>IT IS BETTER TO CONTINUE</th>
									<th className='text-danger'>MUSTN'T STOP</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<span className='arapski-lekcija'>م</span>
									</td>
									<td>
										<span className='arapski-lekcija'> قف ؛ قلي ؛ ج ؛ ط</span>
									</td>
									<td>
										<span className='arapski-lekcija'> صلي ؛ ق ؛ ص ؛ ز</span>
									</td>
									<td>
										<span className='arapski-lekcija'> لا</span>
									</td>
								</tr>
							</tbody>
						</Table>

						<br />

						<Table
							className='tabela-opis text-center'
							bordered
							hover
							responsive>
							<thead className='text-uppercase'>
								<tr>
									<th>THE SAKT</th>
									<th>THREE DOTS</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<span className='arapski-lekcija'> سكتة ؛ س</span>
										<br />
										Pause without taking a new breath when reciting.
									</td>
									<td>
										<span className='arapski-lekcija'> رَيْبَۚۛ ف۪يهِۚۛ </span>
										<br />
										If the reciter stops at the first sign, then he must continue without stopping at the second sign. 
									</td>
								</tr>
							</tbody>
						</Table>

						<br />

						<p>
							<strong>NOTE</strong>: The sign{' '}
							<span className='arapski-lekcija'> قصر</span> below the word indicates that the vowel under which it is written is <u>short</u> , and{' '}
							<span className='arapski-lekcija'> مد </span>is a sign that the vowel is recited as a <u>long</u> vowel.
						</p>
					</Modal.Body>
					<Modal.Footer>
						<Button variant='secondary' onClick={handleCloseZ}>
							Close
						</Button>
					</Modal.Footer>
				</Modal>
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
						<Modal.Title>PRACTICE</Modal.Title>
					</Modal.Header>
					<Modal.Body className='custom-modal'>
						<Row>
					<Col className='opisLekcije'>
						During the recitation of the Qur&#39;an, the reader can stop in the following
						situations: at the end of the verse, if there is a stopping sign and when he is out
						of breath. It can be done the following way:
					</Col>
				</Row>
				<Row>
					<Col className='opisLekcije my-3'>
						<strong>1.</strong> When the word (at which he stops) ends {' '}
						<strong>in the short vowel</strong> E{' '}
						<span className='arapski-lekcija '> ــــَـــ</span> , I{' '}
						<span className='arapski-lekcija '> ــــِــ</span> , U{' '}
						<span className='arapski-lekcija '> ــــُـــ </span>or{' '}
						<strong>nunation/tanwin</strong> IN{' '}
						<span className='arapski-lekcija '> ــــٍــ </span> , UN{' '}
						<span className='arapski-lekcija'> ـــٌـــ</span> , he will stop as if the word ends in <strong>sukoon</strong>{' '}
						<span className='arapski-lekcija '> ــــْـــ</span> , for example:
					</Col>
				</Row>
				<Row className='text-center reorder'>
					<Col>{PlayerRow(data, 'row1_en')}</Col>
				</Row>
				<Row>
					<Col className='opisLekcije my-3'>
						<strong>2.</strong> When the word ends in <strong>tanwin</strong> EN{' '}
						<span className='arapski-lekcija '> ــــًــ</span> , he will stop as if it ends in <strong>the long vowel</strong> A{' '}
						<span className='arapski-lekcija '> ـــَـــ ا </span> , for example:
					</Col>
				</Row>
				<Row className='text-center reorder'>
					<Col>{PlayerRow(data, 'row2_en')}</Col>
				</Row>
				<Row>
					<Col className='opisLekcije my-3'>
						<strong>3.</strong> When the word ends in{' '}
						<strong>the long vowel</strong> A{' '}
						<span className='arapski-lekcija'> ــــَـــ ا </span> ,{' '}
						<strong>the long vowel </strong> I{' '}
						<span className='arapski-lekcija'>ـــِــ ى</span> ili{' '}
						<strong>the long vowel </strong> U{' '}
						<span className='arapski-lekcija'>ـــُــ و</span> , he will stop without making any change, for example:
					</Col>
				</Row>
				<Row className='text-center '>
					<Col>
						{VjezbeRow(data, 'row3', 'broj1')}
						{VjezbeRow(data, 'row3', 'broj2')}
						{VjezbeRow(data, 'row3', 'broj3')}
						{VjezbeRow(data, 'row3', 'broj4')}
						{VjezbeRow(data, 'row3', 'broj5')}
					</Col>
				</Row>
				<Row>
					<Col className='opisLekcije my-3'>
						<strong>4.</strong> ⦁	When the word ends in round <strong>T</strong>{' '}
						<span className='arapski-lekcija'>(ة/ـة)</span> , he will stop as if the letter <strong>H </strong>
						<span className='arapski-lekcija'>(ه)</span> , were written regardless of which vowel or tanwin is written on it, for example:
					</Col>
				</Row>
						<Row className='text-center reorder'>
							<Col>{PlayerRow(data, 'row4_en')}</Col>
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
				<IconContext.Provider
					value={{ size: '30px', style: { float: 'right' } }}>
					<MdZoomOutMap className='zoomIcon' onClick={handleShow} />
				</IconContext.Provider>
				<Row>
					<Col>
						<br />
					</Col>
				</Row>
				<Row id='vjezba' className='text-center'>
					<Col className='mobile-row rtl'>
						<span style={{ marginLeft: '25px' }}>
							{' '}
							{VjezbeRow(data, 'vjezba', 'red18')}
						</span>
						<span>{VjezbeRow(data, 'vjezba', 'red19')}</span>
					</Col>
				</Row>
				<Row className='text-center'>
					<Col className='mobile-row'>
						<span>
							<span className='tacka'>
								{VjezbeRow(data, 'vjezba', 'red20')} ۞
							</span>
						</span>
						<span>
							<span className='tacka'>
								{VjezbeRow(data, 'vjezba', 'red21')} ۞
							</span>
						</span>
					</Col>
				</Row>
				<Row className='text-center'>
					<Col className='mobile-row'>
						<span className='mobile-row'>
							<span className='tacka'>
								{VjezbeRow(data, 'vjezba', 'red22')} ۞
							</span>
						</span>
						<span className='mobile-row'>
							{VjezbeRow(data, 'vjezba', 'red23')}
						</span>
						<span>
							<span className='tacka'>
								{VjezbeRow(data, 'vjezba', 'red24')} ۞
							</span>
						</span>
					</Col>
				</Row>
				<Row className='text-center'>
					<Col className='mobile-row'>
						<span>
							<span className='tacka'>
								{VjezbeRow(data, 'vjezba', 'red25')} ۞
							</span>
						</span>
						<span>
							<span className='tacka'>
								{VjezbeRow(data, 'vjezba', 'red26')} ۞
							</span>
						</span>
					</Col>
				</Row>
				<Row className='text-center'>
					<Col className='mobile-row'>
						<span>
							<span className='tacka'>
								{VjezbeRow(data, 'vjezba', 'red28')} ۞
							</span>
						</span>
						<span>
							<span className='tacka'>
								{VjezbeRow(data, 'vjezba', 'red29')} ۞
							</span>
						</span>
						<span className='tacka'>
							{VjezbeRow(data, 'vjezba', 'red30')} ۞
						</span>
						<span className='tacka'>
							{VjezbeRow(data, 'vjezba', 'red31')} ۞
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
									src='https://www.youtube.com/embed/tAMzotl-tj0?list=PLcdhKKk9LmetUjroRtBCCkugO_whS-cW2'
									title='YouTube video player'
									frameborder='0'
									allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
									allowFullScreen='true'
									webkitallowfullscreen='true'
									mozallowfullscreen='true'></iframe>
								<iframe
									src='https://www.youtube.com/embed/j8RAYs_4Afo?list=PLcdhKKk9LmetUjroRtBCCkugO_whS-cW2'
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
						<Row>
							<Col>
								<br />
							</Col>
						</Row>
						<Row id='vjezba' className='text-center'>
							<Col className='mobile-row rtl'>
								<span style={{ marginLeft: '50px' }}>
									{' '}
									{VjezbeRow(data, 'vjezba', 'red18')}
								</span>
								<span>{VjezbeRow(data, 'vjezba', 'red19')}</span>
							</Col>
						</Row>
						<Row className='text-center'>
							<Col className='mobile-row'>
								<span>
									<span className='tacka'>
										{VjezbeRow(data, 'vjezba', 'red20')} ۞
									</span>
								</span>
								<span>
									<span className='tacka'>
										{VjezbeRow(data, 'vjezba', 'red21')} ۞
									</span>
								</span>
							</Col>
						</Row>
						<Row className='text-center'>
							<Col className='mobile-row'>
								<span className='mobile-row'>
									<span className='tacka'>
										{VjezbeRow(data, 'vjezba', 'red22')} ۞
									</span>
								</span>
								<span className='mobile-row'>
									{VjezbeRow(data, 'vjezba', 'red23')}
								</span>
								<span>
									<span className='tacka'>
										{VjezbeRow(data, 'vjezba', 'red24')} ۞
									</span>
								</span>
							</Col>
						</Row>
						<Row className='text-center'>
							<Col className='mobile-row'>
								<span>
									<span className='tacka'>
										{VjezbeRow(data, 'vjezba', 'red25')} ۞
									</span>
								</span>
								<span>
									<span className='tacka'>
										{VjezbeRow(data, 'vjezba', 'red26')} ۞
									</span>
								</span>
							</Col>
						</Row>
						<Row className='text-center'>
							<Col className='mobile-row'>
								<span>
									<span className='tacka'>
										{VjezbeRow(data, 'vjezba', 'red28')} ۞
									</span>
								</span>
								<span>
									<span className='tacka'>
										{VjezbeRow(data, 'vjezba', 'red29')} ۞
									</span>
								</span>
								<span className='tacka'>
									{VjezbeRow(data, 'vjezba', 'red30')} ۞
								</span>
								<span className='tacka'>
									{VjezbeRow(data, 'vjezba', 'red31')} ۞
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

				<Footer prev='/lekcija22' next='/lekcija2/{{lng}}' />
			</Container>
    </>
  )
}

export default Lesson1_bs