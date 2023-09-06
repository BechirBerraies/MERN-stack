import React from 'react'

const Display = (props) => {
  return (
      <fieldset>

      <legend>
          <h3>Display</h3>


      </legend>

      <h4>{JSON.stringify(props)}</h4>
        <h3>Username: {props.username}</h3>
        <h3>Age: {props.age}</h3>
        <h3>Fav Food: {props.favFood}</h3>
        <hr />
        <h3>
            User: {JSON.stringify(props.user)}
        </h3>
      </fieldset>
      )
}

export default Display