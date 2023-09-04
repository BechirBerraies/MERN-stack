import React from 'react';
const PersonCard = props => {
    return(

        

        <fieldset>
            <legend>My new Person Card </legend>
            {props.people.map((person, idx) => (
                <div key={idx}>
                <h1>Full name: { person.lastName }, { person.firstName }</h1>
                <p>Age: { person.age }</p>
                <p>Hair Color: { person.hairColor }</p>
                </div>
                ))}   
        </fieldset>
    );
}
export default PersonCard;