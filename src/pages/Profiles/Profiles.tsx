// npm packages
import { useState, useEffect } from 'react'
import ProfileCard from '../../components/profileCard/profileCard'

// services
import * as profileService from '../../services/profileService'

// types
import { Profile } from '../../types/models'

const Profiles = (): JSX.Element => {
  const [profiles, setProfiles] = useState<Profile[]>([])

  useEffect((): void => {
    const fetchProfiles = async (): Promise<void> => {
      try {
        const profileData: Profile[] = await profileService.getAllProfiles()
        setProfiles(profileData)
      } catch (error) {
        console.log(error)
      }
    }
    fetchProfiles()
  }, [])

  

  if(!profiles.length) return <p>No profiles yet</p>

  return (
    <>
      <h1 id='profileTitle'>Profiles and Posts</h1>
      {profiles.map((profile: Profile) =>
      <div key={profile.createdAt}>

        <p id='profileName' key={profile.createdAt}>➤{profile.name} has posted {profile.projects.length} projects</p>
          <ProfileCard  profile={profile}/>
      </div>
      )}
    </>
  )
}

export default Profiles
