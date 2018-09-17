import React from 'react';
import styled from 'styled-components';
import {
  FormControl,
  InputLabel,
  Input,
  InputAdornment,
} from '@material-ui/core';
import FieldRenderer from './FieldRenderer';

const InputLabelWrapper = styled(InputLabel)`
  margin-left: 1em;
`;

class InputGroupComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      labelToggle: false,
    };
    this.handleFoucs = () => {
      console.log('In the foucs');
    };
  }

  render() {
    return (
      <FormControl
        fullWidth
        {...this.props.input}
        {...this.props}
        placeholder={this.props.label}
        error={this.props.meta.invalid && this.props.meta.touched}
        type={this.props.type}
        label={this.props.label}
      >
        <InputLabelWrapper
          htmlFor="adornment-amount"
          shrink={this.state.labelToggle}
        >
          Amount
        </InputLabelWrapper>
        <Input
          id="adornment-amount"
          onFocus={() => {
            console.log(this.props);
            if (!this.props.input.value) {
              this.setState({
                labelToggle: !this.state.labelToggle,
              });
            }
          }}
          onBlur={() => {
            console.log(this.props);
            if (!this.props.input.value) {
              this.setState({
                labelToggle: !this.state.labelToggle,
              });
            }
            console.log('On blur');
          }}
          startAdornment={<InputAdornment position="start">$</InputAdornment>}
        />
      </FormControl>
    );
  }
}

export default InputGroupComponent;
