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
          <div className="projectCard">
          <p>Name:{project.name}</p>
          <p>Photo:{project.picture}</p>
          <p><a href={project.github}>Github</a></p>
          <p><a href={project.app}>Deployed App</a></p>
          </div>
        </>
      )}
    </>
    
  );
}

export default ProjectCard;