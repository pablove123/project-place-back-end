import { Project,User } from "../../types/models";
import { useLocation } from "react-router";
import { useState } from "react";
import { UpdateProjectFormData } from "../../types/forms";

interface UpdateProjectProps{

  handleUpdateProject: (projectData:Project) => void
}


const UpdateProject = (props:UpdateProjectProps) => {
  const { state } = useLocation()
  const [form, setForm] = useState(state)
  console.log("this is state in UpdateProject", form)
  
  const handleChange = ({ target } :React.ChangeEvent<HTMLInputElement>):void => {
    setForm({ ...form, [target.name]: target.value })
  }

  // const handleChange = (evt: { target: HTMLInputElement }):void => {
  //   setForm({ ...form, [evt.target.name]: evt.target.value })
  // }
  
  const handleSubmit = (e:React.MouseEvent<HTMLFormElement>):void => {
    e.preventDefault()
    props.handleUpdateProject(form)
  }

  return ( 
    <>
      <main className="addProject">
      <h1>Update Your Project Below</h1> 
      <form onSubmit={handleSubmit}>
        <div id="formProjectName">
          <label htmlFor="name">Name</label>
          <input
            onChange={handleChange}
            type="text" 
            name="name"
            value={form.name}
            placeholder="Project Name"/>
        </div>
        <div id="formProjectName">
          <label htmlFor="app">Deployed App</label>
          <input
          onChange={handleChange}
            type="text" 
            name="app"
            value={form.app}
            placeholder="Deployed App link"/>
        </div>
        <div id="formProjectName">
          <label htmlFor="github">Github</label>
          <input
          onChange={handleChange}
            type="text" 
            name="github"
            value={form.github}
            placeholder="Github Link"/>
        </div>
        <div id="formProjectName">
          <label htmlFor="picture">Image Link</label>
          <input
          onChange={handleChange}
          type="text" 
          name="picture"
          value={form.picture}
          placeholder="Image Link"/>
        </div>
        <button id="formSubmit" type="submit">Update Project</button>
      </form>
    </main>
    </>
  );
}

export default UpdateProject;