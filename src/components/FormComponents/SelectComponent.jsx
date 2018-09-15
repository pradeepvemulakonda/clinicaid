import React from 'react';
import Select from 'react-select';
import FieldRenderer from './FieldRenderer';

const SelectComponent = options =>
  FieldRenderer(props => (
    <Select block {...props.input}>
      {options.map(option => (
        <option value={option.value}>{option.key}</option>
      ))}
    </Select>
  ));

export default SelectComponent;
