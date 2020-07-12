import React from 'react';
import { Link } from 'react-router-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { IconContext } from 'react-icons';
import { AiOutlineCloseCircle } from 'react-icons/ai';

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
								<li>IMPRESUM</li>
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
						<h2>
							<b>Tedžvid.ba</b>
						</h2>
						<p>Priručnik za učenje tedžvidskih pravila</p>
					</div>
					<img className="quran" src={process.env.PUBLIC_URL + '/assets/svg/quran03.png'} />
					<center className="description" id="impresum">
						<h2 className="white">
							<b>Lorem</b>
						</h2>
						<br />
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure quisquam quam optio,
							incidunt, amet in sed, harum autem sunt repellat dicta aperiam ab tempora reiciendis facere
							doloribus. Perferendis, sequi nihil? Lorem ipsum, dolor sit amet consectetur adipisicing
							elit. Itaque qui omnis labore voluptate, dignissimos incidunt nulla explicabo nihil odio non
							vero distinctio exercitationem pariatur aspernatur rerum nostrum. Eveniet, fuga alias.
						</p>
					</center>

					<div className="sectionTwo" id="contact">
						<center>
							<h2>
								<b>Kontakt</b>
							</h2>
							<br />
							<p>
								Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis molestiae voluptates
								excepturi eos dignissimos minus quae quasi. Molestias, perspiciatis doloribus ipsum
								porro commodi, sed pariatur, suscipit recusandae excepturi quasi maiores? Lorem ipsum
								dolor sit amet consectetur adipisicing elit. Sunt, qui neque. Pariatur, ratione officia
								natus eos quod ipsa voluptatibus quam sapiente eligendi, amet cupiditate magni maxime
								nesciunt vel dolores! Quod!
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
