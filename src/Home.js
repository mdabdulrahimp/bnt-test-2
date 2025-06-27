import { useState } from "react";
import TaskList from "./TaskList";

const Home = () => {
    const [value, set] = useState("Unchecked");

    const [list,setElements] = useState([
        {title:'Read Book', desc: 'Complete the book on 28th sept', user:'saiprasanth', id:1},
        {title:'Breakfast', desc: 'Breadfast at 8:00am', user:'saiprasanth', id:2},
        {title:'Lunch', desc: 'Lunch at 1:00pm', user:'official', id:3}
    ]);

    const checked = (value) =>{
        if(value === "Unchecked"){
            set("Checked the box")
        }
        else{
            set("Unchecked")
        }
    }

    return (

        <div className="home">
            <h2 style={{textAlign: 'center'}}>List With Delete Button</h2>
            <TaskList list={list} set={setElements}/>
            <input type="checkbox" onClick={()=>checked(value)} />
            <p>{value}</p>
        </div>
      );
}
 
export default Home;