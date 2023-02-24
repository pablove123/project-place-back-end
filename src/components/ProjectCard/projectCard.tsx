import { Project } from "../../types/models";

interface ProjectCardProps{
  projects: Project[],
}

const ProjectCard = (props:ProjectCardProps):JSX.Element => {
  const {projects} = props 
  if(!projects.length) return <p>Loading...</p>
  return ( 
    <>
      {projects.map((project)=>
        <>
          {console.log("projectCard", project.name)}
          <p>Name:{project.name}</p>
          <p>Photo:{project.photo}</p>
          <a href={project.github}>Github</a>
          <br />
          <br />
          <a href={project.app}>Deployed App</a>
        </>
      )}
    </>
    
  );
}

export default ProjectCard;