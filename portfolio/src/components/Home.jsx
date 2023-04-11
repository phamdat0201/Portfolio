import React from "react";
import ReactTyped from "react-typed";

import * as Icon from "../assets/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileLines, faHandsWash } from "@fortawesome/free-solid-svg-icons";
import image from "../assets/img/images";
const Home = () => {
  return (
    <div
      className="lg:mt-header md:px-8 lg:px-[150px] sm:px-5 mt-0 flex h-[90vh] relative items-center justify-between"
      id="home"
    >
      <div>
        <h2 className="text-xl text-gray-400 sm:text-base">
          Hi, I'm Pham Dat{" "}
          <i className="[color:#1c8cc2eb]">
            <FontAwesomeIcon icon={faHandsWash} />
          </i>
        </h2>
        <div className="py-10 text-5xl md:text-5xl md:text-3xl">
          <ReactTyped
            strings={[
              "Explore my Portfolio",
              "I'm a Web Developer",
              "Nice to meet you!",
            ]}
            typeSpeed={40}
            backSpeed={50}
            attr="placeholder"
            loop
          >
            <input
              type="text"
              className="bg-transparent placeholder:text-white"
            />
          </ReactTyped>
        </div>
        <a href={image.imgCV} download className="w-full h-full ">
          <button className="ndv__button">
            Download CV
            <i className="ml-2">
              <FontAwesomeIcon icon={faFileLines} />
            </i>
          </button>
        </a>
      </div>
      <div className="h-[400px] w-[400px] sm:w-[300px] sm:h-[200px]">
        <img
          src={image.avata}
          alt="avt"
          className="ndv__img animate-profile_animate shadow-avt_shadow"
        />
      </div>
      <div className="absolute left-[48%] bottom-[20px]">
        <p className="text-sm ml-[-26px] mb-2">Scroll down</p>
        <div className="pt-6 animate-bounce">{<Icon.DownIcon />}</div>
      </div>
    </div>
  );
};

export default Home;
