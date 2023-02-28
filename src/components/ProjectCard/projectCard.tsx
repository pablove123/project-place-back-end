import { Project, User } from "../../types/models";
import { Link } from "react-router-dom";

interface ProjectCardProps{
  projects: Project[],
  user: User| null;
  handleDeleteProject: (name:string) => void;
  handleUpdateProject: (projectData:Project) => void
}

const ProjectCard = (props:ProjectCardProps):JSX.Element => {
  const {projects} = props 
  if(!projects.length) return <p>Loading...</p>
  return ( 
    <>
      {projects.map((project)=>
        <main key={project.name}>
          <div className="projectCard" >
          <p id="projectName">{project.name}</p>
          <p><img id="projectPicture" src={project.picture} alt="" /></p>
          <div key={project.name} id="linkSection">
            <a id="github" href={project.github}><button>Github</button></a>
            <a  id="app" href={project.app}><button>Deployed App</button></a>
          </div>
        
          {project.profileId === props.user?.id &&
          <>
            <div id="linkSection">
              <button id="delete" onClick={() => props.handleDeleteProject(project.name)}>Delete</button>
              <Link to={`/projects/${project.name}`} state={project}><button id="update">Update Project</button></Link>
            </div>
          </>
          }
          </div>
        </main>
      )}
    </>
    
  );
}

export default ProjectCard;