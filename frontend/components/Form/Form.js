import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Input from './Input';
import { dronographyTwo } from '../../utils/commands';

const FormContainer = styled.form`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  border: 2px solid black;
  margin: 2% 4%;
  padding: 2% 4%;
`;

const Form = () => {
  // const [value, setValue] = useState('takeoff');
  // const [valueChange, setValueChange] = useState(false);
  const [choreography, setChoreography] = useState(['takeoff']);
  const [amount, setAmount] = useState(100);
  const [degress, setDegress] = useState(90);
  // useEffect(
  //   () => {
  //     console.warn(choreography);
  //     let updatedChoreography = [...choreography, value];
  //     setChoreography(updatedChoreography);
  //   },
  //   [value]
  // );
  const handleClick = e => {
    e.preventDefault();
    const value = e.target.value;
    // console.log(value);
    // setValue(value);
    let updatedChoreography = [...choreography, value];
    setChoreography(updatedChoreography);
  };
  const handleClear = e => {
    e.preventDefault();
    setChoreography(['takeoff']);
  };
  return (
    <>
      {/* <p>{value}</p> */}
      <p>{console.warn(choreography)}</p>
      <p>{choreography}</p>

      <FormContainer>
        <button onClick={handleClick} value={`ccw ${degress}`}>
          <span>⟲</span> {degress}°
        </button>
        <button onClick={handleClick} value={`forward ${amount}`}>
          <span>↑</span> forward {amount}cm
        </button>
        <button onClick={handleClick} value={`cw ${degress}`}>
          <span>⟳</span> {degress}°
        </button>
        <button onClick={handleClick} value={`left ${amount}`}>
          <span>←</span> left {amount}cm
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
        <button className="height" onClick={handleClick} value={`up ${amount}`}>
          <span>⤒</span> {amount}cm
        </button>
        <button onClick={handleClick} value={`back ${amount}`}>
          <span>↓</span> back {amount}cm
        </button>
        <button
          className="height"
          onClick={handleClick}
          value={`down ${amount}`}
        >
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
      <button type="button" onClick={() => dronographyTwo(choreography)}>
        Dronography Two
      </button>
      <button type="button" onClick={handleClear}>
        Clear
      </button>
    </>
  );
};

export default Form;
