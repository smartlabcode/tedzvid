import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import { BrowserRouter, Route } from 'react-router-dom';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import {  BsArrowRight } from 'react-icons/bs';
import {getStyleObjectFromString} from '../Helpers/Streplace';


function Obavijest(props) {
	const [ isHidden, setIsHidden ] = useState(true);


	const toggleIsHiddenHandler = () => {
		setIsHidden(!isHidden);
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

							<a href="/#o-nama">
								<li>O NAMA</li>
							</a>

							<a href="/#printano">
								<li>PRINTANO IZDANJE</li>
							</a>
							<a href="/#kontakt">
								<li>KONTAKT</li>
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
								<a href="/#o-nama" onClick={toggleIsHiddenHandler}>
									<li>O NAMA</li>
								</a>
								<a href="/#printano" onClick={toggleIsHiddenHandler}>
									<li>PRINTANO IZDANJE</li>
								</a>

								<a href="/#kontakt" onClick={toggleIsHiddenHandler}>
									<li>KONTAKT</li>
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
						style={{marginTop:"-250px"}}
					/>
						<center>
						<div className="description" id="o-nama">
							<br />
							<h2 className="white">UPOZORENJE</h2>
							
<p style={getStyleObjectFromString("margin-bottom: 0.11in; line-height: 108%")}><font face="Palatino Linotype, serif">Poštovani
posjetioce
stranice <b>tedzvid.ba</b>,
prepoznali smo da vaš pretraživač
možda neće najbolje
učitati lekcije ili harfove. </font>
</p>
<p style={getStyleObjectFromString("margin-bottom: 0.11in; line-height: 108%")}><font face="Palatino Linotype, serif">Pozivamo
vas da  ažurirate postojeći ili koristite drugi pretraživač
kako bi ispravno učitali tedzvid.ba.</font></p>
<p style={getStyleObjectFromString("margin-bottom: 0.11in; line-height: 108%")}><font face="Palatino Linotype, serif"><b>Testirane
verzije za Windows 10, 8.1, 8, 7, Mac OS:</b></font></p>
<p style={getStyleObjectFromString("text-indent: 0.39in; margin-bottom: 0.11in; line-height: 108%")}>
<font face="Palatino Linotype, serif">Chrome : 76+ verzije</font></p>
<p style={getStyleObjectFromString("text-indent: 0.39in; margin-bottom: 0.11in; line-height: 108%")}>
<font face="Palatino Linotype, serif">Firefox : 44+ verzije</font></p>
<p style={getStyleObjectFromString("text-indent: 0.39in; margin-bottom: 0.11in; line-height: 108%")}>
<font face="Palatino Linotype, serif">Opera: 63+ verzije</font></p>
<p style={getStyleObjectFromString("text-indent: 0.39in; margin-bottom: 0.11in; line-height: 108%")}>
<font face="Palatino Linotype, serif">Edge: sve verzije</font></p>
<p style={getStyleObjectFromString("margin-bottom: 0.11in; line-height: 108%")}><font face="Palatino Linotype, serif"><b>Windows
XP :</b> firefox 44+</font></p>
<p style={getStyleObjectFromString("margin-bottom: 0.11in; line-height: 108%")}><font face="Palatino Linotype, serif"><b>Internet
Explorer:</b> </font><font color="#ff0000"><font face="Palatino Linotype, serif">nijedna
verijza</font></font></p>
<p style={getStyleObjectFromString("margin-bottom: 0.11in; line-height: 108%")}><font face="Palatino Linotype, serif"><b>Safari:
</b> </font><font color="#ff0000"><font face="Palatino Linotype, serif">nijedna
verzija</font></font></p>
<p style={getStyleObjectFromString("margin-bottom: 0.11in; line-height: 108%")}><font face="Palatino Linotype, serif"><b>Andorid
operativni sistem</b>: </font>
</p>
<p style={getStyleObjectFromString("text-indent: 0.39in; margin-bottom: 0.11in; line-height: 108%")}>
<font face="Palatino Linotype, serif">Crhome : 76+ verzije </font>
</p>
<p style={getStyleObjectFromString("text-indent: 0.39in; margin-bottom: 0.11in; line-height: 108%")}>
<font face="Palatino Linotype, serif">Firefox : 44+ verzije</font></p>
<p align="right" style={getStyleObjectFromString("margin-bottom: 0.11in; line-height: 108%")}><font face="Palatino Linotype, serif">Hvala
na razumijevanju.</font></p>
						</div>
					</center>
					
					<div className="sectionThree" id="kontakt">
						
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
export default Obavijest;
