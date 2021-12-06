import './App.css';
import Header from './components/Header' 
import TaskField from './components/TaskField' 
import TaskList from './components/TaskList' 
import {useState} from 'react'


function App() {
  const [tasksArray, setTasksArray] = useState([])

  const addTaskToArray = (task) => {
    setTasksArray([...tasksArray, task])
  }
  const deleteTaskFromArray = (taskToDelete) => {
    setTasksArray(tasksArray.filter(task => task !== taskToDelete))
  }

  // The filter() method creates a new array filled with elements that pass a test provided by a function.
  // const deleteTaskFromArray = ('task1') => {
  //   setTasksArray(tasksArray.filter([individual array items] => [individual array items] !== 'task1'))
  // }
  


  return (
    <div className="container">
      <Header />
      <TaskField addTaskToArray={addTaskToArray}/>
      <TaskList tasksArray={tasksArray} deleteTaskFromArray={deleteTaskFromArray}/>

    </div>
  );
}

export default App;
