import { ReactEventHandler, useState } from "react";
import { CreateProjectFormData } from "../../types/forms";

interface CreateProjectProps{
  // profile:profile, 
  // handleCreate: (FormData: CreateProjectFormData) => void, 
  handleAddProject: (FormData: CreateProjectFormData) => void, 

}

const AddProject = (props:CreateProjectProps): JSX.Element => {
  const [form, setForm] = useState<CreateProjectFormData>({
    name: '',
    github: '',
    picture: '',
    app: '',
  })
  const [photo, setPhoto] = useState({})

  const handleChange = (event:React.ChangeEvent<HTMLInputElement>):void => {
    setForm({ ...form, [event.target.name]: event.target.value })
  }

  const handleSubmit = (event:React.MouseEvent<HTMLFormElement>):void => {
    event.preventDefault()
    props.handleAddProject(form)
  }

  return ( 
    <>
    <main className="addProject">
      <h1>Create A Project Below</h1> 
      <form onSubmit={handleSubmit}>
        <div id="formProjectName">
          <label htmlFor="name">Project Name:</label>
          <input
            onChange={handleChange}
            type="text" 
            name="name"
            value={form.name}
            placeholder="Project Name"/>
        </div>
        <div id="formProjectName">
          <label htmlFor="app">Deployed App:</label>
          <input
          onChange={handleChange}
            type="text" 
            name="app"
            value={form.app}
            placeholder="Deployed App link"/>
        </div>
        <div id="formProjectName">
          <label htmlFor="github">Github Repo:</label>
          <input
          onChange={handleChange}
            type="text" 
            name="github"
            value={form.github}
            placeholder="Github Link"/>
        </div>
        <div id="formProjectName">
          <label htmlFor="picture">Image Link:</label>
          <input
          onChange={handleChange}
          type="text" 
          name="picture"
          value={form.picture}
          placeholder="Image Link"/>
        </div>
        <button id="formSubmit" type="submit">Create Project</button>
      </form>
    </main>
    </>
  );
}

export default AddProject;