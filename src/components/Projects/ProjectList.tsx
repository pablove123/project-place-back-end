import { Project } from "../../types/models";
import ProjectCard from "../ProjectCard/projectCard";

interface ProjectProps{
  projects: Project[]
}
const ProjectList = (props:ProjectProps) => {
  const {projects} = props
  console.log(projects)
  return (
    <>
    <h1>Project List</h1>
    <div className='projectListContainer'>
    <ProjectCard projects={projects}/>
    </div>
    </>
    );

}

export default ProjectList;
