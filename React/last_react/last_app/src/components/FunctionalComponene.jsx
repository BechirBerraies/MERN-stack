import React,{useState} from "react";


const FunctionalComponent = (props) => {
    console.log("props",props);
    //DEStruction
    const [favNumber,setFavNumber] = useState(props.favNumber)
    const [alex,setAlex] = useState(props.alex)
    
    
    const increment = ()=>{
        setFavNumber(favNumber+1)
        
    }
    const incrementAge = () =>{
        setAlex({...alex,age:alex.age+1})
    }

    return(
        <fieldset>
            <legend>Functional Component</legend>
            <h2>Props From js {JSON.stringify(props)}</h2>
            <h4>Fav Number From State: {favNumber}</h4>
            <button onClick={increment}>Click Me </button>
            <h4>Alex From State: {JSON.stringify(alex)}</h4>
            <button onClick={incrementAge}>Happy Birthday</button>
            {
                favNumber> 19
                    ? <h2>You reached the limit </h2>
                    : <h2>Still Waiting ... </h2>
            }

        </fieldset>
    )
}

export default FunctionalComponent