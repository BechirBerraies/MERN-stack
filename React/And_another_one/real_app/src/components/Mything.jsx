import React, { Component } from 'react'




class Mything extends Component {
    



    constructor(props) {
        super(props);
        this.state = {
            people: this.props.people
        };
    }

    add= (idx) => {
        const UpdatedValue = [...this.state.people];
        UpdatedValue[idx].age += 1
        this.setState({people: UpdatedValue})
    }

  


  render() {
    return (
        <fieldset>
            <legend>Everybody</legend>
            {this.props.people.map((person,idx) => <div key={idx}>
                <ul>
                    <fieldset>
                        <legend>{person.name}</legend>
                    <li>{person.name}</li>
                    <li>{person.age}</li>
                    <li>{person.Food}</li>
                    <button  onClick={()=> this.add(idx)}> Click Here</button>
                    </fieldset>
                </ul>
            
            
            
            </div>
            )}
        </fieldset>
    )
  }
}


export default Mything
