import { useState } from "react";
import Child from './Child' 
const Counter = () => {
    const [value,setValue] =  useState(0);
    const[greetings,setGreetings] = useState('Hello');

    const greet = (greetings) =>{
        if(greetings==="Hello"){
            setGreetings("WelcomeBack");
        }
        else{
            setGreetings("Hello");
        }
    }

    const increment = (value) =>{
        if(value<10){
            setValue(value = value+1);
        }
        else{
            setValue(0);
        }
    }


    const decrement = (value) =>{
        if(value>0){
            setValue(value = value-1);
        }
        else{
            alert("Value can't go less than 0")
        }
    }

    return ( 
    <div className="container">

        <div className="counter">
            <div><h2>COUNTER</h2></div>
            <div className="buttons">
                    <button id="btn1" onClick={() => decrement(value)}>-</button>
            <p>{value}</p>
            <button id="btn2" onClick={() => increment(value)}>+</button>
            </div>

        </div>
            <div className="return">
                <h2>{greetings}</h2>
                <button id="btn3" type="button" value={greetings} onClick={() => greet(greetings)}>Click</button>
            </div>
    </div>
     );
}
 
export default Counter;