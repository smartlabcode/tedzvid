import React from 'react';
import data from '../Data/L1Data.json';
import PlayerRow from '../Helpers/PlayerHelper';
import VjezbeRow from '../Helpers/VjezbeHelper';
import Footer from '../Body/MainFooter';
import { Link } from 'react-router-dom';
import LekcijaMenu from '../Body/LekcijaMenu';

// Bootstrap
import { Row, Col, Table, Container } from 'react-bootstrap';

// Other
import '../App.scss';

function L1() {
	return (
		<React.Fragment>
			<LekcijaMenu broj="1" naziv="VAKF" />
			<Container>
				<Row>
					<Col>
						<div className="mobileTop">
							<center>
								<img src={process.env.PUBLIC_URL + '/assets/svg/Group 61.svg'} />
							</center>

							<h2 className="text-center font-weight-bold text-uppercase">Vakf</h2>
						</div>

						<h4 className="text-center">
							<strong>Stajanje prilikom učenja</strong>
						</h4>
						<hr />
					</Col>
				</Row>
				<Row>
					<Col className="opisLekcije">
						Prilikom učenja Kur'ana, učač može stati u sljedećim situacijama: ako je kraj ajeta, ako postoji
						znak za stajanje i kada mu ponestane daha. To čini na sljedeći način:
					</Col>
				</Row>
				<Row>
					<Col className="opisLekcije my-3">
						<strong>1.</strong> Kada riječ na kojoj staje završava <strong>kratkim vokalom</strong> E{' '}
						<span className="arapski-lekcija "> ــــَـــ</span> , I{' '}
						<span className="arapski-lekcija "> ــــِــ</span>, U{' '}
						<span className="arapski-lekcija "> ــــُـــ </span>ili <strong>tenvinom</strong> IN{' '}
						<span className="arapski-lekcija "> ــــٍــ </span>, UN{' '}
						<span className="arapski-lekcija"> ـــٌـــ</span>, stat će kao da je na riječi{' '}
						<strong>sukun</strong> <span className="arapski-lekcija "> ــــْـــ</span>, npr.:
					</Col>
				</Row>
				<Row className="text-center">
					<Col>{PlayerRow(data, 'row1')}</Col>
				</Row>
				<Row>
					<Col className="opisLekcije my-3">
						<strong>2.</strong> Kada riječ završava <strong>tenvinom</strong> EN{' '}
						<span className="arapski-lekcija "> ــــًــ</span>, stat će kao da je <strong>dugo</strong> A{' '}
						<span className="arapski-lekcija "> ـــَـــ ا </span>, npr.:
					</Col>
				</Row>
				<Row className="text-center">
					<Col>{PlayerRow(data, 'row2')}</Col>
				</Row>
				<Row>
					<Col className="opisLekcije my-3">
						<strong>3.</strong> Kada riječ završava <strong>dugim vokalom</strong> A{' '}
						<span className="arapski-lekcija"> ــــَـــ ا </span>, <strong>dugim vokalom</strong> I{' '}
						<span className="arapski-lekcija">ـــِــ ى</span> ili <strong>dugim vokalom</strong> U{' '}
						<span className="arapski-lekcija">ـــُــ و</span>, stat će <u>bez ikakve promjene</u>, npr.:
					</Col>
				</Row>
				<Row className="text-center">
					<Col>
						{VjezbeRow(data, 'row3', 'broj1')}
						{VjezbeRow(data, 'row3', 'broj2')}
						{VjezbeRow(data, 'row3', 'broj3')}
						{VjezbeRow(data, 'row3', 'broj4')}
						{VjezbeRow(data, 'row3', 'broj5')}
					</Col>
				</Row>
				<Row>
					<Col className="opisLekcije my-3">
						<strong>4.</strong> Kada riječ završava okruglim <strong>T</strong>{' '}
						<span className="arapski-lekcija">(ة/ـة)</span>, stat će kao da je napisano slovo{' '}
						<strong>H </strong>
						<span className="arapski-lekcija">(ه)</span>, bez obzira koji je vokal ili tenvin napisan na
						njemu, npr.:
					</Col>
				</Row>
				<Row className="text-center">
					<Col>{PlayerRow(data, 'row4')}</Col>
				</Row>
				<Row>
					<Col className="opisLekcije my-3">
						<h3>Pregled u tabeli:</h3>
						<Table className="tabela-opis text-center" bordered hover responsive>
							<thead className="text-danger text-uppercase">
								<tr>
									<th>Kada riječ završava na</th>
									<th>Stajemo</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										E <span class="arapski-lekcija ">ــــَـــ</span> , I{' '}
										<span className="arapski-lekcija "> ــــِــ</span> , U{' '}
										<span className="arapski-lekcija"> ــــُـــ</span> , IN{' '}
										<span className="arapski-lekcija"> ـــٍـــ </span>, UN{' '}
										<span className="arapski-lekcija"> ـــٌــ</span>
									</td>
									<td>
										kao da je sukun <span className="arapski-lekcija "> ـــْــ</span>
									</td>
								</tr>
								<tr>
									<td>
										EN <span className="arapski-lekcija "> ـــًــ</span>
									</td>
									<td>
										kao da je dugo A <span className="arapski-lekcija"> ــَــ ا</span>
									</td>
								</tr>
								<tr>
									<td>
										dugo A <span className="arapski-lekcija">ـــَــ ا</span> , dugo I{' '}
										<span className="arapski lekcija">ـــِـ ى</span> , dugo U{' '}
										<span className="arapski-lekcija">ـــُــ و</span>
									</td>
									<td>bez ikakve promjene</td>
								</tr>
								<tr>
									<td>
										okruglo T <span className="arapski-lekcija"> (ة/ـة)</span>
									</td>
									<td>
										kao da je H <span className="arapski-lekcija"> (ه)</span>
									</td>
								</tr>
							</tbody>
						</Table>
					</Col>
				</Row>
				<Row>
					<Col className="opisLekcije my-3">
						<h3>
							<strong>Znakovi za stajanje:</strong>
						</h3>
						<br />
						<p>
							Iznad nekih riječi u Kur'anu nalaze se <strong>znakovi</strong> koji označavaju da li se na
							toj riječi mora stati ili se ne smije, da li je bolje stati ili je bolje preći. Ti znakovi
							su:
						</p>
						<br />
						<Table className="tabela-opis text-center" bordered hover responsive>
							<thead className="text-uppercase">
								<tr>
									<th className="text-danger">Mora stati</th>
									<th>Bolje stati</th>
									<th>Boje preći</th>
									<th className="text-danger">Ne smije se stati</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<span className="arapski-lekcija">م</span>
									</td>
									<td>
										<span className="arapski-lekcija"> قف ؛ قلي ؛ ج ؛ ط</span>
									</td>
									<td>
										<span className="arapski-lekcija"> صلي ؛ ق ؛ ص ؛ ز</span>
									</td>
									<td>
										<span className="arapski-lekcija"> لا</span>
									</td>
								</tr>
							</tbody>
						</Table>

						<br />

						<Table className="tabela-opis text-center" bordered hover responsive>
							<thead className="text-uppercase">
								<tr>
									<th>Sekta</th>
									<th>Tri tačkice</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<span className="arapski-lekcija"> سكتة ؛ س</span>
										<br />Pauzira se bez prekidanja daha.
									</td>
									<td>
										<span className="arapski-lekcija"> رَيْبَۚۛ ف۪يهِۚۛ </span>
										<br />Ukoliko se pauzira na prvom znaku, onda je na drugom obavezno preći i
										obrnuto.
									</td>
								</tr>
							</tbody>
						</Table>

						<br />

						<p>
							<strong>NAPOMENA</strong>: Znak <span className="arapski-lekcija"> قصر</span> ispod riječi
							je znak da se vokal ispod kojeg se nalazi uči <u>kratko</u>, a{' '}
							<span className="arapski-lekcija"> مد </span>je znak da se vokal uči <u>dugo</u>.
						</p>
					</Col>
				</Row>
				<Row>
					<Col>
						<br />
					</Col>
				</Row>
				<h2 className="text-center">
					<strong>VJEŽBA</strong>
				</h2>
				<hr />
				<Row>
					<Col>
						<br />
					</Col>
				</Row>
				<Row className="text-center">
					<Col>
						<span class="mobile-row">{VjezbeRow(data, 'vjezba', 'red19')}</span>
						<span class="mobile-row">{VjezbeRow(data, 'vjezba', 'red18')}</span>
					</Col>
				</Row>
				<Row className="text-center">
					<Col>
						<span class="mobile-row">
							<span className="tacka">۞</span>
							{VjezbeRow(data, 'vjezba', 'red21')}
						</span>
						<span class="mobile-row">
							<span className="tacka">۞</span>
							{VjezbeRow(data, 'vjezba', 'red20')}
						</span>
					</Col>
				</Row>
				<Row className="text-center">
					<Col>
						<span className="mobile-row">
							<span className="tacka">۞</span>
							{VjezbeRow(data, 'vjezba', 'red24')}
							{VjezbeRow(data, 'vjezba', 'red23')}
						</span>
						<span className="mobile-row">
							<span className="tacka">۞</span>
							{VjezbeRow(data, 'vjezba', 'red22')}
						</span>
					</Col>
				</Row>
				<Row className="text-center">
					<Col>
						<span className="tacka">۞</span>
						{VjezbeRow(data, 'vjezba', 'red26')}
						<span className="mobile-row">
							<span className="tacka">۞</span>
							{VjezbeRow(data, 'vjezba', 'red25')}
						</span>
					</Col>
				</Row>
				<Row className="text-center">
					<Col>
						<span className="tacka">۞</span>
						{VjezbeRow(data, 'vjezba', 'red31')}
						<span className="tacka">۞</span>
						{VjezbeRow(data, 'vjezba', 'red30')}

						<span className="mobile-row">
							<span className="tacka">۞</span>
							{VjezbeRow(data, 'vjezba', 'red29')}
						</span>
						<span className="mobile-row">
							<span className="tacka">۞</span>
							{VjezbeRow(data, 'vjezba', 'red28')}
						</span>
					</Col>
				</Row>

				<Footer prev="/lekcija22" next="/lekcija2" />
			</Container>
		</React.Fragment>
	);
}

export default L1;
