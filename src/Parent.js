import Child from './Child';

const Parent = (value) => {
    console.log("From parent",value);
    return (  
        <Child value={value}/>
    );
}
 
export default Parent;