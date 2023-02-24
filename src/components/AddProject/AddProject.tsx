const AddProject = () => {
  
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
            // value={form.name}
            placeholder="Project Name"/>
        </div>
        <div>
          <label htmlFor="app">Deployed App</label>
          <input
            type="text" 
            name="app"
            // value={form.app}
            placeholder="Deployed App link"/>
        </div>
        <div>
          <label htmlFor="github">Github</label>
          <input
            type="text" 
            name="name"
            // value={form.name}
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
      </form>
    </main>
    </>
  );
}

export default AddProject;