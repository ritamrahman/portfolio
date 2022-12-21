import React from "react";
import { Link, useParams } from "react-router-dom";
import Button from "../../Components/Button";
import data from "../../data/projects.json";

const ProjectDetails = () => {
  const params = useParams();
  const id = parseInt(params.id);
  const details = data.filter((d) => d.id === id);
  console.log(details);
  return (
    <section className=" bg-white dark:bg-midnight px-4 py-16 mx-auto  md:px-24 lg:px-8 lg:py-20">
      {/* header */}
      <header className="w-full mb-10">
        {/* left side start */}
        <div className="flex flex-col justify-center items-center">
          <div className="w-full flex flex-col justify-center items-center">
            {/* title */}
            <h2 className="max-w-3xl text-center text-[40px] lg:text-[66px] font-bold tracking-tight text-black dark:text-white lg:leading-tight sm:leading-none mb-6">
              {`${details[0].name}`}
            </h2>
          </div>
        </div>
      </header>
      {/* main */}
      <main>
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
            {/* featuredImage */}
            <div>
              {details[0]?.screenshoots.map((i) => (
                <img src={i} alt="" className="rounded-3xl my-2" />
              ))}
            </div>

            {/* body heading */}

            {/* body dise */}
          </div>

          {/* options container end */}
          {/* Description */}
          <div className="w-full py-3 rounded-lg flex flex-col justify-start px-10 items-center my-9 bg-white/5">
            <h1 className="max-w-lg mb-6 font-sans text-2xl text-left font-bold leading-none tracking-tight text-fadeMidNight dark:text-white sm:text-4xl md:mx-auto capitalize">
              Description
            </h1>
            <p className="text-midnight dark:text-white">{details[0]?.description}</p>
            <div className="text-left">
              <h3 className="text-xl font-bold my-3 mt-7 text-midnight dark:text-dimWhite">Features</h3>
              <ol>
                {details[0]?.features.map((f) => (
                  <li className="list-disc text-black dark:text-dimWhite">{f}</li>
                ))}
              </ol>
              <h3 className="text-xl font-bold my-3 mt-7 text-midnight dark:text-dimWhite">Packages</h3>
              <ol>
                {details[0]?.packages.map((f) => (
                  <li className="list-disc text-black dark:text-dimWhite">{f}</li>
                ))}
              </ol>
              <h3 className="text-xl font-bold my-3 mt-7 text-midnight dark:text-dimWhite">Framework</h3>
              <ol>
                {details[0]?.framework.map((f) => (
                  <li className="list-disc text-black dark:text-dimWhite">{f}</li>
                ))}
              </ol>
              <h3 className="text-xl font-bold my-3 mt-7 text-midnight dark:text-dimWhite">Database</h3>
              <ol>
                {details[0]?.database.map((f) => (
                  <li className="list-disc text-black dark:text-dimWhite">{f}</li>
                ))}
              </ol>
            </div>
            <div className="w-full flex justify-center items-center my-4">
              <div className="card-actions justify-start">
                <a href={details[0]?.ClientLink} target="_blank" className="btn btn-sm btn-success">
                  Client
                </a>
                {details[0]?.serverLink && (
                  <a href={details[0]?.serverLink} target="_blank" className="btn btn-sm btn-secondary">
                    Server
                  </a>
                )}
                <a href={details[0]?.clientCode} target="_blank" className="btn btn-sm btn-primary">
                  Client Code
                </a>
                {details[0]?.serverCode && (
                  <a href={details[0]?.serverCode} target="_blank" className="btn btn-sm btn-info">
                    Server Code
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
      {/* <div className="pdf hidden">

      </div> */}
    </section>
  );
};

export default ProjectDetails;
