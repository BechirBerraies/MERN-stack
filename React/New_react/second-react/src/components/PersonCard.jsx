import React, {Component} from "react";

class MyNewComponent extends Component {    
        render() {        
            return (    
        <fieldset>
                <legend>PersonComponent</legend>
                {this.props.people.map((person, idx)=> 
                <div key={idx}>
                    <h4>Full Name :{person.firstname}  {person.lastname}</h4>
                    
                    <p>Age : {person.age}</p>
                    <p>Hair Color : {person.hairColor}</p>
                    
                </div>)}
            </fieldset>

            );    
        }
    }

    
export default MyNewComponent;
