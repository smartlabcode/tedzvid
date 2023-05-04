import React, { useState } from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { BsArrowLeft } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { useTranslation } from "react-i18next";
import LanguageSwitcher from  "../Components/Dropdown";
import "./lekcijePage.scss"


function LekcijaMenu(props) {
	const { i18n } = useTranslation();
	const { t } = useTranslation();

	function handleChangeLanguage(event) {
		i18n.changeLanguage(event.target.value);
	}
	const [ isHidden, toggleIsHidden ] = useState(true);

	const toggleIsHiddenHandler = () => {
		toggleIsHidden(!isHidden);
	};
	return (
		<React.Fragment>
			<div className="topNav">
				<div className="logoNavBox">
					<Link to="/">
						<img
							className="logoUrl"
							src={process.env.PUBLIC_URL + '/assets/svg/logoUrl.png'}
							alt="logo url"
						/>
					</Link>
				</div>
				<div className='languageSwitch'>
					<LanguageSwitcher onChange={handleChangeLanguage} value={i18n.language} />
				</div>
				{
				/*
				<select onChange={handleChangeLanguage} value={i18n.language}>
						<option value="bs">Bosanski</option>
						<option value="en">English</option>
					</select>
					*/
				}
				<div className="nav">
					<ul>
						<Link to={'/lekcije'}>
							<img
								style={{ marginTop: '11px' }}
								src={process.env.PUBLIC_URL + '/assets/svg/ic_trending_flat_24px.png'}
								alt="trending flat"
							/>
							<li style={{ color: 'black' }}>	{t('btol')}</li>
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
					<Link to={'/lekcije'}>
						<BsArrowLeft size={32} className="mobNavArrow" />
					</Link>
				</div>

				<div className={isHidden ? 'hide' : 'fullMenu'}>
					<h3 className="closeBTN" onClick={toggleIsHiddenHandler}>
						<AiOutlineCloseCircle />
					</h3>
					<center>
						<ul>
							<Link to={'/lekcije'}>
								<li className="selectedBtn">{t("lekcije")}</li>
							</Link>
							<Link to={'/'}>
								<li className="selectedBtn">{t("home")}</li>
							</Link>
							<a href="/#o-nama" onClick={toggleIsHiddenHandler}>
								<li>{t("onama")}</li>
							</a>
							<a href="/#printano" onClick={toggleIsHiddenHandler}>
								<li>{t("printizd")}</li>
							</a>

							<a href="/#kontakt" onClick={toggleIsHiddenHandler}>
								<li>{t("kontakt")}</li>
							</a>

							<div className='languageSwitchFullMenu' style={{width:"100px",marginTop:"20px"}}>
    						  <LanguageSwitcher onChange={handleChangeLanguage} value={i18n.language} />
    						</div>
						</ul>
					</center>
				</div>
			</div>
			<Container className="height50px ">
				<div className="lekcijaTop text-center">
					<div className="reorder">
						<h2 className="text-uppercase" style={{ fontWeight: 'bold' }}>
							{props.broj} {props.naziv}
						</h2>
					</div>
					{/* <img
						style={{ float: 'right', width: '12px', marginTop: '15px' }}
						className="logoUrl"
						src={process.env.PUBLIC_URL + '/assets/svg/Polygon 3.svg'}
						alt="Polygon 3"
					/> */}
				</div>
			</Container>
		</React.Fragment>
	);
}

export default LekcijaMenu;
