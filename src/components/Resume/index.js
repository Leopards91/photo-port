import React from "react";

function Resume() {
  return (
    <div className="columns">
      <div className="column">
      <div className="center" id="resume">
				<h1 className="page-header">Resume</h1>
			</div>
        <hr />

        <a
          className="button is-primary"
          href={process.env.PUBLIC_URL + "/Amos_Han_resume.pdf"}
          target="_blank" rel="noreferrer"
        >
          <span className="icon">
            <i className="fas fa-download"></i>
          </span>
          <span>Download My Resume</span>
        </a>
      </div>
      <div className="column">
        <p className="content is-medium">Skills</p>
        <hr />
        <ul>
            <li>HTML, CSS, Javascript, React.js</li>
            <li>OpenAPI, JSON</li>
            <li>Heroku</li>
            <li>Git</li>
            <li>Github Repo</li>
        </ul>
      </div>
    </div>
  );
}

export default Resume;