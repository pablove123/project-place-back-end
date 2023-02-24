// services
import * as tokenService from './tokenService'

// types
import { Project } from '../types/models'

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

export{
  getAllProjects
}