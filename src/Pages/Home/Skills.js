import React from "react";

const Skills = () => {
  return (
    <section className="bg-white dark:bg-midnight text-center px-4 py-16 mx-auto  md:px-24 lg:px-8 lg:py-4">
      <h2 className="w-full text-4xl font-bold text-black dark:text-white text-center my-8">My Skills</h2>
      {/* right side start */}

      <div className="max-w-4xl mx-auto">
        <div className="radial-progress p-10 my-3 mx-3 text-gs dark:text-ge" style={{ "--value": 100 }}>
          HTML/CSS <br /> 100%
        </div>
        <div className="radial-progress p-10 my-3 mx-3 text-gs dark:text-ge" style={{ "--value": 90 }}>
          JavaScript <br /> 90%
        </div>
        <div className="radial-progress p-10 my-3 mx-3 text-gs dark:text-ge" style={{ "--value": 80 }}>
          ReactJS <br /> 80%
        </div>
        <div className="radial-progress p-10 my-3 mx-3 text-gs dark:text-ge" style={{ "--value": 40 }}>
          NodeJS <br /> 40%
        </div>
        <div className="radial-progress p-10 my-3 mx-3 text-gs dark:text-ge" style={{ "--value": 75 }}>
          ExpressJS <br /> 75%
        </div>
        <div className="radial-progress p-10 my-3 mx-3 text-gs dark:text-ge" style={{ "--value": 75 }}>
          MongoDB <br /> 75%
        </div>
      </div>

      {/* right side end */}
    </section>
  );
};

export default Skills;
