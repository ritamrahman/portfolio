import React from "react";
import { Link } from "react-router-dom";

const Card = ({ id, image, name, shortDes, technology, ClientLink, serverLink, clientCode, serverCode }) => {
  return (
    <div className="card bg-white dark:bg-fadeMidNight shadow-xl">
      <figure className="p-4 ">
        <img src={image} alt="Shoes" className="min-w-full max-h-52 object-contain card" />
      </figure>
      <div className="card-body">
        <div className="card-actions justify-start">
          {technology?.map((t) => (
            <div className="badge badge-outline text-fadeMidNight dark:text-white dark:text-opacity-75">{t}</div>
          ))}
        </div>
        <h2 className="card-title text-black dark:text-white text-left">{name}</h2>
        <p className="text-black dark:text-dimWhite dark:text-opacity-50 text-left">{shortDes.slice(0, 200)}...</p>

        <div className="card-actions justify-start">
          <a href={ClientLink} target="_blank" className="btn btn-sm btn-success">
            Client
          </a>
          {serverLink && (
            <a href={serverLink} target="_blank" className="btn btn-sm btn-secondary">
              Server
            </a>
          )}
          <a href={clientCode} target="_blank" className="btn btn-sm btn-primary">
            Client Code
          </a>
          {serverCode && (
            <a href={serverCode} target="_blank" className="btn btn-sm btn-info">
              Server Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
