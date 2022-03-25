import React from "react";

function Project({ project }){
const { name, description, link, repo } = project;

return(
<div className="project" key={name}>
    {/* <img
    src={require(`../../assets/images/${name}.jpg`)}
    alt={name}
    className={"project-bg"}
    />  */}
<div className="project-text">
    <h3>
        <a href={link}>{name}</a>{' '}
        {/* <a href={repo}><i className="fab fa-github"></i></a> */}
    </h3>
    <p>{description}</p>
    <a href={repo}>Repository link: {repo}</a>
    
</div>
</div>
);
}

export default Project;