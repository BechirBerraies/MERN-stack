import React, { Component } from "react";

class MyNewComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { ages: props.people.map(person => person.age) };
  }

  changeage = (idx) => {
    this.setState(prevState => {
      const updatedAges = [...prevState.ages];
      updatedAges[idx] = prevState.ages[idx] + 1;
      return { ages: updatedAges };
    });
  }

  render() {
    return (
      <fieldset>
        <legend>PersonComponent</legend>
        {this.props.people.map((person, idx) => (
          <div key={idx}>
            <h4>Full Name: {person.firstname} {person.lastname}</h4>
            <p>Age: {this.state.ages[idx]}</p>
            <p>Hair Color: {person.hairColor}</p>
            <button onClick={() => this.changeage(idx)}>Anniversary</button>
          </div>
        ))}
      </fieldset>
    );
  }
}

export default MyNewComponent;