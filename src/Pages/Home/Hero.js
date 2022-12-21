import React from "react";
import { Link } from "react-router-dom";
import Button from "../../Components/Button";

const Hero = () => {
  return (
    <section className="bg-white dark:bg-midnight px-4 py-16 mx-auto  md:px-24 lg:px-8 lg:py-4">
      <div className="flex flex-col items-center justify-between w-full mb-10 lg:flex-row">
        {/* left side start */}
        <div className="mb-16 lg:mb-0 lg:max-w-lg lg:pr-5">
          <div className="max-w-xl mb-6">
            <h2 className="text-[40px] lg:text-[66px] font-bold tracking-tight text-black dark:text-white lg:leading-tight sm:leading-none max-w-lg mb-6">
              Hi, This is <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gs to-ge">Ritam Rahman</span>{" "}
            </h2>
            <p className="text-black dark:text-darkText text-base md:text-lg">I'm Full-Stack Web Developer</p>
          </div>
          <div className="flex items-center space-x-3">
            <Button />
          </div>
        </div>
        {/* left side end */}

        {/* right side img start*/}
        <div className="flex items-center justify-center relative lg:w-1/2 object-cover ">
          <img
            src="https://c.imagescrap.org/2022/12/16/1.png"
            className="object-cover object-right w-full h-full lg:w-[90%] lg:h-full"
            alt=""
          />
          {/* <a href="https://ibb.co/mb8Q3sc"><img src="" alt="Herobg" border="0"></a> */}
        </div>
        {/* right side img end*/}
      </div>
      {/* scroll down btn */}
      <a
        href="/"
        aria-label="Scroll down"
        className="flex items-center justify-center w-10 h-10 mx-auto text-gray-600 hover:text-deep-purple-accent-400 hover:border-deep-purple-accent-400 duration-300 transform border border-gray-400 rounded-full hover:shadow hover:scale-110"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
          <path d="M10.293,3.293,6,7.586,1.707,3.293A1,1,0,0,0,.293,4.707l5,5a1,1,0,0,0,1.414,0l5-5a1,1,0,1,0-1.414-1.414Z" />
        </svg>
      </a>
    </section>
  );
};

export default Hero;
