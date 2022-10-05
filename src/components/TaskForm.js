import { useState } from "react";

function TaskForm() {

  const [task, setTask] = useState({
    title: '',
    description: ''
  });

  const handleChange = (e) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value
    })
  }

  return (
    <form>
      <input 
      name="title" 
      type="text" 
      placeholder="Enter a task" 
      onChange={handleChange}
      />

      <textarea 
        name="description" 
        placeholder="Enter a description" 
        onChange={handleChange}
      />
    
      <button type="submit">Save</button>
    </form>
  )
}

export default TaskForm