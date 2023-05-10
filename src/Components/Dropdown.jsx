import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import "./dropdown.scss";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const defaultLanguage = "bs";
  const storedLanguage = localStorage.getItem("language");
  const [language, setLanguage] = useState(storedLanguage || defaultLanguage);
  const [isOpen, setIsOpen] = useState(false);
  const bosnianFlag =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Flag_of_Bosnia_and_Herzegovina.svg/100px-Flag_of_Bosnia_and_Herzegovina.svg.png";
  const englishFlag =
    "https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/100px-Flag_of_the_United_Kingdom.svg.png";

  const handleLanguageChange = (newLanguage) => {
    i18n.changeLanguage(newLanguage);
    setLanguage(newLanguage);
    localStorage.setItem("language", newLanguage);
    setIsOpen(false);
  };

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    localStorage.removeItem('i18nextLng');
    if (!storedLanguage) {
     handleLanguageChange(defaultLanguage);
    }
  }, [storedLanguage]);

 return (
    <div style={{ position: "relative" }}>
      <button
        onClick={toggleMenu}
        style={{
          display: "flex",
          alignItems: "center",
          backgroundColor: "transparent",
          border: "none",
          cursor: "pointer",
          fontSize: "12px",
        }}
      >
        <img
          src={language === "bs" ? bosnianFlag : englishFlag}
          alt={language === "bs" ? "Bosnian Flag" : "English Flag"}
          style={{
            width: "22px",
            height: "22px",
            borderRadius: "50%",
            objectFit: "cover",
            marginRight: "5px",
          }}
        />
        <span className="dropdownSpan spanSelectLang"  style={{fontSize: "14px"}}>{language === "bs" ? "Bosanski" : "English"}</span>
        <svg
          viewBox="0 0 10 6"
          style={{ marginLeft: "5px", fill: "currentColor" }}
        >
          <path d="M1,1l4,4l4,-4" />
        </svg>
      </button>
      {isOpen && (
        <div
          style={{
            position: "absolute",
            top: "100%",
            right: 0,
            backgroundColor: "#fff",
            border: "1px solid #ccc",
            borderRadius: "4px",
            overflow: "hidden",
          }}
        >
          <button
            onClick={() => handleLanguageChange("bs")}
            style={{
              display: "flex",
              alignItems: "center",
              backgroundColor: "transparent",
              border: "none",
              cursor: "pointer",
              padding: "5px",
              width: "100%",
              fontSize: "12px",
            }}
          >
            <img
              src={bosnianFlag}
              alt="Bosnian Flag"
              style={{
                width: "22px",
                height: "22px",
                borderRadius: "50%",
                objectFit: "cover",
                marginRight: "5px",
              }}
            />
            <span className="dropdownSpan" style={{fontSize: "14px"}}>Bosanski</span>
          </button>
          <button
            onClick={() => handleLanguageChange("en")}
            style={{
              display: "flex",
              alignItems: "center",
              backgroundColor: "transparent",
              border: "none",
              cursor: "pointer",
              padding: "5px",
              width: "100%",
              fontSize: "12px",
            }}
          >
            <img
              src={englishFlag}
              alt="English Flag"
              style={{
                width: "22px",
                height: "22px",
                borderRadius: "50%",
                objectFit: "cover",
                marginRight: "5px",
              }}
            />
            <span className="dropdownSpan" style={{fontSize: "14px"}}>English</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
