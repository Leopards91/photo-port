import React,{useState} from "react";
import Project from "../Project";
import { capitalizeFirstLetter } from '../../utils/helpers';
import photo from "../../assets/small/commercial/0.jpg";

function Portfolio() {
  const [projects] = useState([
    {
      name: "Run Buddy",
      description: "Front-end exercise to develop a website for a training gym",
      link: "https://leopards91.github.io/runbuddy/",
      repo: "https://github.com/Leopards91/runbuddy",
    },
    {
      name: "Password Generator",
      description: "A website where users will generate a password. They can feel free to include or exclude types of characters (letters, numbers, symbols) as well as choosing the number of characters between 8 and 128. It also includes error messages for invalid selections (such as selecting numbers greater than 128 or less than 8; or excluding all types of characters)",
      link: "https://leopards91.github.io/password-generator-revised/",
      repo: "https://github.com/Leopards91/password-generator-revised",
    },
    {
      name: "Code quiz",
      description: "Created a code quiz to not only test basic knowledge of coding, it also is done in a fun way, where points are awarded based on the timer while wrong answers will deduct ten seconds.",
      link: "https://leopards91.github.io/codequiz",
      repo: "https://github.com/Leopards91/codequiz",
    },
    {
      name: "Workday scheduler",
      description: "Time-block based scheduler to enable users to schedule specific parts of a 9-5 workday by hour",
      link: "https://leopards91.github.io/workday-scheduler/",
      repo: "https://github.com/Leopards91/workday-scheduler",
    },
    {
      name: "Weather Dashboard",
      description: "Using the weather API, users are able to search specific cities for current conditions and the five-day weather forecast.",
      link: "https://leopards91.github.io/weather-dashboard/",
      repo: "https://github.com/Leopards91/weather-dashboard",
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