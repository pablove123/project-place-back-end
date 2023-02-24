import { ReactEventHandler, useState } from "react";
import { CreateProjectFormData } from "../../types/forms";

interface CreateProjectProps{
  // profile:profile, 
  handleCreate: (FormData: CreateProjectFormData) => void
}

const AddProject = (): JSX.Element => {
  const [form, setForm] = useState<CreateProjectFormData>({
    name: '',
    github: '',
    photo: '',
    app: '',
  })

  const handleChange = (event:React.ChangeEvent<HTMLInputElement>):void => {
    setForm({ ...form, [event.target.name]: event.target.value })
  }

  return ( 
    <>
    <main className="addProject">
      <h1>This is project</h1> 
      <form>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text" 
            name="name"
            value={form.name}
            placeholder="Project Name"/>
        </div>
        <div>
          <label htmlFor="app">Deployed App</label>
          <input
            type="text" 
            name="app"
            value={form.app}
            placeholder="Deployed App link"/>
        </div>
        <div>
          <label htmlFor="github">Github</label>
          <input
            type="text" 
            name="name"
            value={form.name}
            placeholder="Github Link"/>
        </div>
        <div>
          <label htmlFor="photo">Upload Screenshot</label>
          <input
            type="file"
            className="form-control"
            id="photo-upload"
            name="photo"
            // onChange={handleChangePhoto}
          />
        </div>
        <button>Create Project</button>
      </form>
    </main>
    </>
  );
}

export default AddProject;