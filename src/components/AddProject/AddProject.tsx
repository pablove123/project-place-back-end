import { ReactEventHandler, useState } from "react";
import { CreateProjectFormData } from "../../types/forms";

interface CreateProjectProps{
  // profile:profile, 
  handleCreate: (FormData: CreateProjectFormData) => void
}

const AddProject = (props): JSX.Element => {
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

  const handleSubmit = (event:ReactEventHandler):void => {
    event.preventDefault()
    props.handleAddProject(form)
  }
  // const handleChangePhoto = (evt) => {
  //   setPhoto({ photo: evt.target.files[0] })
  // }

  return ( 
    <>
    <main className="addProject">
      <h1>This is project</h1> 
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            onChange={handleChange}
            type="text" 
            name="name"
            value={form.name}
            placeholder="Project Name"/>
        </div>
        <div>
          <label htmlFor="app">Deployed App</label>
          <input
          onChange={handleChange}
            type="text" 
            name="app"
            value={form.app}
            placeholder="Deployed App link"/>
        </div>
        <div>
          <label htmlFor="github">Github</label>
          <input
          onChange={handleChange}
            type="text" 
            name="github"
            value={form.github}
            placeholder="Github Link"/>
        </div>
        <div>
          <label htmlFor="picture">Image Link</label>
          <input
          onChange={handleChange}
          type="text" 
          name="picture"
          value={form.picture}
          placeholder="Image Link"/>
        </div>
        <button type="submit">Create Project</button>
      </form>
    </main>
    </>
  );
}

export default AddProject;