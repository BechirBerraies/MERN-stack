import React, { Component } from 'react'


class personalComponent extends Component {
  render() {
    console.log("this is this: ",this);
    //rest-spread operator 
    const people = [...this.props.people]
    return (
      <fieldset>
        
        <legend>Personal Componant</legend>
        {people.map((person,idx)=> {return(
            <div key={idx}>
                <h4>{person.username}</h4>
                <h4>{person.age}</h4>
                <h4>Person : {JSON.stringify(person)}</h4>
                

            </div>
        )


        })}
      </fieldset>
    )
  }
}


export default personalComponent