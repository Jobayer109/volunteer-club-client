import React, { useEffect, useState } from "react";
import Project from "./Project";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  console.log(projects);
  useEffect(() => {
    fetch(`http://localhost:5000/projects`)
      .then((res) => res.json())
      .then((data) => {
        setProjects(data);
      });
  }, []);
  return (
    <div className="mt-40">
      <div className="text-center border-y py-2">
        <h3 className="text-xl font-bold text-orange-600">Photo Gallery</h3>
        <h2 className="text-4xl font-mono font-extrabold">Projects We Have Done</h2>
        <p className="text-gray-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Officiis aperiam saepe possimus
          eius.
        </p>
      </div>
      <div className="grid grid-cols-3 gap-10 mt-12">
        {projects.map((project) => (
          <Project key={project._d} project={project}></Project>
        ))}
      </div>
    </div>
  );
};

export default Projects;
