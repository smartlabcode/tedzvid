import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import { BrowserRouter, Route } from 'react-router-dom';
import { IconContext } from 'react-icons';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { FiPhoneCall } from 'react-icons/fi';
import { BsFillPersonFill, BsArrowRight } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';

function LandingPage(props) {
	const [ isHidden, toggleIsHidden ] = useState(true);

	const toggleIsHiddenHandler = () => {
		toggleIsHidden(!isHidden);
	};
	return (
		<React.Fragment>
			<div className="wrapper">
				<div className="topNav">
					<div className="logoNavBox">
						<Link to="/">
							<img
								className="logoUrl"
								src={process.env.PUBLIC_URL + '/assets/svg/logoUrl.png'}
								alt="logo"
							/>
						</Link>
					</div>
					<div className="nav">
						<ul>
							<Link to={'/lekcije'}>
								<li className="selectedBtn">LEKCIJE</li>
							</Link>
							<a href="#contact">
								<li>KONTAKT</li>
							</a>
							<a href="#impresum">
								<li>O NAMA</li>
							</a>
							<a href="/">
								<li className="sideHr"> NASLOVNA</li>
							</a>
						</ul>
					</div>
				</div>

				<div className="topMobileNav">
					<img
						className="hamburger"
						src={process.env.PUBLIC_URL + '/assets/svg/hamburger.svg'}
						alt="hamburger menu icon"
						onClick={toggleIsHiddenHandler}
					/>

					<Link to={'/'}>
						<img
							className="mobileLogo"
							src={process.env.PUBLIC_URL + '/assets/svg/mobileLogo.png'}
							alt="mobile logo"
						/>
					</Link>
					<div>
						<Link to={'/lekcije'}>
							<BsArrowRight size={32} className="mobNavArrow" />
						</Link>
					</div>

					<div className={isHidden ? 'hide' : 'fullMenu'}>
						<h3 className="closeBTN" onClick={toggleIsHiddenHandler}>
							<AiOutlineCloseCircle />
						</h3>
						<center>
							<ul>
								<Link to={'/lekcije'}>
									<li className="selectedBtn">LEKCIJE</li>
								</Link>
								<a href="#contact" onClick={toggleIsHiddenHandler}>
									<li>KONTAKT</li>
								</a>
								<a href="#impresum" onClick={toggleIsHiddenHandler}>
									<li>O NAMA</li>
								</a>
							</ul>
						</center>
					</div>
				</div>

				<div className="innerWrapper">
					<img
						className="quranbg"
						src={process.env.PUBLIC_URL + '/assets/svg/quranbg.svg'}
						alt="quran background"
					/>
					<div className="sectionOne">
						<div className="left">
							<h2>
								<b>Tedžvid.ba</b>
							</h2>
							<p>Priručnik za učenje tedžvidskih pravila</p>

							<Link to={'/lekcije'}>
								<button type="submit" className="contactBTN btn-lekcije">
									LEKCIJE
								</button>
							</Link>
						</div>
						<div className="right">
							<img
								className="quran"
								src={process.env.PUBLIC_URL + '/assets/svg/quran03.png'}
								alt="Quran"
							/>
						</div>
					</div>
					<center>
						<div className="description" id="impresum">
							<h2 className="white">
								<b>O NAMA</b>
							</h2>
							<br />
							<p>
								Tedzvid.ba je elektronska, interaktivna verzija printanog tedžvida autora mr. Sejid ef.
								Strike. Ovaj tedžvid ima za cilj da pomogne novim učačima Kur'ana, kako polaznicima
								mektepske nastave tako i odraslima, u lakšem savladavanju osnovnih tedžvidskih pravila.
								Jednostavan rječnik i izbjegavanje stručnih termina, koliko je to bilo moguće, čine ga
								pristupačnijim široj čitalačkoj populaciji.
								<br />
								<br /> Posebnost stranice tedzvid.ba su interaktivni primjeri čiji audio zapis možete
								preslušati klikom na isti, a video zapis nakon vježbe će vam pomoći da lakše razumijete
								tedžvidsko pravilo koje želite savladati. Nadamo se da će tedžvid.ba pomoći mu'allimima
								pri objašnjavanju tedžvidskih pravila, kako djeci u mektebu tako i odraslima nakon
								završetka sufare.
							</p>
						</div>
					</center>
					<div className="sectionTwo">
						<div className="book">
							<img className="bookImg" src={process.env.PUBLIC_URL + '/assets/svg/book.png'} alt="Book" />
						</div>
						<IconContext.Provider value={{ color: 'white', className: 'global-className-name' }}>
							<div className="bookInfo">
								<b>
									<h2>Želim printano izdanje</h2>
								</b>
								<br />
								<h6>Informacije vazano za printano izdanje tedžvida možete dobiti kod autora:</h6>
								<br />
								<div className="iconWrapper">
									<div className="iconInfo">
										<div className="iconbg">
											<BsFillPersonFill size={32} />
										</div>

										<p>mr. Sejid ef. Strika</p>
									</div>
									<div className="iconInfo">
										<div className="iconbg">
											<MdEmail size={32} />
										</div>

										<p>sejidstrika@gmail.com</p>
									</div>
									<div className="iconInfo">
										<div className="iconbg">
											<FiPhoneCall size={32} />
										</div>

										<p>+38761 617 606</p>
									</div>
								</div>
							</div>
						</IconContext.Provider>
					</div>

					<div className="sectionThree" id="contact">
						<center>
							<h2>
								<b>Kontakt</b>
							</h2>
							<br />
							<p>
								Ukoliko imate neke sugestije, zapažanja, impresije budite slobodni da ih napišete kako
								bismo unaprijedili ovaj sajt.
							</p>
							<form className="form" action="" method="post">
								<input type="text" placeholder="Ime i prezime" />
								<input type="email" placeholder="Email" name="" id="" />
								<input type="tel" placeholder="Broj telefona" name="" id="" />
								<input
									className="textInput"
									placeholder="Unesi sadržaj poruke"
									type="text"
									name=""
									id=""
								/>
								<button type="submit" className="contactBTN">
									POŠALJI
								</button>
							</form>
						</center>
					</div>
				</div>
				<footer className="footerLanding">
					<h2>Prijatelji projekta:</h2>
					<ul>
						<li>
							<a href="https://imtec.ba/" target="_blank" rel="noopener noreferrer">
								<img src={process.env.PUBLIC_URL + '/assets/svg/imtec_logo.png'} alt="" />
							</a>
						</li>
						<li>
							<a href="https://smartlab.ba/" target="_blank" rel="noopener noreferrer">
								<img src={process.env.PUBLIC_URL + '/assets/svg/smartlab_logo.svg'} alt="" />
							</a>
						</li>
					</ul>
				</footer>
			</div>
		</React.Fragment>
	);
}
// function closeMobileNav() {
//     document.getElementsByClassName("fullMenu")[0].style.display = "none";
// }
export default LandingPage;
