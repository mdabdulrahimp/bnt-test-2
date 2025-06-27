const TaskList = ({list, set}) => {
    
    const addTask = () =>{
        set([
            ...list,
            {
                title:'Meet Aminam',
                desc: 'For a business deal',
                user: 'official',
                id: list.length + 1
            }
        ]);
    };

    const removeTask = (id) =>{
        if(id>1){
        const updatedList = list.filter(task => task.id!=id);
        set(updatedList);
        }
        else{
            alert("Enough don't delete all, I didn't written much code to accomodate.........")
        }
        
    };
    return ( 
        <div className="tasks">
            {list.map((task) =>(
                <div className="list-preview" key={task.id}>
                    <h2>{task.title}</h2>
                    <p>User:{task.user}</p>
                    <button onClick={() => removeTask(list[list.length-1].id)} style={{padding:'12px 8px',marginLeft: '12px'}}>Delete</button>
                </div>
            ))}
            {/* <button onClick={addTask} style={{padding:'12px 8px',  marginRight: '12px' }}>+</button> */}

        </div>
     );
}
 
export default TaskList;