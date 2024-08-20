import { useState } from "react";

export default function FormInput({ addNewTask }) {
    const [taskText, setTaskText] = useState(''); // Correct use of useState

    function handleInputTask(event) {
        console.log(event.target.value);
        setTaskText(event.target.value); // Directly update the taskText with the new value
    }

    function handleAddNewTask(event) {
        event.preventDefault();
        if(taskText.trim() === '') {
            alert('Please enter a task text');
            return;
        }
        addNewTask(taskText); // Pass the taskText to the addNewTask function
        setTaskText(''); // Clear the input field after adding the task
    }

    return (
        <form>
            <input 
                type="text" 
                id="taskInput"
                name="task"
                value={taskText}
                placeholder="Write your task"
                onChange={handleInputTask}
            />
            <button id="newTask" type="submit" onClick={handleAddNewTask}>+</button>
        </form>
    );
}
