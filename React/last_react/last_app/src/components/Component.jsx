import React, { Component } from 'react'

class ClassComponent extends Component {
    constructor(props){
        super(props)
        this.state = {
            ...this.props

        }
    }
    clickME= ()=>{
        console.log("button Clicked");
        this.setState({favNumber:this.state.favNumber+1} )
        console.log("The New Number ",this.state.favNumber);
        this.setState({alex:{...this.state.alex,age:this.state.alex.age+1}})

    }
    render() {
      console.log("Props from App.js",this.props);
    return (
        <fieldset>

            <legend>ClassComponent</legend>
            <h2>Props From App.js : {JSON.stringify(this.props)}</h2>
            <hr />
            <h2>STATE : {JSON.stringify(this.state)}</h2>
            <button onClick={this.clickME}>Click Here</button>
            <button onClick={this.clickME}>Second Click</button>
        </fieldset>
    )
  }
}
export default ClassComponent