import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import HomeFirst from '../Body/HomeFirst';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { BsArrowLeft } from 'react-icons/bs';
import { useTranslation } from "react-i18next";
import LanguageSwitcher from '../Components/Dropdown';
import "./homePage.scss"
function Home() {
	// const [ otherpage, pageClick ] = useState(false);

	// const pageClickHandler = () => {
	// 	return pageClick(!otherpage);
	// };
	const [ isHidden, toggleIsHidden ] = useState(true);

	const toggleIsHiddenHandler = () => {
		toggleIsHidden(!isHidden);
	};
	const { i18n } = useTranslation();

	function handleChangeLanguage(event) {
		i18n.changeLanguage(event.target.value);
	}
	return (
		<React.Fragment>
			<div className="topNav">
				<div className="logoNavBox">
					<Link to="/">
						<img className="logoUrl" src={process.env.PUBLIC_URL + '/assets/svg/logoUrl.png'} alt="logo" />
					</Link>
				</div>
				{
					/*
					<select onChange={handleChangeLanguage} value={i18n.language} >
						<option value="bs">Bosanski</option>
						<option value="en">English</option>
					</select>
					*/
				}
				<div className='languageSwitch'>
					<LanguageSwitcher onChange={handleChangeLanguage} value={i18n.language} />
				</div>
				<div className="nav">
					<ul>
						<Link to={'/'}>
							<img
								style={{ marginTop: '11px' }}
								src={process.env.PUBLIC_URL + '/assets/svg/ic_trending_flat_24px.png'}
								alt="trenindg flat"
							/>
							<li style={{ color: 'black' }}>NAZAD NA NASLOVNU</li>
						</Link>
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

				<Link to="/">
					<img
						className="mobileLogo"
						src={process.env.PUBLIC_URL + '/assets/svg/mobileLogo.png'}
						alt="mobile logo"
					/>
				</Link>
				<div>
					<Link to={'/'}>
						<BsArrowLeft size={32} className="mobNavArrow" />
					</Link>
				</div>
				<div className={isHidden ? 'hide' : 'fullMenu'}>
					<h3 className="closeBTN" onClick={toggleIsHiddenHandler}>
						<AiOutlineCloseCircle />
					</h3>
					<center>
						<ul>
							<Link to={'/'}>
								<li className="selectedBtn">NASLOVNA</li>
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
							<div className='languageSwitchFullMenu' style={{width:"100px",marginTop:"20px"}}>
    						  <LanguageSwitcher onChange={handleChangeLanguage} value={i18n.language} />
    						</div>
						</ul>
					</center>
				</div>
			</div>
			<Container>{<HomeFirst start={0} stop={23} />}</Container>

			<br />
			<br />
		</React.Fragment>
	);
}

export default Home;
