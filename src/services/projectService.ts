// services
import * as tokenService from './tokenService'

// types
import { Project } from '../types/models'
import { PhotoFormData } from '../types/forms'

const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/api/projects`

async function getAllProjects(): Promise<Project[]> {
  try {
    const res = await fetch(BASE_URL, {
      headers: { 'Authorization': `Bearer ${tokenService.getToken()}` },
    })
    return await res.json() as Project[]
  } catch (error) {
    throw error
  }
}

const create = async (projectData:object) => {
  try {
    const res = await fetch(BASE_URL, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(projectData)
    })
    return res.json()
  } catch (error) {
    console.log(error);
  }
}
const deleteProject = async (name:string) => {
  try {
    const res = await fetch(`${BASE_URL}/${name}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`
      }
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}
const updateProject = async (projectData: Project) => {
  try {
    console.log("projectdata",projectData)
    const res = await fetch(`${BASE_URL}/${projectData.id}`, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(projectData)
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

export{
  getAllProjects, 
  create, 
  deleteProject,
  updateProject
}