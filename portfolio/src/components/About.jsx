import React, { useEffect } from "react";
// import image from "../assets/img/image";
import AOS from "aos";
import "aos/dist/aos.css";
import image from "../assets/img/images";
const About = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
    AOS.refresh();
  }, []);
  return (
    <div className="wrapper" id="about">
      <h1 className="ndv__title">ABOUT</h1>
      <div data-aos="fade-right" className="flex gap-20 sm:gap-5 sm:flex-wrap ">
        <div className="w-[300px] h-[350px] sm:w-full">
          <img src={image.imgAbout} alt="anhCV" className="ndv__img " />
        </div>
        <div
          data-aos="fade-up-left"
          className="lg:max-w-[800px] w-[55%] sm:text-sm sm:w-full"
        >
          <h2 className="text-xl">Something about me!</h2>
          <p className="py-4">
            My name is Dang Vu. I started learning how to code in January 2021
            and I spend a lot of time studying about HTML, CSS, JavaScript,
            ReactJS. I realized that I really like coding and I want to make
            really good products for my customers. So I'm looking for a suitable
            job where I can practice and hone my skills.
          </p>
          <h3 className="">
            Short-term Goal:
            <span>
              {" "}
              Improving as well as learning many skills at programming. Become
              Fullstack Developer as soon as possible.
            </span>
          </h3>
          <h3 className="pt-4 pb-9 ">
            Long-term Goals: Become a Project Manager with professional skills.
          </h3>
          <button className="ndv__button">
            <a href="#contact">Contact me</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
