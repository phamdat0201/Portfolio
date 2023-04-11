import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect } from "react";
import Spinner from "./Spinner";
import AOS from "aos";
import "aos/dist/aos.css";
const Education = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="wrapper" id="education">
      <h1 className="ndv__title">EDUCATION</h1>
      <div className="sm:text-sm">
        <div
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1000"
        >
          <div className="flex items-center justify-between text-second_color">
            <div className="pl-4 text-2xl font-semibold md:text-xl sm:text-sm w-[70%]">
              <FontAwesomeIcon className="mr-5" icon={faGraduationCap} />
              Industrial University of Ho Chi Minh City
            </div>
            <div>
              <p>July 2019 - Present</p>
            </div>
          </div>
          <h4 className="flex items-center mt-4 leading-6">
            <Spinner />
            <span className="ml-2">
              I'm a final year student majoring in Front-end Developer would
              love to experience and gain more practical knowledge in this
              industry through the intern position.
            </span>
          </h4>
          <h4 className="flex items-center mt-4 leading-6">
            <Spinner />
            <span className="ml-2">
              So far, I study a lot about career development in information
              technology and then I decide to choose web programming because I
              particularly like customize and draw on my websites.
            </span>
          </h4>
          <h4 className="flex items-center mt-4 leading-6">
            <Spinner />
            <span className="ml-2">
              I really enjoy my school, where I make new friends and we study
              together. I also had moments standing on lectern to teach my
              classmates about programming.
            </span>
          </h4>
          <h4 className="flex items-center mt-4 leading-6">
            <Spinner />
            <span className="ml-2">
              Now, my graduate is 2.4/4. I will try to develop myself more.
            </span>
          </h4>
        </div>
        <div
          className="mt-4"
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="4500"
        ></div>
      </div>
    </div>
  );
};

export default Education;
