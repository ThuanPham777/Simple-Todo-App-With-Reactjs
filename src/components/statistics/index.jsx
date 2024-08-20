

export default function Statistics({taskList}){

    const completedTasks = taskList.filter(task => task.completed === true);

    let percentageOfCompletedTasks = 0;

    if(taskList.length > 0)
    {
        percentageOfCompletedTasks = Math.floor(completedTasks.length * 100 / taskList.length);

        percentageOfCompletedTasks += '%'
    }
    
    return(
        <div className="stats-container">
            <div className="details">
                <h1>Todo App</h1>
                <p>Keep it up!</p>
                <div id="progressBar">
                    <div style={{width: percentageOfCompletedTasks}} id="progress"></div>
                </div>
            </div>
            <div className="stats-number">
                <div id="numbers"> {completedTasks.length} / {taskList.length}
                </div>
            </div>
        </div>
    )
}