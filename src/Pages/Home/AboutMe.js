import React from "react";
import { Link } from "react-router-dom";
import Button from "../../Components/Button";

const AboutMe = () => {
  return (
    <section
      id="aboutme"
      className="bg-white dark:bg-midnight text-center px-4 py-16 mx-auto  md:px-24 lg:px-8 lg:py-4"
    >
      <h2 className="w-full text-4xl font-bold text-black dark:text-white text-center my-28">About Me</h2>
      <div className="flex flex-col items-center justify-center w-full mb-10 lg:flex-row">
        {/* left side start */}
        <div className="mb-16 lg:mb-0 lg:max-w-lg lg:pr-5">
          <img
            src="https://i.ibb.co/3FWdg2T/Blur-LNK.png"
            className="object-cover object-right w-full h-full lg:w-[90%] lg:h-full rounded-full"
            alt=""
          />
        </div>
        {/* left side end */}

        {/* right side img start*/}
        <div className="flex items-center justify-between relative lg:w-1/2 object-cover ">
          <div className="mockup-window border border-base-300">
            <div className="flex text-left justify-start px-4 py-16 border-t border-base-300 text-black dark:text-darkText">
              I am a Front End developer. I have 1 Years of experience in building websites and web applications. I
              specialize in JavaScript and ReactJS. <br /> I also have experience working with NodeJS, ExpressJS and
              MongoDB. Take a look at my Resume for more details.
            </div>
            <div className="mx-4 mb-7">
              <Button />
            </div>
          </div>
        </div>
        {/* right side img end*/}
      </div>
    </section>
  );
};

export default AboutMe;
