import { useState, useEffect } from "react"
import FormInput from "./components/form-input"
import Statistics from "./components/statistics"
import TodoList from "./components/todo-list"
import './index.css'

function App() {


  const [taskList, setTodoList] = useState(() => {
    const savedTasks = localStorage.getItem("taskList");
    return savedTasks ? JSON.parse(savedTasks) : [
      { id: 1, text: 'going out', completed: false },
      { id: 2, text: 'buy groceries', completed: false }
    ];
  });

  useEffect(() => {
    localStorage.setItem("taskList", JSON.stringify(taskList));
  }, [taskList])

  function addNewTask(text)
  {
    const newTask = {
      id: taskList.length > 0 ? taskList.length + 1 : 1,
      text,
      completed: false
    }
    setTodoList(
      [...taskList, newTask]
    )
    
  }

  function deleteTask(id){

    setTodoList(taskList.filter(task => task.id !== id));
    
  }

  function toggleCheckCompletedTask(id){

    setTodoList(taskList.map(task => task.id === id ? {...task, completed :!task.completed} : task));

    
  }

  function editTask(editedTask){

    setTodoList(taskList.map(task => task.id === editedTask.id? editedTask : task));

  }

 
  
  return (
    <>
       <div className="container">
        <Statistics
        taskList={taskList}
        />
        <FormInput
        addNewTask={addNewTask}
        />
        <TodoList 
        taskList={taskList}
        deleteTask={deleteTask}
        toggleCheckCompletedTask={toggleCheckCompletedTask}
        editTask={editTask}
        />
       </div>
    </>
  )
}

export default App
