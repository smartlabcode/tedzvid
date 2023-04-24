import React from 'react';
import { Row, Col, Card, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import data from '../Data/lessons.json';
import { IoIosArrowForward } from 'react-icons/io';
import { IconContext } from 'react-icons';
import { useTranslation } from "react-i18next";




function HomeFirst(props) {
	const { t } = useTranslation();
	const { i18n } = useTranslation();
	// let lekcije = data['lekcije'].slice(props.start,props.stop)
	let propertyName;
	if (i18n.language === 'en') {
		propertyName = 'lekcije_en';
	} else if (i18n.language === 'bs') {
		propertyName = 'lekcije';
	} else {
	// handle unsupported language
	}

const lekcije = data[propertyName].reduce((acc, curr) => acc.concat(curr), []);
	return (
		<React.Fragment>
			{lekcije.map((lekcija, index) => {
				let number = props.start + index + 1;

				function dugmeTabela() {
					if (index === 0) {
						return (
							<Link
								to={'/lekcija' + number + '#tabela'}
								style={{ color: 'inherit' }}>
								<button className='pristupiBtn'>
								{t('table')} <IoIosArrowForward />
				</button>
							</Link>
						);
					}
				}
				function dugmeZnakovi() {
					if (index === 0) {
						return (
							<Link
								to={'/lekcija' + number + '#znakovi'}
								style={{ color: 'inherit' }}>
								<button className='pristupiBtn'>
									{t('signs')} <IoIosArrowForward />
								</button>
							</Link>
						);
					}
				}
				return (
					<Row className='' key={index}>
						<Col>
							<Card>
								<Card.Body>
									<Badge style={{ paddingLeft: '0' }} className='imelekcije'>
										{number}
									</Badge>
									<div className='alignMobile'>
										<div className='tabletText'>
											<Card.Title>{lekcija.title} </Card.Title>
											<Card.Subtitle className='mb-2 text-muted'>
												{lekcija.subtitle}
											</Card.Subtitle>
											<div className='sectonRight'>
												<IconContext.Provider value={{ color: '#92623C' }}>
													<Link
														to={'/lekcija' + number + '#video'}
														style={{ color: 'inherit' }}>
														<button className='videoBtn'>
															{t('video')}{' '}
															<IoIosArrowForward style={{ color: 'white' }} />
														</button>
													</Link>
													{dugmeTabela()}
													{dugmeZnakovi()}
													<Link
														to={'/lekcija' + number + '#vjezba'}
														style={{ color: 'inherit' }}>
														<button className='pristupiBtn'>
															{t('practice')} <IoIosArrowForward />
														</button>
													</Link>

													<Link
														to={'/lekcija' + number + '#lekcija'}
														style={{ color: 'inherit' }}>
														<button className='pristupiBtn'>
															{t('lecturev1')} <IoIosArrowForward />
														</button>
													</Link>
												</IconContext.Provider>
											</div>
										</div>
									</div>
								</Card.Body>
							</Card>
						</Col>

						{/* <Col>
                    <Link to={"/lekcija"+(number+1)} style={{ color: 'inherit' }}><Card>
                        <Card.Body>
                            <Card.Title>{lekcija[1].title} <Badge className="imelekcije" variant="light">Lekcija {number+1}</Badge> </Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">{lekcija[1].subtitle}</Card.Subtitle>
                        </Card.Body>
                    </Card></Link>
                </Col> */}
					</Row>
				);
			})}
		</React.Fragment>
	);
}

export default HomeFirst;
