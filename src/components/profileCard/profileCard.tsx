import ProjectCard from "../ProjectCard/projectCard"
import { Profile } from "../../types/models"

interface profileCardProps{

  profile:Profile
}

const ProfileCard = (props:profileCardProps) => {
  return ( 
    <>
    <div id="profileCard">
      {props.profile.projects.length === 0 &&
      <>
      <p id="noProject" >No projects posted yet</p>
      </>}
    {props.profile.projects.map((project) =>
    <div key={project.name}> 
      
        <p  id="profileProjectName"> <a href={project.app}>{project.name}</a></p>
        <img id="projectPicture" src={project.picture} alt="" />
    </div>
    )}
    </div>
    </>
  );
}

export default ProfileCard;