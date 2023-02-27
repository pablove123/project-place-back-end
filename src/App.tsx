// npm modules 
import { useEffect, useState } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'

// page components
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import Landing from './pages/Landing/Landing'
import Profiles from './pages/Profiles/Profiles'
import ChangePassword from './pages/ChangePassword/ChangePassword'
import AddProject from './components/AddProject/AddProject'
import ProjectList from './components/Projects/ProjectList'
import UpdateProject from './components/UpdateProject/UpdateProject'

// components
import NavBar from './components/NavBar/NavBar'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'

// services
import * as authService from './services/authService'
import * as projectService from './services/projectService'



// stylesheets
import './App.css'

// types
import { User, Project } from './types/models'

function App(): JSX.Element {
  const navigate = useNavigate()
  
  const [user, setUser] = useState<User | null>(authService.getUser())

  const [projects, setProjects] = useState<Project[]>([]) 

  const handleLogout = (): void => {
    authService.logout()
    setUser(null)
    navigate('/')
  }

  const handleAuthEvt = (): void => {
    setUser(authService.getUser())
  }

  useEffect(():void =>{
    const fetchProjects = async (): Promise<void> => {
      try {
        const projectsData: Project[] = await projectService.getAllProjects()
        setProjects(projectsData) 
      } catch (error) {
        console.log(error)
      }
    }
    if (user) fetchProjects()
  },[user])

  const handleDeleteProject = async (name:string) => {
    const deletedProject = await projectService.deleteProject(name)
    // setProjects(projects.filter(b => b.name !== deletedProject.name))
    // navigate('/')
    const updatedProjects = await projectService.getAllProjects()
    setProjects(updatedProjects)
    navigate(`/projects`)
  }
  const handleUpdateProject = async (projectData: Project) => {
    const updatedProject = await projectService.updateProject(projectData)
    // setProjects(projects.map((b) => projectData.name === b.name ? updatedProject : b))
    const updatedProjects = await projectService.getAllProjects()
    setProjects(updatedProjects)
    navigate(`/projects`)
  }


  // const projectPhotoHelper = async (photo:string, id): Promise<void> => {
  //   const photoData = new FormData()
  //   photoData.append('photo', photo)
  //   return await projectService.addPhoto(photoData, id)
  // }

  const handleAddProject = async (projectData:object): Promise<void> => {
    const newProject = await projectService.create(projectData)
    // if(photo){
    //   newProject.photo = await projectPhotoHelper(photo, newProject.profileId)
    // }
    setProjects([newProject, ...projects])
    navigate(`/projects`)
  }
  
  return (
    <>
      <NavBar user={user} handleLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Landing user={user} />} />
        <Route
          path="/signup"
          element={<Signup handleAuthEvt={handleAuthEvt} />}
        />
        <Route
          path="/login"
          element={<Login handleAuthEvt={handleAuthEvt} />}
        />
        <Route
          path="/project"
          element={<AddProject handleAddProject={handleAddProject} />}
        />
        <Route
          path="/projects"
          element={<ProjectList projects={projects} user={user} handleDeleteProject={handleDeleteProject} handleUpdateProject={handleUpdateProject} />}
        />
        <Route
          path="/profiles"
          element={
            <ProtectedRoute user={user}>
              <Profiles />
            </ProtectedRoute>
          }
        />
        <Route
          path="/change-password"
          element={
            <ProtectedRoute user={user}>
              <ChangePassword handleAuthEvt={handleAuthEvt} />
            </ProtectedRoute>
          }
        />
        <Route path="/projects/:projectName" element={
          <ProtectedRoute user={user}>
          <UpdateProject handleUpdateProject={handleUpdateProject} />
          </ProtectedRoute>
        } />
      </Routes>
    </>
  )
}

export default App
