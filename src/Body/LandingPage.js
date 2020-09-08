import React from 'react';
import { Link } from 'react-router-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { IconContext } from 'react-icons';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { FiPhoneCall } from 'react-icons/fi';
import { BsFillPersonFill } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';


function LandingPage(props) {
	return (
		<React.Fragment>
			<div className="wrapper">
				<div className="topNav">
					<div className="logoNavBox">
						<img className="logoUrl" src={process.env.PUBLIC_URL + '/assets/svg/logoUrl.png'} />
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
							<a href="#">
								<li className="sideHr"> NASLOVNA</li>
							</a>
						</ul>
					</div>
				</div>

				<div className="topMobileNav">
					<img className="hamburger" src={process.env.PUBLIC_URL + '/assets/svg/hamburger.svg'} />
					<Link to={'/'}>
						<img className="mobileLogo" src={process.env.PUBLIC_URL + '/assets/svg/mobileLogo.png'} />
					</Link>
					<div>
						<Link to={'/lekcije'}>
							<svg
								className="mobNavArrow"
								xmlns="http://www.w3.org/2000/svg"
								width="16"
								height="16"
								viewBox="0 0 16 16"
							>
								<path
									id="ic_arrow_back_24px"
									d="M4,11H16.17L10.58,5.41,12,4l8,8-8,8-1.41-1.41L16.17,13H4Z"
									transform="translate(-4 -4)"
									fill="#fce3aa"
								/>
							</svg>
						</Link>
					</div>

					<div className="fullMenu" style={{ display: 'none' }}>
						<h3 className="closeBTN">
							<AiOutlineCloseCircle />
						</h3>
						<center>
							<ul>
								<li className="selectedBtn">NASLOVNA</li>
								<a href="#impresum">
									<li>IMPRESUM</li>
								</a>
								<li>KONTAKT</li>
								<li>LEKCIJE</li>
							</ul>
						</center>
					</div>
				</div>

				<div className="innerWrapper">
					<img className="quranbg" src={process.env.PUBLIC_URL + '/assets/svg/quranbg.svg'} />
					<div className="sectionOne">
						
						<div class="left">
							<h2>
								<b>Tedžvid.ba</b>
							</h2>
							<p>Priručnik za učenje tedžvidskih pravila</p>
							
							<Link to={'/lekcije'}>
								<button type="submit" class="contactBTN btn-lekcije">LEKCIJE</button>
							</Link>
						</div>
						<div class="right">
							<img className="quran" src={process.env.PUBLIC_URL + '/assets/svg/quran03.png'} />
						</div>
					</div>
					<center>
					<div className="description" id="impresum">
						
						<h2 className="white">
							<b>O NAMA</b>
						</h2>
						<br />
						<p>
						Tedzvid.ba je elektronska, interaktivna verzija printanog tedžvida autora mr. Sejid ef. Strike. Ovaj tedžvid ima za cilj da pomogne novim učačima Kur'ana, kako polaznicima mektepske nastave tako i odraslima, u lakšem savladavanju osnovnih tedžvidskih pravila. Jednostavan rječnik i izbjegavanje stručnih termina, koliko je to bilo moguće, čine ga pristupačnijim široj čitalačkoj populaciji.
						<br/><br/> Posebnost stranice tedzvid.ba su interaktivni primjeri čiji audio zapis možete preslušati klikom na isti, a video zapis nakon vježbe će vam pomoći da lakše razumijete tedžvidsko pravilo koje želite savladati. Nadamo se da će tedžvid.ba pomoći mu'allimima pri objašnjavanju tedžvidskih pravila, kako djeci u mektebu tako i odraslima nakon završetka sufare. 
						</p>
						
					</div>
					</center>
					<div className="sectionTwo">
						<div class="book">
							<img className="bookImg" src={process.env.PUBLIC_URL + '/assets/svg/book.png'} />
						</div>
						<IconContext.Provider value={{ color: "white", className: "global-class-name"}}>
						<div class="bookInfo">
							<b><h2>Želim printano izdanje</h2></b><br/>
							<h6>Informacije vazano za printano izdanje tedžvida možete dobiti kod autora:</h6><br/>
							<div class="iconWrapper">
								<div className="iconInfo">
								<div class="iconbg"><BsFillPersonFill size={32}/></div>
									
									<p>mr. Sejid ef. Strika</p>
									
							</div>
							<div className="iconInfo">
								<div class="iconbg"><MdEmail size={32}/></div>
									
									<p>sejidstrika@gmail.com</p>
									
							</div>
							<div className="iconInfo">
								<div class="iconbg"><FiPhoneCall size={32}/></div>
									
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
								Ukoliko imate neke sugestije, zapažanja, impresije budite slobodni da ih napišete kako bismo unaprijedili ovaj sajt.
							</p>
							<form className="form" action="" method="post">
								<input type="text" placeholder="Ime, prezime" />
								<input type="email" placeholder="Email" name="" id="" />
								<input type="tel" placeholder="Broj telefona" name="" id="" />
								<input
									className="textInput"
									placeholder="Unesi zadržaj porke"
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
					<div className="contentLeft">
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam veniam nulla, est, eos culpa
							aspernatur adipisci exercitationem incidunt quam velit hic! Optio odio repellendus beatae
							architecto autem voluptatem blanditiis ipsum!Lorem
						</p>
					</div>
				</footer>
			</div>
		</React.Fragment>
	);
}
// function closeMobileNav() {
//     document.getElementsByClassName("fullMenu")[0].style.display = "none";
// }
export default LandingPage;
