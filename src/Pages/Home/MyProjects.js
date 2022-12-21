import React from "react";
import Card from "../../Components/Card/Card";
import projects from "../../data/projects.json";

// const projects = [
//   {
//     id: 1,
//     image: "https://c.imagescrap.org/2022/12/19/p1.png",
//     name: "Tech Master - Simple Course Selling Site",
//     shortDes:
//       "User can add her CRUD her product & the user can login and Register with email & password or google login. Admin/Moderator can update/delete user submitted post status with the help of integrated ADMIN Dashboard.Other users can book any listed product and buy any product with a stripe payment gateway.",
//     technology: ["react", "expressjs"],
//     ClientLink: "http://localhost:3000/",
//     serverLink: "http://localhost:3000/",
//     github: "http://localhost:3000/",
//   },
// ];

const MyProjects = () => {
  return (
    <section className="bg-white dark:bg-midnight text-center px-4 py-16 mx-auto  md:px-24 lg:px-8 lg:py-4">
      <h2 className="w-full text-4xl font-bold text-black dark:text-white text-center my-8">My Projects</h2>
      {/* right side start */}
      <div className="lg:flex-1 px-5 py-4 bg-dimWhite dark:bg-midnight">
        {/* cards container start */}
        <div className="grid grid-cols-1 2xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-4">
          {projects?.map((project) => (
            <Card
              id={project.id}
              image={project.image}
              name={project.name}
              shortDes={project.shortDes}
              technology={project.technology}
              ClientLink={project.ClientLink}
              serverLink={project.serverLink}
              clientCode={project.clientCode}
              serverCode={project.serverCode}
            />
          ))}
        </div>
        {/* cards container end */}
      </div>
      {/* right side end */}
    </section>
  );
};

export default MyProjects;
