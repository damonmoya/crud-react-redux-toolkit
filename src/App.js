import './App.css';
import { seSelector, useSelector } from 'react-redux';
import TaskForm from './components/TaskForm';
import TasksList from './components/TasksList';

function App() {

  const tasksState = useSelector(state => state.tasks);

  return (
    <div className="App">
      <h1>Hello World</h1>

      <TaskForm/>
      <TasksList/>  
    </div>
  );
}

export default App;
