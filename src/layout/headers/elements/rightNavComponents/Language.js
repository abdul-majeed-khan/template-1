import React, { useEffect, useState } from "react";
import { Globe } from "react-feather";
import useOutsideDropdown from "@/utils/useOutsideDropdown";
import { languageDropDownData } from "@/data/menu";
import { useTranslation } from "react-i18next";

const Language = () => {
  const { ref, isComponentVisible, setIsComponentVisible } = useOutsideDropdown(false);
  const { i18n } = useTranslation();
  const currentLanguage = i18n.resolvedLanguage;
  const [selectedLang, setSelectedLang] = useState({});
  const [lang, setLang] = useState("en");
  const changeLng = (lng) => {
    setLang(lng);
    i18n.changeLanguage(lng);
  };

  useEffect(() => {
    const defaultLanguage = languageDropDownData.find((data) => data.lang == currentLanguage);
    setSelectedLang(defaultLanguage);
  }, []);
    
  return (
    <li ref={ref} className={`dropdown language ${isComponentVisible && "active"}`}>
      <a>
        <Globe onClick={() => {setIsComponentVisible(!isComponentVisible)}}/>
      </a>
      <ul className={`nav-submenu ${isComponentVisible && "open"}`}>
        {languageDropDownData.map((item, i) => (
          <li key={i} locale={item.lang} onClick={() => changeLng(item.lang)}>
            <a href={"#"}>{item.language}</a>
          </li>
        ))}
      </ul>
    </li>
  );
};

export default Language;
