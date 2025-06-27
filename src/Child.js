const Child = (props) => {
    const val = props.value.value;
    return (  
        <div className="Child" style={{marginTop:'5rem'}}>
            <h1>Printing In Child</h1>
            <h2>{val}</h2>
        </div>
    );
}
 
export default Child;