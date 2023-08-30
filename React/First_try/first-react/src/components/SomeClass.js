
import React, {Component} from "react";

class SomeClassComponents extends Component{
    render(){
        return(
            <fieldset>
                <legend>
                    Some Class Component     
                </legend>
                {this.props.animals.map((animal,index)=> <h4 key={index} >{animal}</h4>)}
            </fieldset>
        )
    }
}

export default SomeClassComponents