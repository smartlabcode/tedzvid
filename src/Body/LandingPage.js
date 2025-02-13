import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
// import { BrowserRouter, Route } from 'react-router-dom';
import { IconContext } from "react-icons";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { FiPhoneCall } from "react-icons/fi";
import { BsFillPersonFill, BsArrowRight } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import BrowserMessage from "./BrowserMessage";
import { detect } from "../Helpers/BrowserDetect";
import { useTranslation } from "react-i18next";

import LanguageSwitcher from "../Components/Dropdown";

function LandingPage(props) {
  const { i18n } = useTranslation();
  const { t } = useTranslation();

  function handleChangeLanguage(event) {
    i18n.changeLanguage(event.target.value);
  }
  const [isHidden, setIsHidden] = useState(true);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const timerToClearSomewhere = useRef(null); //now you can pass timer to another component
  const [browserVersion, setBrowserVersion] = useState("");
  const [browser, setBrowser] = useState("");

  useEffect(() => {
    const [browser, version] = detect().split(" ");
    setBrowser(browser);
    setBrowserVersion(version);
    return () => clearTimeout(timerToClearSomewhere.current);
  }, []);

  const toggleIsHiddenHandler = () => {
    setIsHidden(!isHidden);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      "Ime i Prezime": fullName,
      Email: email,
      "Broj Telefona": phone,
      Poruka: message,
    };
    window.Pageclip.send(
      "wRH1bp6IBZe5paTzYnZGFFEt4NhsZmh9",
      "default",
      data,
      function (error, response) {
        // console.log('saved?', !!error, '; response:', error || response);
        if (!error) {
          setShowSuccessMessage(true);
          timerToClearSomewhere.current = setTimeout(
            () => setShowSuccessMessage(false),
            3000
          );
        } else {
          setShowErrorMessage(true);
          timerToClearSomewhere.current = setTimeout(() => {
            setShowErrorMessage(false);
          }, 3000);
        }
        setFullName("");
        setEmail("");
        setPhone("");
        setMessage("");
      }
    );
  };
  return (
    <React.Fragment>
      <div className="wrapper">
        <div className="topNav">
          <div className="logoNavBox">
            <Link to="/">
              <img
                className="logoUrl"
                src={process.env.PUBLIC_URL + "/assets/svg/logoUrl.png"}
                alt="logo"
              />
            </Link>
          </div>
          <div className="nav">
            <ul>
              <a href="#kontakt">
                <li>{t("kontakt")}</li>
              </a>
              <a href="#printano">
                <li>{t("printizd")}</li>
              </a>
              <a href="#o-nama">
                <li>{t("onama")}</li>
              </a>
              <a
                href="https://sufara.ba/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <li>SUFARA.BA</li>
              </a>
              <Link to={"/lekcije"}>
                <li className="selectedBtn">{t("lekcije")}</li>
              </Link>
              <div className="languageSwitch">
                <LanguageSwitcher
                  onChange={handleChangeLanguage}
                  value={i18n.language}
                />
              </div>

              {/*
								<select onChange={handleChangeLanguage} value={i18n.language} className='selectorItem' >
								<option value="bs">Bosanski</option>
								<option value="en">English</option>
								</select>
							*/}
            </ul>
          </div>
        </div>

        <div className="topMobileNav">
          <img
            className="hamburger"
            src={process.env.PUBLIC_URL + "/assets/svg/hamburger.svg"}
            alt="hamburger menu icon"
            onClick={toggleIsHiddenHandler}
          />

          <Link to={"/"}>
            <img
              className="mobileLogo"
              src={process.env.PUBLIC_URL + "/assets/svg/mobileLogo.png"}
              alt="mobile logo"
            />
          </Link>
          <div>
            <Link to={"/lekcije"}>
              <BsArrowRight size={32} className="mobNavArrow" />
            </Link>
          </div>
        </div>
        <div className={isHidden ? "hide" : "fullMenu"}>
          <h3 className="closeBTN" onClick={toggleIsHiddenHandler}>
            <AiOutlineCloseCircle />
          </h3>
          <center>
            <ul>
              <Link to={"/lekcije"}>
                <li className="selectedBtn">{t("lekcije")}</li>
              </Link>
              <a href="#o-nama" onClick={toggleIsHiddenHandler}>
                <li>{t("onama")}</li>
              </a>
              <a href="#printano" onClick={toggleIsHiddenHandler}>
                <li>{t("printizd")}</li>
              </a>

              <a href="#kontakt" onClick={toggleIsHiddenHandler}>
                <li>{t("kontakt")}</li>
              </a>
              <a
                href="https://sufara.ba/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <li>SUFARA.BA</li>
              </a>
              <div
                className="languageSwitchFullMenu"
                style={{ width: "100px", marginTop: "20px" }}
              >
                <LanguageSwitcher
                  onChange={handleChangeLanguage}
                  value={i18n.language}
                />
              </div>
            </ul>
          </center>
        </div>

        <div className="innerWrapper">
          {/* <img
						className='quranbg'
						src={process.env.PUBLIC_URL + '/assets/svg/quranbg.svg'}
						alt='quran background'
					/> */}
          <div className="sectionOne">
            {/* <div className='left'>
							<h2>
								<b>Tedžvid.ba</b>
							</h2>
							<p>Priručnik za učenje tedžvidskih pravila</p>

							<Link to={'/lekcije'}>
								<button type='submit' className='contactBTN btn-lekcije'>
									LEKCIJE
								</button>
							</Link>
						</div>

						<div className='right'>
							<img
								className='quran'
								src={process.env.PUBLIC_URL + '/assets/svg/quran03.png'}
								alt='Quran'
							/>
						</div> */}
            <div className="title">
              <h1>Tedžvid.ba</h1>
              <p>{t("appTitle")}</p>
            </div>
            <div className="headerImage">
              <img
                className="quran"
                src={process.env.PUBLIC_URL + "/assets/svg/quran03.png"}
                alt="Quran"
              />
            </div>
            <div className="actionsBtn">
              <Link to={"/lekcije"}>
                <button type="submit" className="btn-lekcije">
                  {t("lekcije")}
                </button>
              </Link>
            </div>
            <div className="download-section">
              <p>{t("appAvailableOn")}</p>
              <div className="download-icons">
                <a
                  href="https://play.google.com/store/apps/details?id=com.tedzvidba.app&hl=en&gl=US"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="android"
                    src={process.env.PUBLIC_URL + "/assets/svg/androidIcon.svg"}
                    alt="Android aplikacija"
                  />
                </a>
                <a
                  href="https://apps.apple.com/rs/app/tedzvid-ba/id1561588495"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="ios"
                    src={process.env.PUBLIC_URL + "/assets/svg/iosIcon.svg"}
                    alt="iOS Aplikacija"
                  />
                </a>
              </div>
            </div>
          </div>
          <center>
            <div className="description" id="o-nama">
              <img
                className="quranbg"
                src={process.env.PUBLIC_URL + "/assets/svg/quranbg.svg"}
                alt="quran background"
              />
              <p dangerouslySetInnerHTML={{ __html: t("aboutUsContent") }} />
              <div className="video">
                <iframe
                  src="https://www.youtube.com/embed/2Yk_8zotx_8"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen="true"
                  webkitallowfullscreen="true"
                  mozallowfullscreen="true"
                ></iframe>
              </div>
            </div>
          </center>
          <div className="sectionTwo" id="printano">
            <div className="book">
              <img
                className="bookImg"
                src={process.env.PUBLIC_URL + "/assets/svg/book.png"}
                alt="Book"
              />
            </div>
            <IconContext.Provider
              value={{ color: "white", className: "global-className-name" }}
            >
              <div className="bookInfo">
                <b>
                  <h2>{t("printedEdition")}</h2>
                </b>
                <br />
                <h6>{t("printedEditionInfo")}</h6>
                <br />
                <div className="iconWrapper">
                  <div className="firstRow">
                    <div className="iconInfo">
                      <div className="iconbg">
                        <BsFillPersonFill size={32} />
                      </div>

                      <p>mr. Sejid ef. Strika</p>
                    </div>
                    <div className="iconInfo">
                      <a href="mailto:tedzvidba@gmail.com">
                        <div className="iconbg">
                          <MdEmail size={32} />
                        </div>
                      </a>
                      <p>tedzvidba@gmail.com</p>
                    </div>
                  </div>

                  <div className="iconInfo">
                    <a href="viber://chat?number=0038761617606">
                      <div className="iconbg">
                        <FiPhoneCall size={32} />
                      </div>
                    </a>
                    <p>+38761 617 606</p>
                  </div>
                </div>
              </div>
            </IconContext.Provider>
          </div>

          <div className="sectionThree" id="kontakt">
            <center>
              <h2>{t("contact")}</h2>
              <br />
              <p>{t("contactInfo")}</p>

              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  placeholder={t("nameSurname")}
                  name="ime i prezime"
                  value={fullName}
                  onChange={(e) => {
                    setFullName(e.target.value);
                  }}
                  required
                />
                <input
                  type="email"
                  placeholder={t("email")}
                  name="email"
                  id=""
                  required
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
                <input
                  type="tel"
                  placeholder={t("phoneNumber")}
                  name="broj telefona"
                  id=""
                  value={phone}
                  onChange={(e) => {
                    setPhone(e.target.value);
                  }}
                />
                <textarea
                  className="textInput"
                  placeholder={t("enterMessage")}
                  type="text"
                  name="poruka"
                  id=""
                  required
                  value={message}
                  onChange={(e) => {
                    setMessage(e.target.value);
                  }}
                />
                <div
                  className={showSuccessMessage ? "success_message" : "hide"}
                >
                  <span
                    className="closebtn"
                    onClick={() => setShowSuccessMessage(false)}
                  >
                    &times;
                  </span>
                  {t("sendS")}
                </div>
                <div className={showErrorMessage ? "error_message" : "hide"}>
                  <span
                    className="closebtn"
                    onClick={() => setShowErrorMessage(false)}
                  >
                    &times;
                  </span>
                  {t("sendF")}
                </div>
                <button
                  type="submit"
                  className="pageclip-form__submit contactBTN "
                >
                  {t("send")}
                </button>
              </form>
            </center>
          </div>
        </div>
        <footer className="footerLandingNew">
          <div className="innerFooter">
            <div className="footerLogo">
              <Link to="/">
                <img
                  className="logoUrl"
                  src={process.env.PUBLIC_URL + "/assets/svg/logoUrl.png"}
                  alt="logo"
                />
              </Link>
            </div>
            <div className="footerInfo">
              <div className="footerLinks">
                <div className="footerNav">
                  <ul>
                    <a href="#kontakt">
                      <li>{t("kontakt")}</li>
                    </a>
                    <a href="#printano">
                      <li>{t("printizd")}</li>
                    </a>
                    <a href="#o-nama">
                      <li>{t("onama")}</li>
                    </a>
                    <a
                      href="https://sufara.ba/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <li>Sufara.ba</li>
                    </a>
                  </ul>
                </div>
                <div className="footerPartners">
                  <p>{t("partners")}</p>
                  <ul>
                    <li>
                      <a
                        href="https://imtec.ba/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          className="imtec-logo"
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/svg/imtec_logo.png"
                          }
                          alt=""
                        />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://smartlab.ba/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          className="smartlab-logo"
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/svg/smartlab_logo.svg"
                          }
                          alt=""
                        />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="copyright">Copyright © 2021 | tedzvid.ba</div>
            </div>
          </div>
          {/* <h2>Prijatelji projekta:</h2>
					<ul>
						<li>
							<a
								href='https://imtec.ba/'
								target='_blank'
								rel='noopener noreferrer'>
								<img
									src={process.env.PUBLIC_URL + '/assets/svg/imtec_logo.png'}
									alt=''
								/>
							</a>
						</li>
						<li>
							<a
								href='https://smartlab.ba/'
								target='_blank'
								rel='noopener noreferrer'>
								<img
									src={process.env.PUBLIC_URL + '/assets/svg/smartlab_logo.svg'}
									alt=''
								/>
							</a>
						</li>
					</ul> */}
        </footer>
        <BrowserMessage browser={browser} browserVersion={browserVersion} />
      </div>
    </React.Fragment>
  );
}
// function closeMobileNav() {
//     document.getElementsByClassName("fullMenu")[0].style.display = "none";
// }
export default LandingPage;
