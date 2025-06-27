import Parent from "./Parent";
const GrandParent = () => {
    const  hello = "Hello from GrandParent"
    return (  
        <div className="gp">
            <Parent value = {hello}/>
        </div>
    );
}
 
export default GrandParent;