/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useEffect, useRef, useState } from "react";
//import icon
import * as Icon from "../assets/icons";
import "../logo.scss";
const Header = () => {
  // Add boxShadow Header
  const scrollUp = useRef();
  useEffect(() => {
    window.addEventListener("scroll", (event) => {
      let scroll = window.scrollY;
      if (scroll > 300) {
        scrollUp.current.classList.add("ndv__shadowHeader");
      } else {
        scrollUp.current.classList.remove("ndv__shadowHeader");
      }
    });
  });
  //check component click -> add activeLink
  const [active, setActive] = useState("#home");
  const [toggle, setToggle] = useState(false);
  return (
    <header
      ref={scrollUp}
      className=" mx-auto w-full fixed lg:top-0 left-0 z-50 top-[initial] bottom-0 lg:bottom-[initial] bg-main_bg sm:px-8 "
    >
      <div className=" h-header flex  justify-between items-center md:px-8 lg:px-[150px] text-main_color ">
        <div className="text-center lg:basis-1/6 lg:block lg:z-10">
          <a href="#contact" onClick={() => setActive("#contact")}>
            <svg viewBox="0 0 300 100" className="h-10 bg-transparent svg-text">
              <symbol id="s-text">
                <text textAnchor="middle" x="50%" y="50%" dy=".3em">
                  Pham Dat
                </text>
              </symbol>
              <use xlinkHref="#s-text" className="ndv__logo-text"></use>
              <use xlinkHref="#s-text" className="ndv__logo-text"></use>
              <use xlinkHref="#s-text" className="ndv__logo-text"></use>
              <use xlinkHref="#s-text" className="ndv__logo-text"></use>
              <use xlinkHref="#s-text" className="ndv__logo-text"></use>
            </svg>
          </a>
        </div>
        <div
          className={toggle ? "ndv__header-menu" : "ndv__header-menu-hidden"}
        >
          <ul className="grid items-center justify-center grid-cols-4 grid-rows-2 text-sm font-normal gap-y-6 lg:flex gap-x-8 ">
            <li className="relative flex items-center justify-center gap-x-1 ">
              <a
                href="#home"
                onClick={() => setActive("#home")}
                className={
                  active === "#home"
                    ? "ndv__header-list active-link"
                    : "ndv__header-list "
                }
              >
                <i className="ndv__icon-header">{<Icon.HomeIcon />}</i>
                <p>HOME</p>
              </a>
            </li>
            <li className="relative flex items-center justify-center gap-x-1 ">
              <a
                href="#about"
                onClick={() => setActive("#about")}
                className={
                  active === "#about"
                    ? "ndv__header-list active-link"
                    : "ndv__header-list "
                }
              >
                <i className="ndv__icon-header">{<Icon.AboutIcon />}</i>
                <p>ABOUT</p>
              </a>
            </li>
            <li className="relative flex items-center justify-center gap-x-1">
              <a
                href="#skill"
                onClick={() => setActive("#skill")}
                className={
                  active === "#skill"
                    ? "ndv__header-list active-link"
                    : "ndv__header-list "
                }
              >
                <i className="ndv__icon-header">{<Icon.SkillIcon />}</i>
                <p>SKILL</p>
              </a>
            </li>
            <li className="relative flex items-center justify-center gap-x-1">
              <a
                href="#project"
                onClick={() => setActive("#project")}
                className={
                  active === "#project"
                    ? "ndv__header-list active-link"
                    : "ndv__header-list "
                }
              >
                <i className="ndv__icon-header">{<Icon.ProjectIcon />}</i>
                <p>PROJECT</p>
              </a>
            </li>
            <li className="relative flex items-center justify-center gap-x-1">
              <a
                href="#education"
                onClick={() => setActive("#education")}
                className={
                  active === "#education"
                    ? "ndv__header-list active-link"
                    : "ndv__header-list "
                }
              >
                <i className="ndv__icon-header">{<Icon.EducationIcon />}</i>
                <p>EDUCATION</p>
              </a>
            </li>
            <li className="relative flex items-center justify-center gap-x-1">
              <a
                href="#contact"
                onClick={() => setActive("#contact")}
                className={
                  active === "#contact"
                    ? "ndv__header-list active-link"
                    : "ndv__header-list "
                }
              >
                <i className="ndv__icon-header">{<Icon.ContactIcon />}</i>
                <p>CONTACT</p>
              </a>
            </li>
            <li className="relative flex items-center justify-center gap-x-1">
              <a
                href="#theend"
                onClick={() => setActive("#theend")}
                className={
                  active === "#theend"
                    ? "ndv__header-list active-link"
                    : "ndv__header-list "
                }
              >
                <i className="ndv__icon-header">{<Icon.EndIcon />}</i>
                <p>THE END</p>
              </a>
            </li>
            <li className="relative flex items-center justify-center gap-x-1">
              <div className="ndv__header-list">
                <i
                  className="icon__close lg:hidden md:block"
                  onClick={() => {
                    setToggle(!toggle);
                  }}
                >
                  {<Icon.CloseIcon />}
                </i>
              </div>
            </li>
          </ul>
        </div>

        <div className="hidden lg:flex lg:gap-4 lg:z-10">
          <a
            href="https://github.com/phamdat0201"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i>{<Icon.GithubIcon />}</i>
          </a>
          <a
            href="https://www.facebook.com/phamdat0201"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i>{<Icon.FacebookIcon />}</i>
          </a>
          <a
            href="https://www.linkedin.com/in/phamdat0201/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i>{<Icon.LinkedInIcon />}</i>
          </a>
        </div>
        <div
          className="block toggle lg:hidden hover:cursor-pointer "
          onClick={() => {
            setToggle(!toggle);
          }}
        >
          <i>{<Icon.AppIcon />}</i>
        </div>
      </div>
    </header>
  );
};

export default Header;
