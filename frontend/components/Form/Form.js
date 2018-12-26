import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Input from './Input';

const FormContainer = styled.form`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  border: 2px solid black;
  margin: 2% 4%;
  padding: 2% 4%;
`;

const Form = () => {
  const [value, setValue] = useState('takeoff');
  const [choreography, setChoreography] = useState([]);
  useEffect(
    () => {
      console.warn(choreography);
      const updatedChoreography = [...choreography, value];
      setChoreography(updatedChoreography);
    },
    [value]
  );
  const handleClick = e => {
    e.preventDefault();
    const value = e.target.value;
    console.log(value);
    setValue(value);
  };
  return (
    <>
      <p>{value}</p>

      <p>{console.error(choreography)}</p>
      <FormContainer>
        <button onClick={handleClick} value="ccw 90">
          <span>⟲</span> 90°
        </button>
        <button onClick={handleClick} value="forward">
          <span>↑</span> forward cm
        </button>
        <button onClick={handleClick} value="cw 15">
          <span>⟳</span> 15°
        </button>
        <button onClick={handleClick} value="left">
          <span>←</span> left cm
        </button>

        <button onClick={handleClick} value="takeoff">
          Take Off
        </button>
        <button onClick={handleClick} value="land">
          Land
        </button>
        <button onClick={handleClick} value="emergency">
          !! emergency !!
        </button>

        <button onClick={handleClick} value="right">
          <span>→</span>
          right cm
        </button>
        <button className="height" onClick={handleClick} value="up">
          <span>⤒</span> cm
        </button>
        <button onClick={handleClick} value="back">
          <span>↓</span> back cm
        </button>
        <button className="height" onClick={handleClick} value="down">
          <span>⤓</span> cm
        </button>
        <button onClick={handleClick} value="flip l">
          Flip Left
        </button>
        <button onClick={handleClick} value="flip r">
          Flip Right
        </button>
        <button onClick={handleClick} value="flip b">
          Flip Back
        </button>
        <button onClick={handleClick} value="flip f">
          Flip Forward
        </button>
        <button onClick={handleClick} value="go 25 25 25 25">
          Go 25 25 25 25
        </button>
        <button onClick={handleClick} value="curve 100 100 100 150 250 350 50">
          Curve!
        </button>
      </FormContainer>
    </>
  );
};

export default Form;
