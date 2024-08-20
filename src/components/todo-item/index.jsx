import editIcon from '../../assets/img/edit_8860814.png';
import deleteIcon from '../../assets/img/delete_12319558.png';
import saveIcon from '../../assets/img/diskette.png'
import { useState } from 'react';

export default function TodoItem({ task, editTask, deleteTask, toggleCheckCompletedTask }) {

    const [editedTask, setEditedTask] = useState({});

    function handleEditTask(){
        setEditedTask(task);
    }

    function handleSaveTask(){
        if(editedTask.text.trim() === ''){
            alert("Task name cannot be empty");
            return;
        }

        editTask(editedTask);
        setEditedTask({});
    }
    
    function handleDeleteTask() {
        deleteTask(task.id);
    }

    function handleToggleCheckCompletedTask() {
        toggleCheckCompletedTask(task.id);
    }

    const isEmptyObj = Object.keys(editedTask).length === 0;
    return (
        
        <div className="taskItem">
            <div className={`task ${task.completed ? 'completed' : ''}`}>
                {isEmptyObj ?
                 <><input
                        type="checkbox"
                        className="checkbox"
                        checked={task.completed}
                        onChange={handleToggleCheckCompletedTask} // Use task.id for editing
                    /><p className={task.completed ? 'strikethrough' : ''}>{task.text}</p></>
                :

                <input
                style={{
                    width: '200px',
                    marginLeft: '10px'
                }}
                type='text'
                className="editedText"
                name='editedText'
                value={editedTask.text}
                onChange={(e) => setEditedTask({...editedTask, text: e.target.value })} // Use task.id for editing
                />
                }
                
            </div>
            <div className="icons">
                {
                    isEmptyObj ?  <img src={editIcon} alt="edit" onClick={handleEditTask} /> :
                    <img src={saveIcon} alt="save" onClick={handleSaveTask} />
                }
                <img
                    className="icon-delete"
                    src={deleteIcon}
                    alt="delete"
                    onClick={handleDeleteTask} // Use task.id for deletion
                />
            </div>
        </div>
    );
}
