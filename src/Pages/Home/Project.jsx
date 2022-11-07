import React from "react";

const Project = ({ project }) => {
  return (
    <div className="card w-72 hover:bg-orange-400 hover:text-white shadow-xl translate duration-500 ease-in">
      <figure className="px-8 pt-10">
        <img src={project.img} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title font-bold">{project.project}</h2>
        <p>{project.details}</p>
      </div>
    </div>
  );
};

export default Project;
