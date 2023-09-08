import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const FormComponent = () => {
  const navigate = useNavigate();
  const [heroID, setHeroID] = useState(0);
  const [selectedOption, setSelectedOption] = useState('/people'); 

  const searchHero = (e) => {
    e.preventDefault();
    console.log('HERO ID:', heroID);
    navigate(`${selectedOption}/${heroID}`);
  }

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  }

  return (
    <form onSubmit={searchHero}>
      <label htmlFor="">HERO ID</label>
      <input
        className='form-control'
        type='number'
        onChange={(e) => setHeroID(e.target.value)}
        value={heroID}
      />
      <select value={selectedOption} onChange={handleOptionChange}>
        <option value="/people">people</option>
        <option value="/planets">planets</option>
      </select>
      <button className='btn btn-success'>Search</button>
    </form>
  );
}

export default FormComponent;