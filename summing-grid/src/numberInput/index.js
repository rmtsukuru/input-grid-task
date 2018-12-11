import React from 'react';

const NumberInput = ({ onChange, value }) => {
  return (
    <input
      type="text"
      onChange={event => onChange(event.target.value)}
      value={value}
    />
  );
};

export default NumberInput;
