import ProjectCard from "../ProjectCard/projectCard"
import { Profile } from "../../types/models"

interface profileCardProps{

  profile:Profile
}

const ProfileCard = (props:profileCardProps) => {
  return ( 
    <>
    <div id="profileCard">
    {props.profile.projects.map((project) =>
    <div >
        <p>{project.name}</p>
        <img id="projectPicture" src={project.picture} alt="" />
    </div>
    )}
    </div>
    </>
  );
}

export default ProfileCard;