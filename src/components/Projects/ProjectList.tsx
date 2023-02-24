import { Project } from "../../types/models";
import ProjectCard from "../ProjectCard/projectCard";

interface ProjectProps{
  projects: Project[]
}
const ProjectList = (props:ProjectProps) => {
  const {projects} = props
  console.log("projectList props", props)
  return (
    <>
    <h1>Project List</h1>
    <ProjectCard projects={projects}/>
    </>
    );

}

export default ProjectList;
