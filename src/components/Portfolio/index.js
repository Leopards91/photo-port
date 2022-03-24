import React,{useState} from "react";
import Project from "../Project";
import { capitalizeFirstLetter } from '../../utils/helpers';
import photo from "../../assets/small/commercial/0.jpg";

function Portfolio() {
  const [projects] = useState([
    {
      name: "surf-report",
      description: "MERN-stack",
      link: "https://github.com",
      repo: "https://github.com",
    },
    {
      name: "surf-report",
      description: "MERN-stack",
      link: "https://github.com",
      repo: "https://github.com",
    },
    {
      name: "surf-report",
      description: "MERN-stack",
      link: "https://github.com",
      repo: "https://github.com",
    },
    {
      name: "surf-report",
      description: "MERN-stack",
      link: "https://github.com",
      repo: "https://github.com",
    },
    {
      name: "surf-report",
      description: "MERN-stack",
      link: "https://github.com",
      repo: "https://github.com",
    },
  ]);

  return (
    <div>
      <h1 className="page-header">Portfolio</h1>
      {projects.map((project, idx)=> (
        <Project
        project={project}
        key={"project" + idx}
        />
      ))}
    </div>
  );
}



export default Portfolio;