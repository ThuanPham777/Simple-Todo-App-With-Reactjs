
import TodoItem from "../todo-item"

export default function TodoList({taskList , deleteTask, toggleCheckCompletedTask, editTask}){

    return(
        <ul id="task-list">
            {
                taskList?.length > 0
                ?
                taskList.map((taskItem) => 
                <TodoItem 
                key={taskItem.id} 
                task={taskItem}
                deleteTask={deleteTask}
                toggleCheckCompletedTask ={toggleCheckCompletedTask}
                editTask = {editTask}
                />)
                : null
            }
        </ul>
    )
}