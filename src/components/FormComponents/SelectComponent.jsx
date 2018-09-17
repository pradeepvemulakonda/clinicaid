import React from 'react';
import Select from 'react-select';
import FieldRenderer from './FieldRenderer';

const SelectComponent = options =>
  FieldRenderer(props => <Select block {...props.input} options={options} />);

export default SelectComponent;
