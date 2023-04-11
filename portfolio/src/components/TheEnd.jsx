import React, { useEffect } from "react";
import "@google/model-viewer/dist/model-viewer";
import { Hearts } from "react-loader-spinner";
import AOS from "aos";
import "aos/dist/aos.css";
import image from "../assets/img/images";
const TheEnd = () => {
  useEffect(() => {
    AOS.init({ duration: 600 });
    AOS.refresh();
  }, []);
  return (
    <div
      id="theend"
      className="wrapper pb-10"
      data-aos="fade-down"
      data-aos-easing="linear"
      data-aos-duration="1500"
    >
      <h1 className="ndv__title">THE END</h1>
      <div className="flex items-center lg:justify-around lg:flex-row flex-col ">
        <div className="">
          <model-viewer
            class="w-[300px] h-[300px]"
            id="bp_model_id_7955"
            src={image.endImage}
            alt="nganglenne"
            camera-controls=""
            disable-zoom=""
            loading="auto"
            auto-rotate=""
            ar-status="not-presenting"
          ></model-viewer>
        </div>
        <div className="">
          <p className="pb-5">
            Finally, I would like to say "Thank You" for spent time to look at
            my portfolio.
          </p>
          <div>
            You're a flower on earth, let's make your life beautiful and
            meaningful.
            <Hearts
              height="80"
              width="80"
              color="rgb(56 189 248)"
              ariaLabel="hearts-loading"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TheEnd;
