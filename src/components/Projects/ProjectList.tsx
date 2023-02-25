import { Project, User } from "../../types/models";
import ProjectCard from "../ProjectCard/projectCard";

interface ProjectProps{
  projects: Project[], 
  user: User | null;
  handleDeleteProject: (name) => void
}
const ProjectList = (props:ProjectProps) => {
  const {projects} = props
  return (
    <>
    <h1>Project List</h1>
    <div className='projectListContainer'>
    <ProjectCard projects={projects} user={props.user} handleDeleteProject={props.handleDeleteProject}/>
    </div>
    </>
    );

}

export default ProjectList;
