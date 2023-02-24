import { Project } from "../../types/models";
import ProjectCard from "../ProjectCard/projectCard";

interface ProjectProps{
  projects: Project[]
}
const ProjectList = (props:ProjectProps) => {
  console.log(props)
  return (
    <>
    <h1>Project List</h1>
    <ProjectCard/>
    </>
    );

}

export default ProjectList;
