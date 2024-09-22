import React from 'react';

import { useTranslation } from "react-i18next";
import Lesson13_bs from '../Components/Lesson13_bs';
import Lesson13_en from '../Components/Lesson13_en';

// Bootstrap
import { Row, Col, Container } from "react-bootstrap";

// Other
import "../App.scss";
import Footer from "../Body/MainFooter";
import PlayerRow from "../Helpers/PlayerHelper";
import VjezbeRow from "../Helpers/VjezbeHelper";
import LessonModal from "../Helpers/LessonModal";
import { IconContext } from "react-icons";
import { MdZoomOutMap } from "react-icons/md";
import Arabic from "../Letters/Arabic";
import LekcijaMenu from "../Body/LekcijaMenu";
import data from "../Data/L13Data.json";

function L13() {
  const { t, i18n } = useTranslation();
  const [showLessonModal, setShowLessonModal] = React.useState(false);
  const [showPracticeModal, setShowPracticeModal] = React.useState(false);

  const handleCloseLessonModal = () => setShowLessonModal(false);
  const handleShowLessonModal = () => setShowLessonModal(true);

  const handleClosePracticeModal = () => setShowPracticeModal(false);
  const handleShowPracticeModal = () => setShowPracticeModal(true);

  // Determine current language
  const currentLanguage = i18n.language;

  try {
    return (
      <>
        <LekcijaMenu
          broj={t("lesson13.lesson.number")}
          naziv={t("lesson13.lesson.lessonMenu")}
        />
        <Container>
          <Row>
            <Col>
              <div className="mobileTop">
                <center>
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/svg/Group 61.svg`}
                    alt="Group 61"
                  />
                </center>
                <h2
                  className="text-center font-weight-bold text-uppercase"
                  id="lekcija"
                >
                  {t("lesson13.lesson.number")} {t("lesson13.lesson.title")}
                </h2>
              </div>
              <h4 className="text-center">
                <strong>{t("lesson13.lesson.subtitle")}</strong>
              </h4>
              <hr />
            </Col>
          </Row>

          <IconContext.Provider
            value={{ size: "30px", style: { float: "right" } }}
          >
            <MdZoomOutMap
              className="zoomIcon"
              onClick={handleShowLessonModal}
            />
          </IconContext.Provider>

          <Row>
            <h1>
              {t("lesson13.lesson.number", {
                number: <span className="arapski-lekcija">ـــْـــ</span>,
              })}
            </h1>

            <Col className="opisLekcije">
              {t("lesson13.lesson.number", {
                number: <span className="arapski-lekcija">ـــْـــ</span>,
              })}
              {t("lesson13.lesson.description", {
                letters: (
                  <Arabic arabic={t("lesson13.letters.arabicLetters")} />
                ),
                phrase: <strong>{t("lesson13.letters.phrase")}</strong>,
                sukoon: <span className="arapski-lekcija">ـــْـــ</span>,
                echoing: currentLanguage === "en" ? "echoing" : "odskakanja",
                bouncing: currentLanguage === "en" ? "bouncing" : "", // Adjust as per translation
              })}
            </Col>
          </Row>

          <Row className="text-center rtl">
            <Col>{PlayerRow(data, "row1")}</Col>
          </Row>

          <Row className="text-center reorder-basic rtl">
            <Col>
              {VjezbeRow(data, "multirow", "row2")}
              {PlayerRow(data, "row2")}
            </Col>
          </Row>

          <Row className="text-center">
            <Col>{VjezbeRow(data, "multirow", "row3")}</Col>
          </Row>

          {/* Practice Section */}
          <h2 className="text-center" id="vjezba">
            <strong>{t("lesson13.lesson.practice")}</strong>
          </h2>
          <hr />

          <IconContext.Provider
            value={{ size: "30px", style: { float: "right" } }}
          >
            <MdZoomOutMap
              className="zoomIcon"
              onClick={handleShowPracticeModal}
            />
          </IconContext.Provider>

          {/* Practice Exercises */}
          <Row className="text-center vjezba-row">
            <Col className="mobile-row">
              <span className="tacka">
                {VjezbeRow(data, "vjezba", "broj9")} ۞
              </span>
              <span className="tacka">
                {VjezbeRow(data, "vjezba", "broj10")} ۞
              </span>
            </Col>
          </Row>
          <Row className="text-center vjezba-row">
            <Col className="mobile-row">
              <span className="tacka">
                {VjezbeRow(data, "vjezba", "broj11")} ۞
              </span>
            </Col>
          </Row>
          <Row className="text-center vjezba-row">
            <Col className="mobile-row">
              <span className="tacka">
                {VjezbeRow(data, "vjezba", "broj12")} ۞
              </span>
            </Col>
          </Row>
          <Row className="text-center vjezba-row">
            <Col className="mobile-row">
              <span className="tacka">
                {VjezbeRow(data, "vjezba", "broj13")} ۞
              </span>
              <span className="tacka">
                {VjezbeRow(data, "vjezba", "broj14")} ۞
              </span>
            </Col>
          </Row>
          <Row className="text-center vjezba-row">
            <Col className="mobile-row">
              <span className="tacka">
                {VjezbeRow(data, "vjezba", "broj15")} ۞
              </span>
              <span className="tacka">
                {VjezbeRow(data, "vjezba", "broj16")} ۞
              </span>
              <span className="tacka">
                {VjezbeRow(data, "vjezba", "broj17")} ۞
              </span>
            </Col>
          </Row>

          {/* Video Lecture */}
          <Row>
            <Col>
              <hr />
              <h2 className="text-center" id="video">
                <strong>{t("lesson13.lesson.videoLecture")}</strong>
              </h2>
              <center>
                <div className="video">
                  <iframe
                    width="900"
                    height="506"
                    src="https://www.youtube.com/embed/HXl9qfDHzFM?list=PLcdhKKk9LmetUjroRtBCCkugO_whS-cW2"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    webkitallowfullscreen="true"
                    mozallowfullscreen="true"
                  ></iframe>
                </div>
              </center>
            </Col>
          </Row>

          {/* Practice Modal */}
          <LessonModal
            show={showPracticeModal}
            handleClose={handleClosePracticeModal}
            title="lesson.modalPracticeTitle"
          >
            <Row className="text-center vjezba-row">
              <Col className="mobile-row">
                <span className="tacka">
                  {VjezbeRow(data, "vjezba", "broj9")} ۞
                </span>
                <span className="tacka">
                  {VjezbeRow(data, "vjezba", "broj10")} ۞
                </span>
              </Col>
            </Row>
            <Row className="text-center vjezba-row">
              <Col className="mobile-row">
                <span className="tacka">
                  {VjezbeRow(data, "vjezba", "broj11")} ۞
                </span>
              </Col>
            </Row>
            <Row className="text-center vjezba-row">
              <Col className="mobile-row">
                <span className="tacka">
                  {VjezbeRow(data, "vjezba", "broj12")} ۞
                </span>
              </Col>
            </Row>
            <Row className="text-center vjezba-row">
              <Col className="mobile-row">
                <span className="tacka">
                  {VjezbeRow(data, "vjezba", "broj13")} ۞
                </span>
                <span className="tacka">
                  {VjezbeRow(data, "vjezba", "broj14")} ۞
                </span>
              </Col>
            </Row>
            <Row className="text-center vjezba-row">
              <Col className="mobile-row">
                <span className="tacka">
                  {VjezbeRow(data, "vjezba", "broj15")} ۞
                </span>
                <span className="tacka">
                  {VjezbeRow(data, "vjezba", "broj16")} ۞
                </span>
                <span className="tacka">
                  {VjezbeRow(data, "vjezba", "broj17")} ۞
                </span>
              </Col>
            </Row>
          </LessonModal>

          {/* Lesson Modal */}
          <LessonModal
            show={showLessonModal}
            handleClose={handleCloseLessonModal}
            title="lesson.modalLessonTitle"
          >
            <Row>
              <Col className="opisLekcije">
                {t("lesson13.lesson.description", {
                  letters: (
                    <Arabic arabic={t("lesson13.letters.arabicLetters")} />
                  ),
                  phrase: <strong>{t("lesson13.letters.phrase")}</strong>,
                  sukoon: <span className="arapski-lekcija">ـــْـــ</span>,
                  echoing: currentLanguage === "en" ? "echoing" : "odskakanja",
                  bouncing: currentLanguage === "en" ? "bouncing" : "", // Adjust as per translation
                })}
              </Col>
            </Row>

            <Row className="text-center rtl">
              <Col>{PlayerRow(data, "row1")}</Col>
            </Row>

            <Row className="text-center reorder-basic rtl">
              <Col>
                {VjezbeRow(data, "multirow", "row2")}
                {PlayerRow(data, "row2")}
              </Col>
            </Row>

            <Row className="text-center">
              <Col>{VjezbeRow(data, "multirow", "row3")}</Col>
            </Row>
          </LessonModal>

          <Footer prev="/lekcija12" next="/lekcija14" />
        </Container>
      </>
    );
  } catch (e) {
    console.log(e);
    return 1;
  }
}

export default L13;
