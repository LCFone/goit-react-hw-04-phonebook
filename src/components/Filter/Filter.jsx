import React from 'react';
import './Filter.css';

export const Filter = ({ type, value, onChange }) => {
  return (
    <div>
      <h2 className="filterTitle">Contacts</h2>
      <p className="filterText">Find contact by name</p>
      <input
        className="form-control filterInput"
        type={type}
        value={value}
        onChange={onChange}
      ></input>
    </div>
  );
};
