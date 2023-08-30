import React from "react";

class FirstClassComponent extends React.Component {
    render(){
        console.log(this);
        return (
            <div>
                <h1>Hello From component </h1>
                <h2>Number From App.js = {this.props.number}</h2>
                <hr />
                <h2>Bechir FROM APP.js {JSON.stringify(this.props.bechir)}</h2>
            </div>
        )
    }
}

export default FirstClassComponent